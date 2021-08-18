import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles({
    intro:{
        backgroundColor: "#829CD0",
    }
});


export default function Intro(){
    const classes = useStyles();
    return(
        <Typography className={classes.intro}>

        </Typography>
    )
}