import React from "react";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import WorkIcon from "@material-ui/icons/Work";
import "./CustomTimeline.css";
import { Typography } from "@material-ui/core";

export const CustomTimeline = ({ title, child, icon }) => {
  return (
    <Timeline className="timeline">
      {/* {timeline Header} */}
      <TimelineItem className="timeline_firstitem">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="timeline_header">{title}</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* {timeline Content} */}
      {child}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className='separator_padding'>
    <TimelineDot variant='outlined' className='timeline_dot'/>
    <TimelineConnector />
  </TimelineSeparator>
);
