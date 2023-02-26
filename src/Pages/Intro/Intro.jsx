import { Typography, Grid, Box, Card } from "@mui/material"
import React from "react"
import SocialMediaBoxHorizontal from "../../Components/SocialMediaBoxHorizontal"
import SocialMediaBoxVertical from "../../Components/SocialMediaBoxVertical"
import * as Style from "./Style"

const TITLE_ARRAY = ["J", "a", "c", "k", " ", "S", "h", "e", "r", "i", "f", "f"]

export default function Intro(props) {
    const [title, setTitle] = React.useState(" ")
    const [displayJob, setDisplayJob] = React.useState(false)

    React.useEffect(() => {
        let title = ""
        TITLE_ARRAY.forEach((letter, index) => {
            setTimeout(() => {
                title += letter
                setTitle(title)
            }, 100 * index)
        })
    }, [])

    React.useEffect(() => {
        if (title.length !== TITLE_ARRAY.length) return
        setDisplayJob(true)
    }, [title])

    return (
        <Box sx={Style.intro}>
            <Box sx={Style.backgroundImage} />

            <header>
                <Grid container sx={Style.titleGrid}>
                    <Grid item sx={12} md={5}></Grid>

                    <Grid item xs={12} md={7} sx={Style.profileInfo}>
                        <Typography variant="h1" sx={Style.title}>
                            {title === " " && <span style={{ visibility: "hidden" }}> | </span>}
                            <strong> {title} </strong>
                        </Typography>
                        <Box sx={{ overflow: "hidden", paddingBottom: "20px" }}>
                            {displayJob ? (
                                <Typography
                                    className="w3-container w3-center w3-animate-top"
                                    variant="h2"
                                    sx={[Style.job, Style.subTitle, Style.jobTitle]}
                                >
                                    Software Developer
                                </Typography>
                            ) : (
                                <Typography
                                    variant="h2"
                                    sx={[Style.job, Style.subTitle, Style.jobTitle, { visibility: "hidden" }]}
                                >
                                    |
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </header>
            <Grid container sx={Style.aboutMeGrid}>
                <Grid item xs={12}>
                    <Card sx={Style.infoBar} raised>
                        <Grid container>
                            <Grid item xs={12} md={7}>
                                <Typography variant="h3" sx={Style.subTitle}>
                                    About Me...
                                </Typography>
                                <Typography variant="p" sx={Style.aboutMe}>
                                    With a 1st Class BSc Honours Degree in Computing from Abertay University, I am
                                    currently a full stack software developer for BBC. In my first year in the industry,
                                    I was shortlisted for the Dynamo Rising Star award, as my dedication and hard work
                                    were recognised. I am a good team player and take part in a variety of team
                                    activities, like basketball, but I also work very hard on my own, as evidenced by
                                    the numerous personal programming projects and job endeavours I have undertaken.
                                    Additional interests include real estate, investing in cryptocurrencies, and the
                                    stock market.
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
    )
}
