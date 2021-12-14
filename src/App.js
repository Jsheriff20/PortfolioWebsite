import React, {useState, useEffect} from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, makeStyles } from '@mui/styles';
import { Container, Paper, Typography, CssBaseline} from '@mui/material';
import blueSlashes from "./Media/blueSlashes.jpg"
import blueSlashesClearer from "./Media/blueSlashesClearer.jpg"
import blueRain from "./Media/blueRain.jpg"
import blueRainLight from "./Media/blueRainLight.jpg"
import blueRainDarker from "./Media/blueRainDarker.jpg"
import blackIsh from "./Media/blackerIsh.jpg"
import { Parallax } from 'react-parallax';

import Timeline from './Pages/Timeline/Timeline';
import Intro from './Pages/Intro/Intro'
import Portfolio from './Pages/Portfolio/Portfolio';
import Testimonials from './Pages/Testimonials/Testimonials';
import Contact from './Pages/Contact/Contact';
import Theme from "./Components/Themes"


const useStyles = makeStyles({
  container:{
    perspective: "1px",
    height: '100%',
    width: "100vw",
    // overflowY: "auto",
    // backgroundImage: `url(${blackIsh})`,
    background:Theme.palette.primary.dark,
    backgroundSize: '100px', 
    backgroundRepeat: 'repeat',
    backgroundAttachment: "scroll",
    overflowX: "hidden",
    
  },

  
  sections:{
    maxWidth: "1200px",
    margin: "auto",
    marginTop: "90px",
    marginBottom: "90px",
    backgroundColor: "transparent"
  },

});


function App() {
  const classes = useStyles();



  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
      <CssBaseline />
          <div className={classes.container}>
                <div elevation="10" className={classes.sections} >
                  <Intro className={classes.intro}/>
                  <Timeline className={classes.intro}/>
                  <Portfolio className={classes.portfolio}/>

                  {/*Awards/ Commendations */}
                  <Testimonials className={classes.testimonials}/>
                  <Contact className={classes.contact}/>
                </div>
          </div>
    </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
