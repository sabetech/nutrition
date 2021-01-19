import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import {
    Card, 
    CardActions,
    CardMedia, 
    CardContent, 
    Avatar, 
    Typography,
    CircularProgress,
    TextField,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
  } from '@material-ui/core/';
  import Autocomplete from '@material-ui/lab/Autocomplete';
  import Skeleton from '@material-ui/lab/Skeleton';
  
  import axios from 'axios';

  

export default function AlimentCard(
  {
    id,
    aliment, 
    sous_groupe, 
    groupe_alimentaire, 
    portion, 
    spreadsheetData,
    setSpreadsheetData,
    nutrientCompo, 
    setAlimentPortion,
    aliment_portion,
    aliment_options,
    aliment_images
  }) {

    const classes = useStyles();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imgsrc, setImgSrc] = useState("");
    const [txtPortion, setTxtPortion] = useState(portion);
    const [aliment_compo_group_alimentaire, set_aliment_compo_groupe_alimentaire] = useState("");
    

    const handleAlimentChange = (value) => {
        
        let groupe_alim = nutrientCompo.aliments_data_nutrient_ref
                          [nutrientCompo.aliments_data_nutrient_ref.findIndex
                            (
                              (element) => value === Object.keys(element)[0]
                            )][value].alim_grp_nom_fr;
        
        let sous_groupe_alim = nutrientCompo.aliments_data_nutrient_ref 
        [nutrientCompo.aliments_data_nutrient_ref.findIndex
          (
            (element) => value === Object.keys(element)[0]
          )][value].alim_ssgrp_nom_fr;

        spreadsheetData.aliments.splice(id, 1, {
            aliment: value,
            sous_groupe_alimentaire: sous_groupe_alim,
            groupe_alimentaire: groupe_alim,
            portion: txtPortion
        });

        setImageLoaded(false);
        setSpreadsheetData({...spreadsheetData, aliments: spreadsheetData.aliments});

    }

    useEffect(() => {
        
      let groupe_alim = nutrientCompo.aliments_data_nutrient_ref
                          [nutrientCompo.aliments_data_nutrient_ref.findIndex
                            (
                              (element) => aliment === Object.keys(element)[0]
                            )][aliment].alim_grp_nom_fr;

      set_aliment_compo_groupe_alimentaire(groupe_alim); 
      
      if (aliment != null){
        setImgSrc(aliment_images[aliment]);
        setImageLoaded(true);
      }
      

        // axios({
        //     method: 'get',
        //     url: `https://api.allorigins.win/get?url=${encodeURIComponent('https://yandex.com/images/search?text='+aliment+'&isize=medium')}`,
        // })
        // .then((response) => {
            
        //     let imgSearch = response.data.contents;

        //     let skip = imgSearch.indexOf("\"freshness\":\"normal\",\"preview\"");

        //     let startPos = imgSearch.indexOf("https", skip);
        //     let endPos = imgSearch.indexOf("fileSizeInBytes", startPos);
            
        //     let finalString = imgSearch.substring(startPos, (endPos-3));

        //     //check if image really exist else show something else
        //     setImgSrc(finalString);
        //     console.log(aliment+" xx "+finalString);
        //     setImageLoaded(true);
        // })
        // .catch((e) => { console.warn(e)});

      
    }, [aliment, aliment_options]);

    //https://www.google.com/search?tbm=isch&source=hp&biw=1015&bih=763&q=Soupe aux légumes variés, préemballée à réchauffer

    //https://yandex.com/images/search?text=Avocat%2C%20pulpe%2C%20cru&isize=medium

    return (
      <div>
        <Card >
            
            {imageLoaded ? (
            <CardMedia
              className={classes.media}
              image={imgsrc}
              title={aliment}
            />) 
            : 
            <Skeleton variant="rect" width={"100%"}  />
             
            }
            
            <CardContent>
                <div style={{flexShrink: 1}}>
                <Typography gutterBottom variant="h5" component="h2" color={"primary"} >
                  {groupe_alimentaire.charAt(0).toUpperCase() + groupe_alimentaire.replace(/_/g,' ').slice(1)}
                </Typography>
                </div>

                <Typography variant="subtitle1" color="primary" component="p">
                {aliment}
                </Typography>
            </CardContent>
            <CardContent>
                <TextField
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="number"
                  min={0}
                  id={aliment}
                  label="PORTION"
                  variant="filled"
                  value={txtPortion}
                  onChange={(e) => {
                    if (e.target.value !== ""){
                      setTxtPortion(Number.parseFloat(e.target.value));
                      setAlimentPortion({...aliment_portion, [aliment]:Number.parseFloat(e.target.value)})
                      if (Number.parseFloat(e.target.value) < 0){
                        setTxtPortion(0);
                      }  
                    }else{
                      setTxtPortion(e.target.value);
                    }
                  }}
                />
              
              
                <Autocomplete
                  onChange={ (event, value) => handleAlimentChange(value) }
                  options={aliment_options[aliment_compo_group_alimentaire] || []}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => <TextField {...params} label="Change Aliment" margin="normal" />}
                />
                </CardContent>
              
        </Card>
        </div>
    );

}

const useStyles = makeStyles((theme) =>({
    card: {
      //width: window.innerWidth - 30,
      //margin: 1,
      marginTop: 10,
      // marginBottom: 50,
      //background: "linear-gradient(45deg, #56CCF2, #2F80ED)"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: blue[500],
    },
    table: {
      width : 250
    }
  }));