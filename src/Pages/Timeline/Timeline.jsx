import { Box } from "@mui/material";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "./Timeline.css";
import theme from "../../Components/Themes";
import { Work, School, LinkedIn } from "@mui/icons-material";

export default function Timeline(props) {
    return (
        <Box>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - Present"
                    iconStyle={{ background: "#003459", color: "#fff" }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Connect Health</h4>
                    <p>description</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021"
                    iconStyle={{ background: theme.palette.iconButtons.linkedIn.icon, color: "#fff" }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Graduated Abertay University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Computing - Bachelor of Science</h4>
                    <p>description</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - 2020"
                    iconStyle={{ background: "#003459", color: "#fff" }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">{"Bartender & Waiter"} </h3>
                    <h4 className="vertical-timeline-element-subtitle">{"Apex Hotels"}</h4>
                    <p>descriptions</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2019"
                    iconStyle={{ background: "#003459", color: "#fff" }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">Chef</h3>
                    <h4 className="vertical-timeline-element-subtitle">{"Pacamara Food & Drink"}</h4>
                    <p>description</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018"
                    iconStyle={{ background: theme.palette.iconButtons.linkedIn.icon, color: "#fff" }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Graduated Gateshead College </h3>
                    <h4 className="vertical-timeline-element-subtitle">Software Development - BTEC Extended Diploma</h4>
                    <p>description</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2016 - 2018"
                    iconStyle={{ background: "#003459", color: "#fff" }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">{"Chef & Waiter"}</h3>
                    <h4 className="vertical-timeline-element-subtitle">Cairn Hotel Group </h4>
                    <p>description</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016"
                    iconStyle={{ background: theme.palette.iconButtons.linkedIn.icon, color: "#fff" }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Graduated Lord Lawson Academy</h3>
                    <h4 className="vertical-timeline-element-subtitle">GCSEs</h4>
                    <p>description</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2014 - 2018"
                    iconStyle={{ background: "#003459", color: "#fff" }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">Head basketball coach</h3>
                    <h4 className="vertical-timeline-element-subtitle">Gateshead/ Birtley Phoenix</h4>
                    <p>description</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Box>
    );
}

const openInNewTab = (url) => {
    const win = window.open(url, "_blank");
    if (win != null) {
        win.focus();
    }
};
