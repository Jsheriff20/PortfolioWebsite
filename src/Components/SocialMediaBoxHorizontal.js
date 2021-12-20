import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
// @material-ui/icons components
// core components
import {
    Button,
    Container,
    Grid,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Box,
} from "@mui/material";
import theme from "./Themes";

import SocialMediaButton from "./Buttons/SocialMediaButton";

const MediaButtonsHorizontal = ({ sx, ...otherProps }) => {
    return (
        <Box
            {...otherProps}
            sx={Object.assign(sx, {
                justifyContent: "center",
                alignItems: "center",
                display: { xs: "flex", md: "none" },
            })}
        >
            {/*display for smaller screens*/}
            <SocialMediaButton
                id="emailButton"
                socialMediaType="email"
                onClick={() => openInNewTab("mailto:JackASheriff@hotmail.co.uk")}
                sx={{ marginRight: theme.spacing(2) }}
            />
            <SocialMediaButton
                id="gitHubButton"
                socialMediaType="gitHub"
                onClick={() => openInNewTab("https://github.com/Jsheriff20")}
                sx={{ marginRight: theme.spacing(2) }}
            />
            <SocialMediaButton
                id="linkedInButton"
                socialMediaType="linkedIn"
                onClick={() => openInNewTab("https://www.linkedin.com/in/jacksheriff20/")}
                sx={{ marginRight: theme.spacing(2) }}
            />
        </Box>
    );
};

export default MediaButtonsHorizontal;

const openInNewTab = (url) => {
    const win = window.open(url, "_blank");
    if (win != null) {
        win.focus();
    }
};
