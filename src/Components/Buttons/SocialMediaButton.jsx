import React from "react";
import { Button } from "@mui/material";
import { GitHub, Email, LinkedIn, Error } from "@mui/icons-material";
import theme from "../Themes";

const getSocialMediaIconColour = (socialMediaType) => {
    switch (socialMediaType) {
        case "email":
            return theme.palette.iconButtons.email.icon;
        case "gitHub":
            return theme.palette.iconButtons.gitHub.icon;
        case "linkedIn":
            return theme.palette.iconButtons.linkedIn.icon;
        default:
            return "#000";
    }
};

const getSocialMediaIcon = (socialMediaType, sx) => {
    switch (socialMediaType) {
        case "email":
            return <Email sx={sx} />;
        case "gitHub":
            return <GitHub sx={sx} />;
        case "linkedIn":
            return <LinkedIn sx={sx} />;
        default:
            return <Error sx={sx} />;
    }
};

const SocialMediaButton = ({ id, socialMediaType, sx, ...otherProps }) => {
    return (
        <Button
            {...otherProps}
            id={id}
            variant="contained"
            sx={[
                sx ? sx : {},
                {
                    backgroundColor: theme.palette.primary.contrastText,
                    minWidth: "10px",
                    padding: "7px 9px",
                    transition: "0.3s",

                    ":hover ": {
                        background: getSocialMediaIconColour(socialMediaType),
                        "> *": {
                            color: "#fff",
                        },
                    },
                },
            ]}
        >
            {getSocialMediaIcon(socialMediaType, { color: getSocialMediaIconColour(socialMediaType) })}
        </Button>
    );
};

export default SocialMediaButton;
