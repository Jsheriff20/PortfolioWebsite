import { Container, Typography, Grid, Paper, ImageList, Text, Button, Box, Card } from "@mui/material";
import React from "react";
import SocialMediaBoxHorizontal from "../../Components/SocialMediaBoxHorizontal";
import SocialMediaBoxVertical from "../../Components/SocialMediaBoxVertical";
import theme from "../../Components/Themes";

const introStyle = {
    width: "100vw",
    maxWidth: "1200px",
    margin: "auto",
    backgroundColor: "transparent",
};

const profileInfoStyle = {
    height: { sm: null, md: "calc(70vh - 90px)" },
    maxHeight: { sm: null, md: "calc(70vh - 90px)" },
    overflow: "hidden",
    position: "relative",
};

const infoBarStyle = {
    height: { sm: null, md: "30vh" },
    maxHeight: { sm: null, md: "30vh" },
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "1.25rem",
    boxShadow: 10,
};

const titleStyle = {
    textAlign: "center",
    lineHeight: null,
    fontSize: "5.625rem",
    color: theme.palette.orange.main,
};

const jobStyle = {
    textAlign: "center",
    marginTop: "3.125rem",
};

const aboutMeStyle = {
    fontSize: "1.25rem",
};

const subTitleStyle = {
    fontSize: "3.125rem",
    color: theme.palette.primary.contrastText,
};

const contactButtonStyle = {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
    marginTop: "1rem",
    margin: "auto",
    fontSize: "1.2rem",
};

const aboutMeTitleStyle = {
    fontSize: "3.125rem",
    color: theme.palette.greys.contrastText,
};

const centerButtonStyle = {
    textAlign: "center",
};

export default function Intro(props) {
    //inside of container have a white bar that goes across that contains a description on the left side and details on the right
    //above the white bar have an image of me on the right
    //on the left of me without a background have a small amount of text which is a header
    /*Jack Sheriff Large font - stands out
    Software Developer smaller fond below it -little bit of a less standing out colour (https://miro.medium.com/max/1000/0*aWaUn-9WN0THC77B.jpg)
    */
    return (
        <Box sx={introStyle}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} md={7} sx={profileInfoStyle}>
                    <Typography display="block" sx={titleStyle} style={{ flexShrink: 1 }}>
                        <strong> Jack Sheriff </strong>
                    </Typography>
                    <Typography sx={Object.assign(subTitleStyle, jobStyle)}>Software Developer</Typography>

                    <Box sx={centerButtonStyle}>
                        <Button variant="contained" size="large" sx={contactButtonStyle}>
                            <strong>Contact Me</strong>
                        </Button>
                    </Box>
                </Grid>
                <Grid item sx={12} md={5} sx={profileInfoStyle}>
                    <Typography style={{ backgroundColor: "green" }}>xs=12 sm=6</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Card sx={infoBarStyle} raised>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={7}>
                                <Typography sx={aboutMeTitleStyle}>About Me...</Typography>
                                <Typography sx={aboutMeStyle}>
                                    <p>
                                        Hi, I am a Software Developer that graduated{" "}
                                        <strong onClick={() => openInNewTab("https://www.abertay.ac.uk/")}>
                                            Abertay University
                                        </strong>{" "}
                                        with a First Class Honours Degree in Computing. I am currently a Junior Software
                                        Developer at{" "}
                                        <strong onClick={() => openInNewTab("https://www.connecthealth.co.uk/")}>
                                            Connect Health
                                        </strong>
                                        , and a{" "}
                                        <strong
                                            onClick={() =>
                                                openInNewTab(
                                                    "https://www.linkedin.com/feed/update/urn:li:activity:6854017831609102336/"
                                                )
                                            }
                                        >
                                            Dynamo Rising Star Shortlistee
                                        </strong>
                                    </p>
                                </Typography>
                            </Grid>
                            <Grid item xs={0} md={1} sx={{ display: { xs: "none", md: "block" } }} />
                            <Grid item xs={12} md={4}>
                                <SocialMediaBoxVertical sx={{ display: { xs: "none", md: "block" } }} />
                                <SocialMediaBoxHorizontal sx={{ display: { xs: "block", md: "none" } }} />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

const openInNewTab = (url) => {
    const win = window.open(url, "_blank");
    if (win != null) {
        win.focus();
    }
};
