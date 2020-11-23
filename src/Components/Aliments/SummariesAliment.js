import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Chip, Icon} from '@material-ui/core/';

import RestaurantIcon from '@material-ui/icons/Restaurant';

export default function SummariesAliment({aliment_portion, nutrientCompo}){
    const classes = useStyles();
    const styleList = [
        {
            icon: "done",
            backgroundColor: "#70AB1A",
            textColor: 'white'
        }, {    
            icon: "error_outline",
            backgroundColor:"#D8AD26", 
            textColor: 'white'
        },
        {
            icon:"close",
            backgroundColor: "#D14600",
            textColor: 'white'
        },
        {
            icon: "",
            backgroundColor: "",
            textColor: 'black'
        }];

    const nutrientConstraints = [
        {
            mid: 2250,
            high: 3000
        },
        {
            mid: 0,
            high: 0
        },
        {
            mid: 69,
            high: 92
        },
        {
            mid: 0,
            high: 0
        },
        {
            mid: 600,
            high: 800
        },
        {
            mid: 1875,
            high: 2500
        },
        {
            mid: 1500,
            high: 2000
        },
        {
            mid: 0,
            high: 0
        }
    ]
    
    return (<div className={classes.root}>
       {
           nutrientCompo.nutrient_headers.map((item, index) => {
               let myStyleIndex = 0;
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

                myStyleIndex = (nutrientSum >= nutrientConstraints[index].high) ? 2 : 
                                        (nutrientSum > nutrientConstraints[index].mid) ? 1 : 0;

                if (nutrientConstraints[index].high === 0) myStyleIndex = 3;
                
                return (
                    <Chip 
                        key={index}
                        style={{margin: "0.5%", backgroundColor: styleList[myStyleIndex].backgroundColor, color: styleList[myStyleIndex].textColor}}
                        icon={<RestaurantIcon style={{color:styleList[myStyleIndex].textColor}} />} 
                        
                        label={<Typography className={classes.nutrientText}>
                            {item} <b>{nutrientSum.toFixed(2)}</b></Typography>}
                        onDelete={(e) => {}}
                        deleteIcon={<Icon >{styleList[myStyleIndex].icon}</Icon>}
                    />)
           })
        }
        </div>
        );
} 

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
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
    
  })
  );