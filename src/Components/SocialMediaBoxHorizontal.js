import React from "react";
import { Box } from "@mui/material";
import theme from "./Themes";
import openInNewTab from "../Utils/openInNewTab";

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
