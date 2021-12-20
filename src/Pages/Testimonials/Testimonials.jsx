import { Container, Paper } from "@mui/material";
import React from "react";

const testimonialsStyle = {
    height: "100vh",
    width: "100vw",
    maxWidth: "1200px",
    margin: "auto",
    marginBottom: "100px",
    backgroundColor: "white",
};

export default function Testimonials() {
    return (
        <Paper elevation={10} sx={testimonialsStyle}>
            <Container maxWidth="md"></Container>
        </Paper>
    );
}
