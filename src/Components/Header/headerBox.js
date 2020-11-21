import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AppName from './appName';

export default function HeaderBox({file_name}) {
    const classes = useStyles();
    return (
        <Box component="span" className={classes.boxParentSize} >
            <Paper className={classes.root}>
                <h1>Nutrition Application</h1>
            </Paper>
            <AppName file_name={file_name}/>
        </Box>
        );
  }

  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 100,
      
    },
    boxParentSize:{
        height: 100,
        width: "80%",
        padding: '0 30px',
    }
  });