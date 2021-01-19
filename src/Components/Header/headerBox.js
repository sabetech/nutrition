import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AppName from './appName';

export default function HeaderBox({file_name}) {
    const classes = useStyles();
    return (
        <Box component="span" className={classes.boxParentSize} >
            <AppName file_name={"Meal Calculateur"} />
        </Box>
        );
  }

  const useStyles = makeStyles({
    root: {
      //background: 'linear-gradient(45deg, #DA22FF 30%, #9733EE 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 100,
      
    },
    boxParentSize:{
        height: 100,
        width: "80%",
        background: 'linear-gradient(45deg, #DA22FF 30%, #9733EE 90%)'
        //padding: '0 30px',
    }
  });