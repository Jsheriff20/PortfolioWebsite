import { Container, Paper } from '@mui/material'
import React from 'react'
import { useTheme, makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
    portfolio:{
        height: '100vh',
        width: "100vw",
        maxWidth: "1200px",
        margin: "auto",
        marginBottom: "100px",
        backgroundColor: "white"
    },
}));


export default function Portfolio(props){
    const theme = useTheme();
    const classes = useStyles(theme);

    return(
        <Paper className={classes.portfolio}>
            <Container maxWidth="md">

            </Container>
        </Paper>
    )
}