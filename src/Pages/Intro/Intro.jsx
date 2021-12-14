import { Container, Typography, Grid, Paper, ImageList, Text, Button, Box, Card} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import MediaButtons from "./SocialMediaBox"

const useStyles = makeStyles(theme  => ({
    
    intro:{
        width: "100vw",
        maxWidth: "1200px",
        margin: "auto",
        marginBottom: "100px",
        backgroundColor: "transparent"
    },
    
    profileInfo:{
        height: 'calc(70vh - 90px)',
        maxHeight: 'calc(70vh - 90px)',
        overflow: "hidden",
        position: "relative",
    },
    infoBar:{
      height: '30vh',
      maxHeight: '30vh',
      overflow: "hidden",
      position: "relative",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding:"1.25rem"
    },
    title:{
        textAlign:"center",
        lineHeight: null,
        fontSize: "5.625rem",
        color: theme.palette.secondary.main,
    },
    job:{
        textAlign:"center",
        marginTop: "3.125rem",
    },
    aboutMe:{
        fontSize: "1.25rem",
    },
    subTitle:{
        fontSize: "3.125rem",
        color: theme.palette.primary.contrastText
    },
    aboutMeTitle:{
        fontSize: "3.125rem",
        color: theme.palette.greys.contrastText
    },
    contactButton:{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        marginTop: '1rem',
        margin: 'auto',
        fontSize: "1.2rem"
    },
    centerButton:{
        textAlign:'center'
    }
}))


export default function Intro(props){
    const classes = useStyles();
    //inside of container have a white bar that goes across that contains a description on the left side and details on the right 
    //above the white bar have an image of me on the right
    //on the left of me without a background have a small amount of text which is a header 
    /*Jack Sheriff Large font - stands out
    Software Developer smaller fond below it -little bit of a less standing out colour (https://miro.medium.com/max/1000/0*aWaUn-9WN0THC77B.jpg)
    */
    return (
        <Box className={classes.intro}>
            
            <Grid
            container
            direction ="row"
            justifyContent="center"
            alignItems="center"
            className={classes.introGrid}
            >
                <Grid item xs="12" md="6" className={classes.profileInfo} >
                    <Box className={classes.shortDesc}>
                        <Typography display="block" className={classes.title} style={{ flexShrink: 1 }}><strong> Jack Sheriff </strong></Typography>
                        <Typography className={`${classes.subTitle} ${classes.job}`}>Software Developer</Typography>
                        
                        <Box className={classes.centerButton}>
                            <Button variant="contained" size="large" className={classes.contactButton}><strong>Contact Me</strong></Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs="12" md="6" className={classes.profileInfo}>
                    <Typography style={{backgroundColor:"green"}}>xs=12 sm=6</Typography>
                </Grid>
                
                <Grid item xs="12">
                    <Card className={classes.infoBar} sx={{ boxShadow: 10 }} raised>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={7}>
                                <Box>
                                    <Typography className={classes.aboutMeTitle}>About Me...</Typography>
                                    <Typography className={classes.aboutMe}><p>Hi, I am a Software Developer that graduated <strong onClick={() => openInNewTab("https://www.abertay.ac.uk/")}>Abertay University</strong> with a First Class Honours Degree in Computing. I am currently a Junior Software Developer at <strong onClick={() => openInNewTab("https://www.connecthealth.co.uk/")}>Connect Health</strong>, and a <strong onClick={() => openInNewTab("https://www.linkedin.com/feed/update/urn:li:activity:6854017831609102336/")}>Dynamo Rising Star Shortlistee</strong></p></Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={0} md={1}/>
                            <Grid item xs={6} md={4}>
                                <MediaButtons/>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

const openInNewTab = (url) => {
    const win = window.open(url, '_blank');
    if (win != null) {
      win.focus();
    }
}