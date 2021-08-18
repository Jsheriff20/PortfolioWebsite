import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import polyImageLight from "../../Media/polyImageLight.jpg"

const useStyles = makeStyles({
    contact:{
        backgroundImage: `url(${polyImageLight})`,
        backgroundPosition: 'left', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        display: 'flex',
    }
});


export default function Contact(){
    const classes = useStyles();
    return(
        <Typography className={classes.contact}>

        </Typography>
    )
}