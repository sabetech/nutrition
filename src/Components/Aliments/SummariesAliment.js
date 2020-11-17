import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Chip} from '@material-ui/core/';

import RestaurantIcon from '@material-ui/icons/Restaurant';
import DoneIcon from '@material-ui/icons/Done';

export default function SummariesAliment({aliment_portion, nutrientCompo}){
    const classes = useStyles();
    
    return (<div>
       {
           nutrientCompo.nutrient_headers.map((item, index) => {
               if (!item) return;
                const nutrientSum = Object.keys(aliment_portion).reduce((previousValue, currentValue) =>{
                    const nutrientValue = nutrientCompo.aliments_data_nutrient_ref
                        [
                            nutrientCompo.aliments_data_nutrient_ref.findIndex
                            (
                            (element) => currentValue === Object.keys(element)[0]
                            )
                        ][currentValue].les_nutrients[index].value
                    let prdt = aliment_portion[currentValue] * Number.parseFloat(nutrientValue);
                    
                    return previousValue + prdt;
                }, 0);
                return (
                    <Chip 
                        key={index}
                        variant="outlined" 
                        //className={classes.chipColor}
                        color={'primary'}
                        icon={<RestaurantIcon />} 
                        
                        label={<Typography className={classes.nutrientText}>
                            {item} <b>{nutrientSum.toFixed(2)}</b></Typography>}
                        onDelete={(e) => {}}
                        deleteIcon={<DoneIcon />}
                    />)
           })
        }
        </div>
        );
} 

const useStyles = makeStyles({
    root: {
      width: "100%",
      flex: 1
    },
    
    title: {
      fontSize: 24,
      justifyContent: 'center'
    },
    nutrientText: {
        fontSize: 12,
    },
    chipColor: {
        borderColor: 'green'
    }
    
  });