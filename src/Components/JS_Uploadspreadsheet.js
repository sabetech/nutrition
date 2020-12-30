import React from 'react';
import '../App.css';
import '../Nutrition.css';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import * as XLSX from 'xlsx';

export default function JsUploadSpreadsheet(
                                      {stateMutator, 
                                      spreadSheetMutator, 
                                      spreadSheetCompoMutator, 
                                      setAlimentPortionMutator, 
                                      setLoadingMutator, 
                                      setFileName,
                                      setAlimentOptions}){

    const classes = useStyles();

    const selectFile = async (event) => {
        
        setLoadingMutator(true);

        var files = event.target.files, f = files[0];
        var reader = new FileReader();
        
        reader.onload = async function (event) {
            var data = event.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            await readSheet1(readedData);
            await readSheet2(readedData);

            await stateMutator(true) //change the state of the upload
            await setLoadingMutator(false);
        };

        setFileName(f.name);
        await reader.readAsBinaryString(f);

    };

    const readSheet1 = (readedData) => {
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];
            
        /* Convert array to json*/
        const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
        let sheet1Info = {}, count = 0;
        sheet1Info.aliments = [];

        dataParse.forEach(value => {
          count++;
          if (count === 1) return;
          if (value[0] == null) return;
          if (value.length === 0) return;

          sheet1Info.aliments.push({
              aliment: value[2],
              sous_groupe_alimentaire: value[1],
              groupe_alimentaire: value[0],
              portion: value[3]
            });
        });

        spreadSheetMutator(sheet1Info);
        let myAlimentObj = {};
        sheet1Info.aliments.forEach((item) => {
            myAlimentObj[item.aliment] = item.portion;
        });
        setAlimentPortionMutator(
          myAlimentObj
        );

    }

    const readSheet2 = (readedData) => {
      const wsname = readedData.SheetNames[1];
      const ws = readedData.Sheets[wsname];
          
      /* Convert array to json*/
      const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});

      const sheet2Info = structureCompoSheet(dataParse);
      spreadSheetCompoMutator(sheet2Info);

      let groupe_aliments = {};

      dataParse.map((item, index) => {
          if (index == 0) return;
            if (groupe_aliments.hasOwnProperty(item[0])){
              groupe_aliments[item[0]].push(item[2])
            }else{
              groupe_aliments[item[0]] = [];
              groupe_aliments[item[0]].push(item[2])
            }
        });

        setAlimentOptions(groupe_aliments);
        
    }

    const structureCompoSheet = (jsonSpreadsheetCompo) => {

      let sheet2Info = {};
      sheet2Info.aliments_data_nutrient_ref = [];
      sheet2Info.nutrient_headers = [];

      jsonSpreadsheetCompo.forEach((value, index) => {
          if (index === 0) {
            sheet2Info.nutrient_headers = getNutrientHeaders(value);
            return;
          }

          sheet2Info.aliments_data_nutrient_ref.push({
            [value[2]] : {
              alim_nom_fr: value[2],
              alim_grp_nom_fr: value[0],
              alim_ssgrp_nom_fr: value[1],
              les_nutrients: [
                {
                  id: ++index,
                  nutrient: sheet2Info.nutrient_headers[0],
                  value: value[3].toString().replace(',', '.')
                },
                {
                  id: ++index,
                  nutrient: sheet2Info.nutrient_headers[1],
                  value: value[4].toString().replace(',', '.')
                },
                {
                  id: ++index,
                  nutrient: sheet2Info.nutrient_headers[2],
                  value: value[5].toString().replace(',', '.')
                },
                {
                  id: ++index,
                  nutrient: sheet2Info.nutrient_headers[3],
                  value: value[6].toString().replace(',', '.')
                },
                {
                  id: ++index,
                  nutrient: sheet2Info.nutrient_headers[4],
                  value: value[7].toString().replace(',', '.')
                },
                {
                  id: ++index,
                  nutrient: sheet2Info.nutrient_headers[5],
                  value: value[8].toString().replace(',', '.')
                },
                {
                  id: ++index,
                  nutrient: sheet2Info.nutrient_headers[6],
                  value: value[9].toString().replace(',', '.')
                },
                {
                  id: ++index,
                  nutrient: sheet2Info.nutrient_headers[7],
                  value: value[10].toString().replace(',', '.')
                },
                {
                  id: ++index,
                  nutrient: sheet2Info.nutrient_headers[1] +" "+ sheet2Info.nutrient_headers[3],
                  value: parseFloat(value[4].toString().replace(',', '.')) 
                        + parseFloat(value[6].toString().replace(',', '.'))
                },
              ]
            }
          })
      });

      return sheet2Info;

    }

    const getNutrientHeaders = (row) => {
      row.push("Eau + Alcool (g/100g)");
      return row.slice(3);
    }


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
        {/* <input accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload Excel File" component="span">
            <GridOn />
        </IconButton>
        </label> */}
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