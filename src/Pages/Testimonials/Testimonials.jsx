import { Container, Paper } from '@mui/material'
import {makeStyles} from '@mui/styles';
import React from 'react'

const useStyles = makeStyles({
    testimonials:{
        height: '100vh',
        width: "100vw",
        maxWidth: "1200px",
        margin: "auto",
        marginBottom: "100px",
        backgroundColor: "white"
    },
    
});


export default function Testimonials(){
    const classes = useStyles();
    return(
        <Paper elevation={10} className={classes.testimonials}>
            <Container maxWidth="md">

            </Container>
        </Paper>
    )
}