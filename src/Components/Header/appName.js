import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function AppName({file_name}) {
    const classes = useStyles();
    return (
        <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {file_name}
          </Typography>
        </Toolbar>
      </AppBar>
        );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'left'
    },
    myAppbarColor: {
      background: 'linear-gradient(45deg, #DA22FF 30%, #9733EE 90%)'
    }
  }));