import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    typography: {
        fontFamily: ["Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
    },
    palette: {
        primary: {
            dark: "#26282B",
            main: "#353941",
        },
        secondary: {
            contrastText: "#12120d",
            light: "#90B8F8",
            main: "#5F85DB",
            dark: "#506cad",
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
})

export default theme
