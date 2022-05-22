import theme from "../../Components/Themes"

export const contactStyle = {
    width: "100vw",
    maxWidth: "1200px",
    margin: "auto",
    marginBottom: "50px",
    display: { xs: null, md: "flex" },
}

export const contactFormStyle = {
    margin: "auto",
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
}

export const subTitleStyle = {
    fontSize: { xs: "1.9rem", sm: "2.5rem", md: "3.125rem" },
    color: theme.palette.primary.contrastText,
    alignContent: "center",
    justify: "center",
    align: "center",
    display: "flex",
    justifyContent: "center",
}

export const header = {
    backgroundColor: theme.palette.secondary.main,
    height: "90px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
}

export const formGrid = {
    justify: "center",
    alignContent: "center",
    flexDirection: "column",
}

const fieldStyle = {
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: "4px",
    backgroundColor: theme.palette.primary.main,
}

export const gridElement = {
    marginTop: "20px",

    "*": {
        fontSize: "18px",
        input: { color: theme.palette.primary.contrastText },
        textarea: { color: "#fff !important" },
    },

    ".MuiTypography-root": {
        paddingLeft: "10px",
    },

    "#name": {
        width: { xs: "220px", sm: "200px" },
        ...fieldStyle,
    },

    "#email": {
        width: { xs: "220px", sm: "300px" },
        ...fieldStyle,
    },

    "#message": {
        width: { xs: "220px", sm: "300px", md: "400px" },
    },
}

export const messageField = {
    ...fieldStyle,
}

export const submitGrid = {
    marginTop: "30px",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "center",
}
