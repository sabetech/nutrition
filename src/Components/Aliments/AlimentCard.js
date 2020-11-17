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
  //import ElevatedHeaderCardDemo from './AlimentCard.js'
  import axios from 'axios';


export default function AlimentCard(
  {
    aliment, 
    sous_groupe, 
    groupe_alimentaire, 
    portion, 
    nutrientCompo, 
    setAlimentPortion,
    aliment_portion
  }) {

    const classes = useStyles();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imgsrc, setImgSrc] = useState("");
    const [txtPortion, setTxtPortion] = useState(portion);

    useEffect(() => {
        //try and get image of food from here ...

        axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/getFoodImage?aliment=${aliment}`,
        })
        .then((response) => {
            setImgSrc(response.data);
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

                <TableContainer component={Paper}>
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