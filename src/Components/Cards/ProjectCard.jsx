import { Card, CardMedia, CardContent, Typography, CardActions, IconButton, Box } from "@mui/material";
import React from "react";
import { Info, GitHub } from "@mui/icons-material";
import theme from "../Themes";
import TagButton from "../Buttons/TagButton";
import openInNewTab from "../../Utils/openInNewTab";

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
};

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
                },
            ]}
            raised
        >
            <CardActions>
                <Box>
                    {props.data.tags.map((tag, i) => (
                        <TagButton size="small" key={i} type={tag}>
                            {tag}
                        </TagButton>
                    ))}
                </Box>
            </CardActions>

            <CardMedia component="img" height="190" image={`../../Media/${props.data.image}`} alt={props.data.image} />
            <CardActions
                sx={{
                    display: "flex",
                    justifyContent: "space-between",

                    "Button:last-child": {
                        float: "right",
                    },
                }}
            >
                <IconButton size="small" onClick={() => openInNewTab(props.data.githubLink)}>
                    <GitHub sx={iconStyles} />
                </IconButton>
                <IconButton size="small" onClick={() => openInNewTab(props.data.infoLink)}>
                    <Info sx={iconStyles} />
                </IconButton>
            </CardActions>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.data.title}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.greys.lighter }}>
                    {props.data.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
