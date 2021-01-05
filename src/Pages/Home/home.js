import React, {useEffect, useState} from 'react';
import '../../App.css';
import '../../Nutrition.css';
import {Container, Box} from '@material-ui/core/';
import HeaderBox from '../../Components/Header/headerBox';
import { makeStyles } from '@material-ui/core/styles';
import JsUploadSpreadsheet from '../../Components/JS_Uploadspreadsheet';
import {
  Paper, 
  Card,CardContent,Typography, LinearProgress
} from '@material-ui/core/';
import AlimentCard from '../../Components/Aliments/AlimentCard';
import SummariesAliment from '../../Components/Aliments/SummariesAliment';
import Carousel from 'react-elastic-carousel'


export default function Home() {
const [uploaded, setUploadState] = useState(false);
const [file_name, setFileName] = useState("No File Uploaded")
const [aliment_portion, setAlimentPortion] = useState({});
const [spreadsheetData, setSpreadsheetData] = useState({});
const [spreadsheetCompo, setSpreadsheetCompo] = useState({});
const [loading, setLoading] = useState(false);
const [aliment_options, setAlimentOptions] = useState([]);

const classes = useStyles();

  useEffect(() => {
      
      if (typeof spreadsheetData.aliments == 'undefined') return;

      let myAlimentObj = {};
      spreadsheetData.aliments.forEach((item) => {
          myAlimentObj[item.aliment] = item.portion;
      });
      
      setAlimentPortion(
        myAlimentObj
      );


  }, [spreadsheetData, aliment_options]);

  return (
    <Container >
        <HeaderBox file_name={file_name}/>
        
        {
        !uploaded &&
        
        <>
          <JsUploadSpreadsheet 
              stateMutator={setUploadState} 
              spreadSheetMutator={setSpreadsheetData} 
              spreadSheetCompoMutator={setSpreadsheetCompo} 
              setAlimentPortionMutator={setAlimentPortion}
              setLoadingMutator={setLoading}
              setFileName={setFileName}
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
            <Paper elevation={3} className={classes.root}>
              <Card className={classes.summary_root}>
                <CardContent>
                  <Typography className={classes.title} >
                    Summaries
                  </Typography>

                  <SummariesAliment 
                      aliment_portion={aliment_portion}
                      nutrientCompo={spreadsheetCompo}
                  />

                </CardContent>        
              </Card>

              <Carousel itemsToShow={1}>
              {
              spreadsheetData.aliments.map((item, index) => 
                    <AlimentCard
                          id={index}  
                          key={index}
                          aliment={(item != null) ? item.aliment : ""} 
                          sous_groupe={(item != null) ? item.sous_groupe_alimentaire : ""}
                          groupe_alimentaire={(item != null) ? item.groupe_alimentaire : ""}
                          portion={(item != null) ? item.portion : ""} 
                          spreadsheetData={spreadsheetData}
                          setSpreadsheetData={setSpreadsheetData} 
                          nutrientCompo={spreadsheetCompo}
                          setAlimentPortion={setAlimentPortion}
                          aliment_portion={aliment_portion}
                          aliment_options={aliment_options}  
                    />
                )
              }
             </Carousel>
            <Box component="span" m={1}>
              
            </Box>
          </Paper>
        }
    
    </Container>
  );
  }

  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, rgba(255,255,255,0.9) 30%, #rgba(225,225,255,0.4) 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(10, 10, 0, .1)',
      color: 'white',
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
