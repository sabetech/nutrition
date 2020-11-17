import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Chip} from '@material-ui/core/';

import RestaurantIcon from '@material-ui/icons/Restaurant';
import DoneIcon from '@material-ui/icons/Done';

export default function SummariesAliment({spreadsheetData, spreadsheetCompo}){
    const classes = useStyles();
    const [nutrientSums, setNutrientSums] = useState([]);
    let nutrientSumsTemp = [];

    useEffect(() => {

        spreadsheetCompo.nutrient_headers.forEach((nutrient, index) => {
            if (!nutrient) return; //to take care of nulls in spreadsheet ....

            const nutrientSum = spreadsheetData.aliments.reduce((previousVal, alimentObj) => {
                
                const nutrientCompoValue = spreadsheetCompo.aliments_data_nutrient_ref[
                    spreadsheetCompo.aliments_data_nutrient_ref.findIndex
                        (
                            (element) => alimentObj.aliment === Object.keys(element)[0]
                        )
                    ][alimentObj.aliment].les_nutrients[index].value;

                    const nutrient_product = (Number.parseFloat(nutrientCompoValue) * Number.parseFloat(alimentObj.portion)).toFixed(2);

                return Number.parseFloat(previousVal) + Number.parseFloat(nutrient_product);
                    
            },0.0);

            nutrientSumsTemp.push({
                nutrient: nutrient,
                sum_value: nutrientSum
            });

        });

        //get aliments
        setNutrientSums(nutrientSumsTemp);

    },[] );

    return (
       
        nutrientSums.map((item, index) => 
            <Chip 
                key={index}
                variant="outlined" 
                //className={classes.chipColor}
                color={'primary'}
                icon={<RestaurantIcon />} 
                label={<Typography className={classes.nutrientText}>
                    {item.nutrient} <b>{item.sum_value}</b></Typography>}
                onDelete={(e) => {}}
                deleteIcon={<DoneIcon />}
            />
        )   
    )
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