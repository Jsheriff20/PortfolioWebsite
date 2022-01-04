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
                        <LightButton
                            isSubmitting={false}
                            size="large"
                            onClick={() =>
                                (window.location.href = `${window.location.protocol}//${window.location.host}/#ContactMe`)
                            }
                        >
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
                                        Hi I am <strong>Jack Sheriff</strong>, a Software Developer based in the North
                                        East of England currently working for{" "}
                                        <strong onClick={() => openInNewTab("https://www.connecthealth.co.uk/")}>
                                            Connect Health
                                        </strong>
                                        . After 4 short months at Connect Health I was shortlisted for the{" "}
                                        <strong
                                            onClick={() =>
                                                openInNewTab(
                                                    "https://www.linkedin.com/feed/update/urn:li:activity:6854017831609102336/"
                                                )
                                            }
                                        >
                                            Dynamo Rising Star Award
                                        </strong>
                                        , due to my ability to utalise technology to provide increased accessability to
                                        patients as well as my worked done in the final project of my Honours Degree in
                                        Computing, where I acheived a First Class (4.3/ 4.5 GPA). During my studies and
                                        personal projects, I have worked with a range of languages and tools, that allow
                                        me to achieve the best solution to each unique problem. I am a dedicated hard
                                        worker that always strives for the best and works well under pressure whilst
                                        achieving deadlines. I am a strong team player and participate in multiple team
                                        activities, however, I work just as strongly as an individual which has been
                                        demonstrated through my multiple personal programming projects and work efforts.
                                        I have interests in stock market, property, and crypto trading as well as team
                                        activities such as basketball.
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
