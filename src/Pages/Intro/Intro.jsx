import { Typography, Grid, Box, Card } from "@mui/material";
import React from "react";
import SocialMediaBoxHorizontal from "../../Components/SocialMediaBoxHorizontal";
import SocialMediaBoxVertical from "../../Components/SocialMediaBoxVertical";
import LightButton from "../../Components/Buttons/LightButton";
import * as Style from "./Style";
import openInNewTab from "../../Utils/openInNewTab";

export default function Intro(props) {
    return (
        <Box sx={Style.intro}>
            <Box sx={Style.backgroundImage} />

            <Grid container sx={Style.titleGrid}>
                <Grid item sx={12} md={5}></Grid>

                <Grid item xs={12} md={7} sx={Style.profileInfo}>
                    <Typography sx={Style.title}>
                        <strong> Jack Sheriff </strong>
                    </Typography>
                    <Typography sx={[Style.job, Style.subTitle]}>Software Developer</Typography>
                    <Box sx={Style.centerButton}>
                        <LightButton isSubmitting={false} size="large">
                            <strong>Contact Me</strong>
                        </LightButton>
                    </Box>
                </Grid>
            </Grid>

            <Grid container sx={Style.aboutMeGrid}>
                <Grid item xs={12}>
                    <Card sx={Style.infoBar} raised>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={7}>
                                <Typography sx={Style.subTitle}>About Me...</Typography>
                                <Typography sx={Style.aboutMe}>
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

                            <Grid item xs={0} md={1} sx={Style.hideOnSm} />

                            <Grid item xs={12} md={4}>
                                <SocialMediaBoxVertical sx={Style.hideOnSm} />
                                <SocialMediaBoxHorizontal sx={Style.showOnSm} />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
