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

//sx styles

const iconTextCell = {
    display: "flex",
    flexWrap: "wrap",
    float: "left",
    color: theme.palette.primary.contrastText,
    borderBottom: "none",
};

const MediaButtonsVertical = ({ sx, ...otherProps }) => {
    return (
        <TableContainer {...otherProps} sx={sx}>
            <Table aria-label="simple table">
                <TableBody sx={{ fontSize: 50 }}>
                    <TableRow key="Email">
                        <TableCell
                            component="th"
                            scope="row"
                            sx={iconTextCell}
                            onClick={() => openInNewTab("mailto:JackASheriff@hotmail.co.uk")}
                        >
                            <SocialMediaButton
                                id="emailButton"
                                socialMediaType="email"
                                sx={{ marginRight: theme.spacing(2) }}
                            />

                            <Typography>
                                <strong>JackASheriff@hotmail.co.uk</strong>
                            </Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow key="GitHub">
                        <TableCell
                            component="th"
                            scope="row"
                            sx={iconTextCell}
                            onClick={() => openInNewTab("https://github.com/Jsheriff20")}
                        >
                            <SocialMediaButton
                                id="gitHubButton"
                                socialMediaType="gitHub"
                                sx={{ marginRight: theme.spacing(2) }}
                            />

                            <Typography>
                                <strong>JSheriff20</strong>
                            </Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow key="LinkedIn">
                        <TableCell
                            component="th"
                            scope="row"
                            sx={iconTextCell}
                            onClick={() => openInNewTab("https://www.linkedin.com/in/jacksheriff20/")}
                        >
                            <SocialMediaButton
                                id="linkedInButton"
                                socialMediaType="linkedIn"
                                sx={{ marginRight: theme.spacing(2) }}
                            />

                            <Typography>
                                <strong>JackSheriff20</strong>
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MediaButtonsVertical;

const openInNewTab = (url) => {
    const win = window.open(url, "_blank");
    if (win != null) {
        win.focus();
    }
};
