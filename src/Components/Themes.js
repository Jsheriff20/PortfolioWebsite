import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            lighter: "#818181",
            light: "#2e343d",
            main: "#23272e",
            dark: "#181818",
            darker: "#131314",
        },
        secondary: {
            lighter: "#0356a4",
            light: "#0e76a8",
            main: "#003459",
        },
        orange: {
            main: "#c94f26",
        },
        greys: {
            lighter: "#c7c9d4",
            light: "#b3b3b3",
            dark: "#1e2529",
        },
        iconButtons: {
            email: {
                button: "#fff",
                icon: "#1cb2f5",
            },
            gitHub: {
                button: "#fff",
                icon: "#24292D",
            },
            linkedIn: {
                button: "#fff",
                icon: "#0E76A8",
            },
        },
    },
});

export default theme;
