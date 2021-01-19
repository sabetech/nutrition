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
      <InputLabel id="demo-simple-select-filled-label">Group Alimentaire</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={activePage}
        onChange={(e) => onClick(e.target.value)}
      >
        {
        
        pages.map(page => (
          <MenuItem value={page}>
            {(spreadsheetData[page] != null) ? spreadsheetData[page].groupe_alimentaire : ""}
          </MenuItem>) )
        
        }
        
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