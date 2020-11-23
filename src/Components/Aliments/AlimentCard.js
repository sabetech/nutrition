import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import {
    Card, 
    CardHeader, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Avatar, 
    Typography,
    CircularProgress,
    TextField,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
  } from '@material-ui/core/';
  import Autocomplete from '@material-ui/lab/Autocomplete';
  
  import axios from 'axios';


export default function AlimentCard(
  {
    aliment, 
    sous_groupe, 
    groupe_alimentaire, 
    portion, 
    nutrientCompo, 
    setAlimentPortion,
    aliment_portion,
    sheet2Compo
  }) {

    const classes = useStyles();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imgsrc, setImgSrc] = useState("");
    const [txtPortion, setTxtPortion] = useState(portion);
    const [groupe_alimentaire_aliment, set_groupe_alimentaire_aliment] = useState({});


    useEffect(() => {
        //try and get image of food from here ...
        console.log(sheet2Compo);
        let bigObj = {};
        sheet2Compo.map((item, index) => {
            if (index == 0) return;
            




        });



        axios({
            method: 'get',
            url: `https://api.allorigins.win/get?url=${encodeURIComponent('https://www.google.fr/search?q='+aliment+'food+image&tbm=isch&bih=763&biw=1536&source=hp')}`,
        })
        .then((response) => {
            
            let imgSearch = response.data.contents;
            let skipPos = imgSearch.indexOf("src");

            let realImgPos = imgSearch.indexOf("src", (skipPos+1));
            
            setImgSrc(imgSearch.substring((realImgPos + 5), imgSearch.indexOf("&amp", realImgPos)));
            
            setImageLoaded(true);
        })
        .catch((e) => { console.warn(e)});

        
      
    }, [aliment]);

    //https://www.google.com/search?tbm=isch&source=hp&biw=1015&bih=763&q=Soupe aux légumes variés, préemballée à réchauffer

    return (
        <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {aliment != null ? aliment[0]: ""}
                </Avatar>
              }
              title={aliment}
              subheader={`Sous-Groupe Alimentaire ${sous_groupe}`}
            />
            {imageLoaded ? (
            <CardMedia
              className={classes.media}
              image={imgsrc}
              title={aliment}
            />) 
            : 
            
            <CircularProgress />
             
            }
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Groupe Alimentaire: {groupe_alimentaire}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                
            </CardActions>
            
            <CardContent>
                <Typography paragraph>Les nutriments</Typography>
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
                    
                    setTxtPortion(Number.parseFloat(e.target.value));
                    setAlimentPortion({...aliment_portion, [aliment]:Number.parseFloat(e.target.value)})

                    if (Number.parseFloat(e.target.value) < 0){
                      setTxtPortion(0);
                    }
                  }}
                />

                <Autocomplete
                  // {...defaultProps}
                  // id="alim_grp_nom_fr"
                  //onChange={}
                  options={[]}
                  debug
                  renderInput={(params) => <TextField {...params} label="Groupe Alimentaire" margin="normal" />}
                />

                <Autocomplete
                  // {...defaultProps}
                  // id="alim_nom_fr"
                  //onChange={}
                  options={[]}
                  debug
                  renderInput={(params) => <TextField {...params} label="Aliment" margin="normal" />}
                />

                <TableContainer component={Paper} style={{display:'none'}}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>Le Nutriment</strong></TableCell>
                        <TableCell align="right"><strong>Value</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                      
                        nutrientCompo.aliments_data_nutrient_ref
                          [nutrientCompo.aliments_data_nutrient_ref.findIndex
                            (
                              (element) => aliment === Object.keys(element)[0]
                            )][aliment].les_nutrients.map((item) => 
                              (
                          <TableRow key={item.id}>
                              <TableCell component="th" scope="row">
                                {item.nutrient}
                              </TableCell>

                              <TableCell align="right">
                                {(Number.parseFloat(item.value)  * Number.parseFloat(txtPortion)).toFixed(2)}
                              </TableCell>
                          </TableRow>
                          )
                        )
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
                
            </CardContent>
        </Card>
    );

}

const useStyles = makeStyles((theme) =>({
    card: {
      width: 300,
      margin: 20,
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
      backgroundColor: red[500],
    },
    table: {
      width : 250
    }
  }));