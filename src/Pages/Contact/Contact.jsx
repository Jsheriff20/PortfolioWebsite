import { Container, Paper } from "@mui/material";
import React from "react";

const contactStyle = {
    height: "100vh",
    width: "100vw",
    maxWidth: "1200px",
    margin: "auto",
    backgroundColor: "white",
};

export default function Contact() {
    return (
        <Paper sx={contactStyle}>
            <Container maxWidth="md"></Container>
        </Paper>
    );
}
