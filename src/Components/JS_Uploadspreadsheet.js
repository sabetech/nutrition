import React, { useEffect } from 'react';
import '../App.css';
import '../Nutrition.css';

import { makeStyles } from '@material-ui/core/styles';


import * as XLSX from 'xlsx';


export default function JsUploadSpreadsheet(
                                      {stateMutator, 
                                      spreadSheetCompoMutator, 
                                      setLoadingMutator, 
                                      setFileName,
                                      setAlimentOptions}){

    const classes = useStyles();

    useEffect(() => {
      setLoadingMutator(true);
      selectFile(window.location.href+'/' +encodeURIComponent("meal_calculator.xlsx"));

    },[]);

    const selectFile = async (file_path) => {
        
        const response = await fetch(file_path, {responseType: 'blob'});
        const data = await response.blob();

        let f = new File([data], "source_file.xlsx", {
          type: response.headers.get('content-type')
        });

        var reader = new FileReader();
        
        reader.onload = async function (event) {
            var data = event.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            
            await readSheet2(readedData);

            await setLoadingMutator(false);
            await stateMutator(true);
        };

        setFileName(f.name);
        await reader.readAsBinaryString(f);

    };

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
        Object.keys(groupe_aliments).map((item) => {
            groupe_aliments[item].sort();
        });
        console.log(groupe_aliments)
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
                  nutrient: "Energie, Règlement UE N° 1169/2011 (kcal/100g)",
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
      row[3] = "Energie (kcal/100g)";
      return row.slice(3);
    }

return (
    <></>
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