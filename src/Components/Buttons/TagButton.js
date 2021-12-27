import React from "react";
import { Button } from "@mui/material";
import theme from "../Themes";
import findContrastColour from "../../Utils/findContrastColour";

const getTagColour = (tag) => {
    switch (tag) {
        case "Android":
            return "#a4c639";
        case "Java":
            return "#5382a1";
        case "Firebase":
            return "#F6820D";
        case "University":
            return "#0356a4";
        default:
            return "#fff";
    }
};

const TagButton = ({ sx, ...props }) => {
    let tagColour = getTagColour(props.children);
    return (
        <Button
            {...props}
            variant="contained"
            sx={Object.assign(sx ? sx : {}, {
                backgroundColor: tagColour,
                color: findContrastColour(tagColour),
                lineHeight: "1.2",
                borderRadius: "10px",
                transition: "0.5s",

                ":hover ": {
                    transform: "translateY(-5px)",
                    background: theme.palette.secondary.main,
                    color: findContrastColour(theme.palette.secondary.main),
                },
            })}
        />
    );
};

export default TagButton;
