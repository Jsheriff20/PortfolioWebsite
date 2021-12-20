import { Container, Paper, ImageList, ImageListItem, Slide, ImageListItemBar, IconButton } from "@mui/material";
import React from "react";
import { Info } from "@mui/icons-material";
import theme from "../../Components/Themes";

const portfolioStyle = {
    height: "100vh",
    width: "100vw",
    maxWidth: "1200px",
    margin: "auto",
    marginBottom: "100px",
    backgroundColor: "white",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
};

export default function Portfolio(props) {
    return (
        <Paper sx={portfolioStyle}>
            <Container maxWidth="md"></Container>
        </Paper>
    );
}
