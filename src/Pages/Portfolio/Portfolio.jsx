import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles({
    portfolio:{
        backgroundColor: "#EBEBEB"
    }
});


export default function Portfolio(){
    const classes = useStyles();
    return(
        <Typography className={classes.portfolio}>
            
        </Typography>
    )
}