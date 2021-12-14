import { Container, Typography, Grid, Paper, ImageList, Text, Button, Box, Card} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './Timeline.css';
import {Work, School, LinkedIn} from '@mui/icons-material';


const useStyles = makeStyles(theme  => ({
  
}))


export default function Timeline(props){
    const classes = useStyles();
    return (
        <Box className={classes.intro}>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Connect Health</h4>
                    <p>
                        description
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Graduated Abertay University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Computing - Bachelor of Science</h4>
                    <p>
                        description
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">{"Bartender & Waiter"} </h3>
                    <h4 className="vertical-timeline-element-subtitle">{"Apex Hotels"}</h4>
                    <p>
                        descriptions
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018 - 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">Chef</h3>
                    <h4 className="vertical-timeline-element-subtitle">{"Pacamara Food & Drink"}</h4>
                    <p>
                        description
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Graduated Gateshead College </h3>
                    <h4 className="vertical-timeline-element-subtitle">Software Development - BTEC Extended Diploma</h4>
                    <p>
                        description
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016 - 2018"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">{"Chef & Waiter"}</h3>
                    <h4 className="vertical-timeline-element-subtitle">Cairn Hotel Group </h4>
                    <p>
                        description
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Graduated Lord Lawson Academy</h3>
                    <h4 className="vertical-timeline-element-subtitle">GCSEs</h4>
                    <p>
                        description
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2014 - 2018"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">Head basketball coach</h3>
                    <h4 className="vertical-timeline-element-subtitle">Gateshead/ Birtley Phoenix</h4>
                    <p>
                        description
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Box>
    );
}

const openInNewTab = (url) => {
    const win = window.open(url, '_blank');
    if (win != null) {
      win.focus();
    }
}