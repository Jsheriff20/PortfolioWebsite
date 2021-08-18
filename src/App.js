import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

import TopBar from './TopBar/TopBar';
import Intro from './Pages/Intro/Intro'
import Portfolio from './Pages/Portfolio/Portfolio';
import Testimonials from './Pages/Testimonials/Testimonials';
import Contact from './Pages/Contact/Contact';


const useStyles = makeStyles({
  container:{
    height: "100vh",
    width: "100vw",
  },
  sections:{
    //view height - 90px for the Topbar height
    height: 'calc(100vh - 90px)',
    position: "relative",
    top: "90px",
    "& *":{
      height: 'calc(100vh - 90px)',
      width: "100vw"
    }
  }
});

function App() {
  const classes = useStyles();
  return (
    <Typography className={classes.container}>
      <TopBar/>
      <Typography className={classes.sections}>
        <Intro/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
      </Typography>
    </Typography>
  );
}

export default App;
