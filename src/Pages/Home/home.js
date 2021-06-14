import React, {useEffect, useState} from 'react';
import '../../App.css';
import '../../Nutrition.css';
import { makeStyles } from '@material-ui/core/styles';
import JsUploadSpreadsheet from '../../Components/JS_Uploadspreadsheet';
  import { 
    Card,CardContent,Typography, LinearProgress
  } from '@material-ui/core/';
import AlimentCard from '../../Components/Aliments/AlimentCard';
import SummariesAliment from '../../Components/Aliments/SummariesAliment';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from '@material-ui/core/Container';

import aliment_images from '../../resources/aliment_images2.json';




export default function Home() {
const [uploaded, setUploadState] = useState(false);
const [selectedAliments, setSelectedAliments] = useState({});
const [spreadsheetCompo, setSpreadsheetCompo] = useState({});
const [loading, setLoading] = useState(false);
const [aliment_options, setAlimentOptions] = useState([]);

const [currentlySelectedGroupAlimentaire, setCurrentlySelectedGroupAlimentaire] = useState("Aucun Groupe Alimentaire Sélectionné");
const textColor = "#00CAE8n";
const classes = useStyles();

  useEffect(() => {      


  }, []);

  return (
    <div >
      <Container maxWidth="sm">
        {
        !uploaded &&
        
        <>
          <JsUploadSpreadsheet 
              stateMutator={setUploadState} 
              spreadSheetCompoMutator={setSpreadsheetCompo} 
              setLoadingMutator={setLoading}
              setAlimentOptions={setAlimentOptions}
          />
        </>

        }
        
        {
          loading && 
          <LinearProgress style={{marginTop: 10}}/>
        }

        {
          uploaded &&
            <div className={classes.root}>
              
              <AlimentCard 
                  groupe_alimentaire={currentlySelectedGroupAlimentaire} 
                  aliment_options={aliment_options} 
                  setSelectedAliments={setSelectedAliments}
                  selectedAliments={selectedAliments}
                  aliment_images={aliment_images}
                  setCurrentlySelectedGroupAlimentaire={setCurrentlySelectedGroupAlimentaire}
              />
              
              

              <Card className={classes.summary_root} style={{zIndex:-1}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{color: textColor}} style={{paddingBottom: 20}} >
                  Apports nutritionnels du jour
                  </Typography>

                  <SummariesAliment 
                      selectedAliments={selectedAliments}
                      nutrientCompo={spreadsheetCompo}
                  />

                </CardContent>        
              </Card>

              
            {/* <Box component="span" m={1}>
              
            </Box> */}
            
          </div>
        }
      </Container>
    </div>
  );
  }

  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, rgba(255,255,255,0.9) 30%, #rgba(225,225,2,0.4) 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(10, 10, 0, .1)',
      color: 'white',
      flex: 1
    },
    food_card:{
      flexGrow: 1
    },
    summary_root: {
      width: "100%",
      flex: 1
    },
    myCardRow:{
      flexDirection: 'row'
    },
    myCardColumn: {
      flexDirection: 'column'
    },
    title: {
      fontSize: 24,
      justifyContent: 'center'
    },
  }
);
