import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { Box, CssBaseline } from "@mui/material";

import Timeline from "./Pages/Timeline/Timeline";
import Intro from "./Pages/Intro/Intro";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Theme from "./Components/Themes";

const containerStyle = {
    perspective: "1px",
    height: "100%",
    background: Theme.palette.primary.dark,
    backgroundSize: "100px",
    backgroundRepeat: "repeat",
    backgroundAttachment: "scroll",
    overflowX: "hidden",
};

const sectionsStyle = {
    maxWidth: "1200px",
    margin: "auto",
    marginTop: { xs: "0px", md: "90px" },
    marginBottom: "90px",
    backgroundColor: "transparent",
};

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                <Box sx={containerStyle}>
                    <Box elevation="10" sx={sectionsStyle}>
                        <Intro />
                        <Timeline />
                        <Portfolio />
                        <Contact />
                    </Box>
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
