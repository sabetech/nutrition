import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Chip} from '@material-ui/core/';

import RestaurantIcon from '@material-ui/icons/Restaurant';
import DoneIcon from '@material-ui/icons/Done';

export default function SummariesAliment({spreadsheetData, spreadsheetCompo}){
    const classes = useStyles();
    //let aliments = [];
    let nutrientSums = [];

    useEffect(() => {

        spreadsheetCompo.nutrient_headers.forEach((nutrient, index) => {
            if (!nutrient) return;
            const nutrientSum = spreadsheetData.aliments.reduce((previousVal, alimentObj) => {
                
                const nutrientCompoValue = spreadsheetCompo.aliments_data_nutrient_ref[
                    spreadsheetCompo.aliments_data_nutrient_ref.findIndex
                        (
                            (element) => alimentObj.aliment === Object.keys(element)[0]
                        )
                    ][alimentObj.aliment].les_nutrients[index].value;

                    const nutrient_product = (Number.parseFloat(nutrientCompoValue) * Number.parseFloat(alimentObj.portion)).toFixed(2);

                    console.log(nutrient_product);

                return Number.parseFloat(previousVal) + Number.parseFloat(nutrient_product);
                    
            },0.0);

            nutrientSums.push(nutrientSum);

        });

        //get aliments
        console.log(nutrientSums);

    });

    return (
       

            <Chip 
                variant="outlined" 
                //className={classes.chipColor}
                color={'primary'}
                icon={<RestaurantIcon />} 
                label={<Typography className={classes.nutrientText}>
                    Energie, RèglementUE N° 1169/2011 (kcal/100g): <b>1.23</b></Typography>}
                onDelete={(e) => {}}
                deleteIcon={<DoneIcon />}
                />
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
        color: 'green'
    },
    chipColor: {
        borderColor: 'green'
    }
    
  });