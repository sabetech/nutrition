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

export default function  Pagination({pages, activePage, onClick, groupe_alimentaires}){
    
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
            {(groupe_alimentaires[0] != null) ? groupe_alimentaires[0] : ""}
          </MenuItem>
          <MenuItem value={10}>
            {(groupe_alimentaires[10] != null) ? groupe_alimentaires[10] : ""}
          </MenuItem>
          <MenuItem value={2}>
            {(groupe_alimentaires[2] != null) ? groupe_alimentaires[2] : ""}
          </MenuItem>
          <MenuItem value={3}>
            {(groupe_alimentaires[3] != null) ? groupe_alimentaires[3] : ""}
          </MenuItem>
          <MenuItem value={4}>
            {(groupe_alimentaires[4] != null) ? groupe_alimentaires[4] : ""}
          </MenuItem>
          <MenuItem value={5}>
            {(groupe_alimentaires[5] != null) ? groupe_alimentaires[5] : ""}
          </MenuItem>
          <MenuItem value={6}>
            {(groupe_alimentaires[6] != null) ? groupe_alimentaires[6] : ""}
          </MenuItem>
          <MenuItem value={7}>
            {(groupe_alimentaires[7] != null) ? groupe_alimentaires[7] : ""}
          </MenuItem>
          <MenuItem value={8}>
            {(groupe_alimentaires[8] != null) ? groupe_alimentaires[8] : ""}
          </MenuItem>
          <MenuItem value={9}>
            {(groupe_alimentaires[9] != null) ? groupe_alimentaires[9] : ""}
          </MenuItem>
          <MenuItem value={1}>
            {(groupe_alimentaires[1] != null) ? groupe_alimentaires[1] : ""}
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