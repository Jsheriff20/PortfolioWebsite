import React from "react";
import { Button } from "@mui/material";
import theme from "../Themes";

const lightButtonStyle = {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
    marginTop: "1rem",
    fontSize: "1.2rem",
    transition: "0.5s",
};

const LightButton = ({ sx, isSubmitting, ...otherProps }) => {
    isSubmitting = isSubmitting ? isSubmitting : false;

    let style = Object.assign(
        isSubmitting
            ? {
                  height: "40px",
                  width: "40px",
                  minWidth: "40px",
                  borderRadius: "40px",
                  border: "4px solid grey",
                  borderLeft: `4px solid ${theme.palette.secondary.light}`,
                  animation: "rotating 2s 0.4s linear infinite",
                  backgroundColor: "transparent",
                  color: "transparent",
                  padding: "0px",
                  boxShadow:
                      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",

                  "&:disabled": {
                      color: "transparent",
                      backgroundColor: "transparent",
                      boxShadow:
                          "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
                  },

                  ":hover": {
                      backgroundColor: "transparent",
                  },

                  "@keyframes rotating": {
                      from: {
                          transform: "rotate(0deg)",
                      },
                      to: {
                          transform: "rotate(360deg)",
                      },
                  },
              }
            : lightButtonStyle,
        {
            cursor: "pointer",
            transition: "all 0.25s ease",
        }
    );

    return <Button variant="contained" sx={[sx ? sx : {}, style]} {...otherProps} />;
};

export default LightButton;
