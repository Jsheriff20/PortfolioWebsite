import { Card, CardMedia, CardContent, Typography, CardActions, IconButton, Box, Tooltip } from "@mui/material"
import React, { useState } from "react"
import { Info, GitHub } from "@mui/icons-material"
import theme from "../Themes"
import TagButton from "../Buttons/TagButton"
import openInNewTab from "../../Utils/openInNewTab"

const iconStyles = {
    color: "#fff",
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "35px",
    verticalAlign: "middle",
    padding: "0px",
    transition: "0.3s",

    ":hover ": {
        color: theme.palette.primary.main,
        background: "#fff",
    },
}

//TODO depending on screen size display ... after x number of characters for the description
export default function ProjectCard({ sx, ...props }) {
    return (
        <Card
            {...props}
            sx={[
                sx,
                {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    minHeight: "500px",
                    maxWidth: "540px",
                },
            ]}
            raised
        >
            <CardActions sx={{ backgroundColor: theme.palette.secondary.main }}>
                <Box>
                    {props.data.tags.map((tag, i) => (
                        <TagButton size="small" key={i} type={tag}>
                            {tag}
                        </TagButton>
                    ))}
                </Box>
            </CardActions>

            <Box
                sx={props.data.githubLink && { cursor: "pointer" }}
                onClick={() => props.data.githubLink && openInNewTab(props.data.githubLink)}
            >
                <CardMedia
                    component="img"
                    height="250"
                    image={props.data.image && props.data.image}
                    alt={props.data.imageAlt}
                />
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",

                        "Button:last-child": {
                            float: "right",
                        },
                    }}
                >
                    {!props.data.githubLink ? (
                        <Typography
                            sx={{
                                backgroundColor: "#db3939",
                                borderRadius: "4px",
                                padding: "2px 4px 2px 4px",
                                fontSize: "14px",
                            }}
                        >
                            Private Repo
                        </Typography>
                    ) : (
                        <Tooltip title="Link to Github repository" placement="top">
                            <IconButton size="small" onClick={() => openInNewTab(props.data.githubLink)}>
                                <GitHub sx={iconStyles} />
                            </IconButton>
                        </Tooltip>
                    )}
                    {!!props.data.infoLink && (
                        <Tooltip title="Link to more information" placement="top">
                            <IconButton
                                size="small"
                                onClick={() => openInNewTab(props.data.infoLink)}
                                disabled={!!props.data.infoLink}
                            >
                                <Info sx={iconStyles} />
                            </IconButton>
                        </Tooltip>
                    )}
                </CardActions>

                <CardContent sx={{ padding: "20px" }}>
                    <Typography gutterBottom variant="h4" sx={{ fontSize: "24px" }}>
                        {props.data.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.greys.lighter,
                            fontFamily: "Georgia",
                            fontSize: "16px",
                        }}
                    >
                        {props.data.description}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}
