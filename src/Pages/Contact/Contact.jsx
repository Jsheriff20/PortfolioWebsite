import { Container, Paper } from '@mui/material'
import {makeStyles} from '@mui/styles';
import React from 'react'
import polyImageLight from "../../Media/polyImageLight.jpg"

const useStyles = makeStyles({
    contact:{
        height: '100vh',
        width: "100vw",
        maxWidth: "1200px",
        margin: "auto",
        backgroundColor: "white"
    },

});


export default function Contact(){
    const classes = useStyles();
    return(
        <Paper className={classes.contact}>
            <Container maxWidth="md">

            </Container>
        </Paper>
    )
}