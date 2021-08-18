import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles({
    testimonials:{
        backgroundColor: "#829CD0"
    }
});


export default function Testimonials(){
    const classes = useStyles();
    return(
        <Typography className={classes.testimonials}>
            
        </Typography>
    )
}