import { VerticalTimelineElement } from "react-vertical-timeline-component"
import { Work, School } from "@mui/icons-material"
import theme from "./Themes"
import { Typography, Box, Tooltip } from "@mui/material"

export default function TimelineElement({ details }) {
    return (
        <VerticalTimelineElement
            className={
                details.type === "Work" ? "vertical-timeline-element--work" : "vertical-timeline-element--education"
            }
            date={details.date}
            iconStyle={{
                background: details.type === "Work" ? theme.palette.secondary.main : theme.palette.secondary.light,
                color: theme.palette.primary.contrastText,
            }}
            icon={
                details.type === "Work" ? (
                    <Tooltip title="Work" placement="top">
                        <Work />
                    </Tooltip>
                ) : (
                    <Tooltip title="Education" placement="top">
                        <School />
                    </Tooltip>
                )
            }
        >
            <Box sx={{ margin: "-8px 0px 8px 0px" }}>
                <Typography
                    sx={{ fontSize: "14px", color: theme.palette.primary.dark }}
                    variant="h3"
                    className="vertical-timeline-element-body-date"
                >
                    {details.date}
                </Typography>
            </Box>

            <Box sx={{ margin: "0px 0px 20px 0px" }}>
                <Typography sx={{ fontSize: "24px" }} variant="h3" className="vertical-timeline-element-title">
                    {details.title}
                </Typography>
                <Typography sx={{ fontSize: "16px" }} variant="h4" className="vertical-timeline-element-subtitle">
                    {details.subtitle}
                </Typography>
            </Box>
            <Typography variant="p" sx={{ fontFamily: "Georgia" }}>
                {details.description}
            </Typography>
        </VerticalTimelineElement>
    )
}
