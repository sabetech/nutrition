import React, {useState} from 'react';
import '../../App.css';
import '../../Nutrition.css';
import Container from '@material-ui/core/Container';
import HeaderBox from '../../Components/Header/headerBox';
import { makeStyles } from '@material-ui/core/styles';
// import UploadSpreadsheet from '../../Components/UploadSpreadsheet';
import JsUploadSpreadsheet from '../../Components/JS_Uploadspreadsheet';
import {
  Paper, 
  Grid,
  Card,CardContent,Typography, LinearProgress
} from '@material-ui/core/';
import AlimentCard from '../../Components/Aliments/AlimentCard';
import SummariesAliment from '../../Components/Aliments/SummariesAliment';


export default function Home() {
const [uploaded, setUploadState] = useState(false);
const [file_name, setFileName] = useState("No File Uploaded")
const [aliment_portion, setAlimentPortion] = useState({});
const [spreadsheetData, setSpreadsheetData] = useState({});
const [spreadsheetCompo, setSpreadsheetCompo] = useState({});
const [loading, setLoading] = useState(false);
const [sheet2Compo, setSheet2Compo] = useState([]);

const classes = useStyles();

  return (
    <Container >
        <HeaderBox file_name={file_name}/>
        
        {
        !uploaded &&
        // <UploadSpreadsheet 
        //     stateMutator={setUploadState} 
        //     spreadSheetMutator={setSpreadsheetData} 
        //     spreadSheetCompoMutator={setSpreadsheetCompo} 
        //     setAlimentPortionMutator={setAlimentPortion}
        //     setLoadingMutator={setLoading}
        //     setFileName={setFileName}
        //   />
        
        <JsUploadSpreadsheet 
            stateMutator={setUploadState} 
            spreadSheetMutator={setSpreadsheetData} 
            spreadSheetCompoMutator={setSpreadsheetCompo} 
            setAlimentPortionMutator={setAlimentPortion}
            setLoadingMutator={setLoading}
            setFileName={setFileName}
            setSheet2Compo={setSheet2Compo}
        />


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

            <Grid
              container
              justify="space-evenly"
              alignItems="flex-start"
              spacing={2}
            >
            {
              spreadsheetData.aliments.map((item, index) => 
                <Grid item xs={4} key={index}>
                    <AlimentCard  
                          aliment={(item != null) ? item.aliment : ""} 
                          sous_groupe={(item != null) ? item.sous_groupe_alimentaire : ""}
                          groupe_alimentaire={(item != null) ? item.groupe_alimentaire : ""}
                          portion={(item != null) ? item.portion : ""} 
                          nutrientCompo={spreadsheetCompo}
                          setAlimentPortion={setAlimentPortion}
                          aliment_portion={aliment_portion}
                          sheet2Compo={sheet2Compo}
                    />
                  
                </Grid>
            )

            }
            </Grid>
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
