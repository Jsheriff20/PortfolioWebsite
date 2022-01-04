import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Work, School } from "@mui/icons-material";
import theme from "./Themes";

export default function TimelineElement({ details }) {
    return (
        <VerticalTimelineElement
            className={
                details.type === "Work" ? "vertical-timeline-element--work" : "vertical-timeline-element--education"
            }
            date={details.date}
            iconStyle={{
                background: details.type === "Work" ? theme.palette.secondary.main : theme.palette.secondary.light,
                color: "#fff",
            }}
            icon={details.type === "Work" ? <Work /> : <School />}
        >
            <h3 className="vertical-timeline-element-title">{details.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{details.subtitle}</h4>
            <p>{details.description}</p>
        </VerticalTimelineElement>
    );
}
