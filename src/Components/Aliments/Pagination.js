import React from 'react';
import {
    FormControl,InputLabel, MenuItem,
    makeStyles, Select
  } from '@material-ui/core/';

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function  Pagination({pages, activePage, onClick, spreadsheetData}){
    
  const classes = useStyles();

    return (
      <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">Groupe Alimentaire</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={activePage}
        onChange={(e) => onClick(e.target.value)}
      >
          <MenuItem value={0}>
            {(spreadsheetData[0] != null) ? spreadsheetData[0].groupe_alimentaire : ""}
          </MenuItem>
          <MenuItem value={10}>
            {(spreadsheetData[10] != null) ? spreadsheetData[10].groupe_alimentaire : ""}
          </MenuItem>
          <MenuItem value={2}>
            {(spreadsheetData[2] != null) ? spreadsheetData[2].groupe_alimentaire : ""}
          </MenuItem>
          <MenuItem value={3}>
            {(spreadsheetData[3] != null) ? spreadsheetData[3].groupe_alimentaire : ""}
          </MenuItem>
          <MenuItem value={4}>
            {(spreadsheetData[4] != null) ? spreadsheetData[4].groupe_alimentaire : ""}
          </MenuItem>
          <MenuItem value={5}>
            {(spreadsheetData[5] != null) ? spreadsheetData[5].groupe_alimentaire : ""}
          </MenuItem>
          <MenuItem value={6}>
            {(spreadsheetData[6] != null) ? spreadsheetData[6].groupe_alimentaire : ""}
          </MenuItem>
          <MenuItem value={7}>
            {(spreadsheetData[7] != null) ? spreadsheetData[7].groupe_alimentaire : ""}
          </MenuItem>
          <MenuItem value={8}>
            {(spreadsheetData[8] != null) ? spreadsheetData[8].groupe_alimentaire : ""}
          </MenuItem>
          <MenuItem value={9}>
            {(spreadsheetData[9] != null) ? spreadsheetData[9].groupe_alimentaire : ""}
          </MenuItem>
          <MenuItem value={1}>
            {(spreadsheetData[1] != null) ? spreadsheetData[1].groupe_alimentaire : ""}
          </MenuItem>
          
      </Select>
    </FormControl>


        // <List component="nav" aria-label="main mailbox folders" aria-labelledby="nested-list-subheader" subheader={
        //     <ListSubheader component="div" id="nested-list-subheader">
        //       Groupe Alimentaire
        //     </ListSubheader>
        //   }>
        // {
        //    pages.map(page => 
        //    (
        //        <ListItem
        //             button
        //             selected={activePage === page}
        //             onClick={() => onClick(page)}
        //         >
        //             <ListItemText style={{color:'black'}} primary={(spreadsheetData[page] != null) ? spreadsheetData[page].groupe_alimentaire : ""} />
                    
        //         </ListItem>
            
        //    ))  
        // }
        // </List>
    )

}

{/* <Typography key={key} color={"primary"} component={"p"}>{ (spreadsheetData[key] != null) ? spreadsheetData[key].groupe_alimentaire : "" }</Typography> */}