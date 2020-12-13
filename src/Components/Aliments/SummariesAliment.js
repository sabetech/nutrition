import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Icon, Typography, Slider, withStyles } from '@material-ui/core';
import RestaurantIcon from '@material-ui/icons/Restaurant';




export default function SummariesAliment({aliment_portion, nutrientCompo}){
    const PrettoSlider = withStyles(theme => ({
        root: {
          height: 8,
        },
        disabled: {
            color: theme.palette.primary.main
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
        },
      }))(Slider);
    const classes = useStyles();
    const EAU = "Eau (g/100g)";
    const ALCOOL = "Alcool (g/100g)";
    const GLUCIDES = "Glucides (g/100g)";

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
            backgroundColor: "#ffffff",
            textColor: 'black'
        }];

    const progressClassNames = [{
        color: '#72DC00',
    },{
        color: "#D29D23"
    },{
        color: "#A93226"
    }]

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
        },
        {
            mid: 0,
            high: 1200
        }

    ]
    
    return (<div className={classes.root}>
       {
           nutrientCompo.nutrient_headers.map((item, index) => {
               let myStyleIndex = 0, progressBarColorIndex = 0;
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

                let nutrientPercent = ((nutrientSum/nutrientConstraints[index].high) * 100).toFixed(0);
                
                progressBarColorIndex = (nutrientPercent >= 75) ? 2 :
                                            (nutrientPercent >= 50) ? 1 : 0;

                
                return (
                    <div key={index} style={{marginBottom: 20, width:"95%", paddingTop: 10}}>
                    {(EAU != item) && (ALCOOL != item) && (GLUCIDES != item)  ?
                (
                <div>
                    <PrettoSlider 
                        //valueLabelDisplay="auto" 
                        aria-label="pretto slider" 
                        value={nutrientPercent} 
                        valueLabelDisplay="on"
                        step={1}
                        style={{color:progressClassNames[progressBarColorIndex].color}}
                        />
                    <Typography gutterBottom>{item}</Typography>
                </div>
                ) :
                (
                    <Chip 
                        key={index}
                        style={{margin: "0.5%", backgroundColor: styleList[myStyleIndex].backgroundColor, color: styleList[myStyleIndex].textColor}}
                        icon={<RestaurantIcon style={{color:styleList[myStyleIndex].textColor}} />} 
                        variant="outlined"
                        label={<Typography className={classes.nutrientText}>
                            {item} <b>{nutrientSum.toFixed(2)}</b></Typography>}
                        onDelete={(e) => {}}
                        deleteIcon={<Icon >{styleList[myStyleIndex].icon}</Icon>}
                    />
                    )}
            </div>)
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
        margin: 5,
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