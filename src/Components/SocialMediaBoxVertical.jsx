import React from "react"
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"
import theme from "./Themes"
import openInNewTab from "../Utils/openInNewTab"
import SocialMediaButton from "./Buttons/SocialMediaButton"

//sx styles

const iconTextCell = {
    display: "flex",
    alignItems: "center !important",
    flexWrap: "wrap",
    float: "left",
    color: theme.palette.primary.contrastText,
    borderBottom: "none",
}

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
                            onClick={() => openInNewTab("mailto:Jackasheriff@hotmail.co.uk")}
                        >
                            <SocialMediaButton
                                id="emailButton"
                                socialMediaType="email"
                                sx={{ marginRight: theme.spacing(2) }}
                            />

                            <Typography>
                                <strong>Jackasheriff@hotmail.co.uk</strong>
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
    )
}

export default MediaButtonsVertical
