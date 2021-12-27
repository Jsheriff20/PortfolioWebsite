import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Info, GitHub } from "@mui/icons-material";
import theme from "../../Components/Themes";
import PortfolioData from "./PortfolioData";
import ProjectCard from "../../Components/Cards/ProjectCard";
import LightButton from "../../Components/Buttons/LightButton";

export default function Portfolio(props) {
    const [numOfCards, setNumOfCards] = useState(3);

    return (
        //TODO set max of 4 projects to load at first
        <>
            <Grid container direction="row">
                {PortfolioData.map(
                    (item, i) =>
                        i <= numOfCards && (
                            <Grid item xs={12} md={6} sx={{ padding: "30px" }}>
                                <ProjectCard data={item} />
                            </Grid>
                        )
                )}

                <Grid item xs={12} align="center">
                    <LightButton
                        isSubmitting={false}
                        size="small"
                        onClick={() => setNumOfCards(numOfCards + 4)}
                        sx={{ marginBottom: "100px" }}
                    >
                        <strong>View More</strong>
                    </LightButton>
                </Grid>
            </Grid>
        </>

        //TODO add a button "View More", if clicked show 4 more projects
    );
}
