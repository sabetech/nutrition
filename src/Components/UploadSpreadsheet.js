import React from 'react';
import '../App.css';
import '../Nutrition.css';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GridOn from '@material-ui/icons/GridOn';
import axios from 'axios';

export default function UploadSpreadsheet({stateMutator, spreadSheetMutator, spreadSheetCompoMutator, setAlimentPortionMutator}) {
    const classes = useStyles();

    const selectFile = (event) => {
        upload(event.target.files[0]);

    };
    
    const upload = (file) => {
        let formData = new FormData();
        formData.append("file", file);

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/upload',
            headers: {
                    "Content-Type": "multipart/form-data"
                },
            data: formData
        })
        .then((response) => response.data)
        .then(responseJSON => {
            
            spreadSheetMutator(responseJSON.sheet1);
            spreadSheetCompoMutator(responseJSON.sheet2);
            
            
            let myAlimentObj = {};
            responseJSON.sheet1.aliments.forEach((item) => {
                myAlimentObj[item.aliment] = item.portion;
            });
            setAlimentPortionMutator(
              myAlimentObj
            );
            stateMutator(true);

        })
        .catch(e=>{
            console.log(e)
        });
    };

    return (
    <div className={classes.root}>
        <input
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className={classes.input} 
        id="contained-button-file"
        type="file"
        onChange={selectFile}
        />
        <label htmlFor="contained-button-file">
        <Button size="large" variant="contained" color="primary" component="span">
            Upload Nutrition Spreadsheet
        </Button>
        </label>
        <input accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload Excel File" component="span">
            <GridOn />
        </IconButton>
        </label>
    </div>
    );

}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  })
)