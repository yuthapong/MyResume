import { Grid, Typography } from "@material-ui/core";
import React from "react";
import {
  CustomTimeline,
  CustomTimelineSeparator,
} from "../../components/CustomTimeline/CustomTimeline";
import "./EducationProfile.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import { TimelineContent, TimelineItem } from "@material-ui/lab/";
import EducationDetail from "../../utils/EducationDetail";

const workhistoryTimeline = () => {
  const workhistoryTimelineItem = ({ title, date, description }) => (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent>
        <Typography className="timeline_title">{title}</Typography>
        <Typography variant="caption" className="timeline_date">
          {date}
        </Typography>
        <Typography cariant="body2" className="timeline_desc">
          {description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
  return (
    <CustomTimeline title="Work History" icon={<WorkIcon />}>
      {EducationDetail.work_experiences.map((ex) =>
        workhistoryTimelineItem(ex)
      )}
    </CustomTimeline>
  );
};

const educationTimeline = () => {
  const educationTimelineItem = ({ title, date, university, gpa }) => (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent>
        <Typography className="timeline_title">{title}  {university}</Typography>
        <Typography variant="caption" className="timeline_date">
         
          <div> {date} </div>
        </Typography>
        <Typography cariant="body2" className="timeline_desc">
        <span>Grade Point Average: </span> 
          {gpa}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );

  return (
    <CustomTimeline title="Work History" icon={<WorkIcon />}>
      {EducationDetail.education.map((ex) => educationTimelineItem(ex))}
    </CustomTimeline>
  );
};

export const EducationProfile = () => {
  return (
    <>
      <Grid container className='work_edu_timeline'>
        <Grid xs={6} item>
          {workhistoryTimeline()}
        </Grid>
        <Grid xs={6} item>
          {educationTimeline()}
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={6} item>
          Research Experiences
        </Grid>
        <Grid xs={6} item>
          Activities
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={6} item>
          Languege Skill Overall
        </Grid>
        <Grid xs={6} item>
          Languege In details
        </Grid>
      </Grid>
    </>
  );
};
