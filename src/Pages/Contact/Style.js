import theme from "../../Components/Themes";

export const contactStyle = {
    height: "100vh",
    width: "100vw",
    maxWidth: "1200px",
    margin: "auto",
    display: { xs: null, md: "flex" },
};

export const contactFormStyle = {
    margin: "auto",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
};

export const subTitleStyle = {
    fontSize: "3.125rem",
    color: theme.palette.primary.contrastText,
    alignContent: "center",
    justify: "center",
    align: "center",
    display: "flex",
    justifyContent: "center",
};

export const header = {
    backgroundColor: theme.palette.secondary.light,
    height: "90px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
};

export const formGrid = {
    justify: "center",
    alignContent: "center",
    flexDirection: "column",
};

export const gridElement = {
    marginTop: "20px",
    "*": {
        fontSize: "18px",
        input: { color: theme.palette.primary.contrastText },
        textarea: { color: "#fff !important" },
    },

    "#name": {
        width: "200px",
    },

    "#email": {
        width: "300px",
    },

    "#content": {
        width: "400px",
    },
};

export const submitGrid = {
    marginTop: "30px",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "center",
};
