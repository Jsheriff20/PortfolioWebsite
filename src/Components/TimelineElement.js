import { VerticalTimelineElement } from "react-vertical-timeline-component";

export function TimelineElement() {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Work />}
        >
            <h3 className="vertical-timeline-element-title">Head basketball coach</h3>
            <h4 className="vertical-timeline-element-subtitle">Gateshead/ Birtley Phoenix</h4>
            <p>description</p>
        </VerticalTimelineElement>
    );
}
