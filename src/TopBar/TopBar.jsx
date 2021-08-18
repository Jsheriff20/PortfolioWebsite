import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles({
    topBar:{
      height: "90px",
      width: "100%",
      backgroundColor: "#000B4F",
      position: "fixed",
      top: 0,
      zIndex: 2,

    }
  });

export default function TopBar(){
    const classes = useStyles();
    return(
        <Typography className={classes.topBar}>
            
        </Typography>
    )
}