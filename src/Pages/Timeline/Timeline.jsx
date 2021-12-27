import { Box } from "@mui/material";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "./Timeline.css";
import TimelineData from "./TimelineData";
import TimelineElement from "../../Components/TimelineElement";

const timelineStyle = {
    width: "100vw",
    maxWidth: "1200px",
    margin: "auto",
    marginBottom: "100px",
};

export default function Timeline(props) {
    return (
        <Box sx={timelineStyle}>
            <VerticalTimeline>
                {TimelineData.map((element) => (
                    <TimelineElement details={element} />
                ))}
            </VerticalTimeline>
        </Box>
    );
}
