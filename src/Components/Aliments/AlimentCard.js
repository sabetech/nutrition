import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import {
    Card, 
    CardMedia, 
    CardContent, 
    Typography,
    TextField,
  } from '@material-ui/core/';
  import Autocomplete from '@material-ui/lab/Autocomplete';
  import Skeleton from '@material-ui/lab/Skeleton';
  import ReactImageAppear from 'react-image-appear';
  import group_alim_images from "../../resources/alimentaire_images.json"
  

export default function AlimentCard(
  {
    groupe_alimentaire,
    aliment_options,
    setSelectedAliments,
    selectedAliments,
    aliment_images
  }) {

    const classes = useStyles();
    const [imageLoaded, setImageLoaded] = useState(true);
    const [imgsrc, setImgSrc] = useState("https://i.stack.imgur.com/y9DpT.jpg");
    const [txtPortion, setTxtPortion] = useState(0);
    const [aliment, setAliment] = useState("");
    

    const handleAlimentChange = (value) => {
        
        modifySelectedAliment(value);
        
        setImageLoaded(false);
    }

    useEffect(() => {
      if (aliment !== ""){
        modifySelectedAliment(aliment)
        //setSelectedAliments({...selectedAliments, [groupe_alimentaire] : {aliment:aliment, portion: txtPortion, group_alim: groupe_alimentaire}});
        if (imgsrc === aliment_images[aliment]) return;
        
        setAlimentImage(aliment);
        
      } 
    }, [aliment, txtPortion]);

    const modifySelectedAliment = async (myAliment) => {
      let groupe_alimentaire_value = groupe_alimentaire.substring(0, (groupe_alimentaire.indexOf("_") === -1) ? groupe_alimentaire.length : groupe_alimentaire.indexOf("_"))
      setAliment(myAliment);
      setSelectedAliments({...selectedAliments, [groupe_alimentaire]: {aliment: myAliment, portion: txtPortion, group_alim: groupe_alimentaire_value}});

    }

    useEffect(() => {
      
      //check if this groupe_alimentaire is new or already existing to show
      if (Object.keys(selectedAliments).some(item => item === groupe_alimentaire)) {
        
        setImageLoaded(false);
        setAliment(selectedAliments[groupe_alimentaire].aliment);
        setTxtPortion(selectedAliments[groupe_alimentaire].portion);
        return;
      }

      groupeAlimentaireChangeEffect(groupe_alimentaire);

    }, [groupe_alimentaire]);

    const groupeAlimentaireChangeEffect = async (groupeAlimentaire) => {
      let groupe_alimentaire_value = groupeAlimentaire.substring(0, (groupeAlimentaire.indexOf("_") === -1) ? groupeAlimentaire.length : groupeAlimentaire.indexOf("_"))
      
      if (typeof group_alim_images[groupe_alimentaire_value] != "undefined"){
        setGroupeAlimentaireImageAsync(group_alim_images[groupe_alimentaire_value])
        setAliment("");
        setTxtPortion(0);
        return;
      }
    }

    const setGroupeAlimentaireImageAsync = async (imgUrl) => {
      await setImageLoaded(false);
      await setImgSrc(imgUrl);
      await setImageLoaded(true);
    }

    const setAlimentImage = (myAliment) => {
      
      if (myAliment != ""){
        setImgSrc(aliment_images[myAliment]);
        setImageLoaded(true);
      }
    }

    return (
      <div>
        <Card >
            
            {imageLoaded ? (
            <CardMedia
              title={aliment}
            >
              <ReactImageAppear 
                  src={imgsrc}
                  animation="zoomIn"
                  animationDuration="0.5s"
                  className={classes.media}
              />
              
            </CardMedia>) 
            : 
            <Skeleton variant="rect" width={"100%"}  />
             
            }
            
            <CardContent>
                <div style={{flexShrink: 1}}>
                <Typography gutterBottom variant="h5" component="h2" color={"primary"} >
                  {groupe_alimentaire &&
                  groupe_alimentaire.charAt(0).toUpperCase() 
                  + groupe_alimentaire.replaceAll("_"," ").slice(1) 
                  + new String(Array(45 - groupe_alimentaire.length).fill("\xa0").join(" ")).toString()  
                  }
                </Typography>
                </div>

                <Typography variant="subtitle1" color="primary" component="p">
                {
                ((aliment !== "") && (aliment != null)) ? aliment:"Aucun Aliment sélectionné"
                //+ new String(Array(Math.max(0, (60 - aliment.length))).fill("\xa0").join(" ")).toString() 
                }
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
                      if (Number.parseFloat(e.target.value) < 0){
                        setTxtPortion(0);
                      }  
                    }else{
                      setTxtPortion(e.target.value);
                    }
                  }}
                />
              
              
                <Autocomplete
                  disabled={groupe_alimentaire === "Aucun Aliment Sélectionné"}
                  freeSolo
                  onChange={ (event, value) => handleAlimentChange(value) }
                  options={aliment_options[groupe_alimentaire.substring(0, (groupe_alimentaire.indexOf("_") === -1) ? groupe_alimentaire.length : groupe_alimentaire.indexOf("_")) ] || []}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => <TextField {...params} label="Choisir un Aliment" margin="normal" />}
                  value={aliment}
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
      display: 'block',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      //paddingTop: '56.25%', // 16:9
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