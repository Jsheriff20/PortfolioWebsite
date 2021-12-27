import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            lighter: "#818181",
            light: "#454545",
            main: "#313131",
            dark: "#181818",
        },
        secondary: {
            light: "#0e76a8",
            main: "#003459",
        },
        orange: {
            main: "#FF7518",
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
