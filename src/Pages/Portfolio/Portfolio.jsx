import { Grid, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import GetPortfolioData from "./PortfolioData"
import ProjectCard from "../../Components/Cards/ProjectCard"
import LightButton from "../../Components/Buttons/LightButton"
import * as Style from "./Style"

export default function Portfolio(props) {
    const [numOfCards, setNumOfCards] = useState(3)
    const [portfolioData, setPortfolioData] = useState([])

    useEffect(() => {
        setPortfolioData(GetPortfolioData())
    }, [])

    const mountedStyle = (cardNum) => {
        cardNum = cardNum % 4
        cardNum = cardNum === 0 ? 1 : cardNum + 1

        let ms = cardNum * 300 + "ms"

        return {
            animation: `inAnimation ${ms} ease-in`,
            " @keyframes inAnimation": {
                "0%": {
                    opacity: 0,
                    visibility: "hidden",
                },
                "100%": {
                    opacity: 1,
                    visibility: "visible",
                },
            },
        }
    }
    return (
        <>
            <Typography sx={Style.subTitle}>Noteworthy Projects</Typography>

            <Grid container direction="row">
                {portfolioData.map(
                    (item, i) =>
                        i <= numOfCards && (
                            <Grid item xs={12} md={6} sx={Style.cardGrid}>
                                <ProjectCard data={item} sx={mountedStyle(i)} />
                            </Grid>
                        )
                )}

                <Grid item xs={12} sx={Style.buttonGrid}>
                    {numOfCards < portfolioData.length && (
                        <LightButton isSubmitting={false} size="large" onClick={() => setNumOfCards(numOfCards + 4)}>
                            <strong>View More</strong>
                        </LightButton>
                    )}
                </Grid>
            </Grid>
        </>
    )
}
