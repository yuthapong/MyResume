import { Grid, Typography, Tabs, Box } from "@material-ui/core";
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
import AssignmentIcon from "@material-ui/icons/Assignment";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { CustomEngSkillChart } from "../../components/CustomEngSkillChart/CustomEngSkillChart";
const workhistoryTimeline = () => {
  const workhistoryTimelineItem = ({ title, date, description }) => (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent>
        <Typography className="timeline_title">{title}</Typography>
        <Typography variant="caption" className="timeline_date">
          {date}
        </Typography>
        <Typography
          style={{ fontSize: "0.8rem" }}
          cariant="body2"
          paragraph={true}
          className="timeline_desc"
        >
          {description.map((val) => (
            <Box>
              <AssignmentIcon /> {val}
            </Box>
          ))}
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
        <Typography className="timeline_title">
          {title} {university}
        </Typography>
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
    <CustomTimeline title="Education" icon={<SchoolIcon />}>
      {EducationDetail.education.map((ex) => educationTimelineItem(ex))}
    </CustomTimeline>
  );
};

const ResearchTimeline = () => {
  const researchTimelineItem = ({ Projectname, Position, details, link }) => (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent>
        <Typography className="timeline_title">
          {" "}
          {link ? (
            <a
              href={link}
              target="__blank"
              style={{ color: "var(--main-font-color)" }}
            >
              {Projectname}
            </a>
          ) : (
            Projectname
          )}
        </Typography>
        <Typography variant="caption" className="timeline_date">
          {Position.split(",").map((chuck) => {
            console.log(
              chuck === " Yuthapong Khobkoon"
                ? chuck + " my name ,"
                : chuck + ","
            );
            return chuck === "Yuthapong Khobkoon" ? (
              <span style={{ fontWeight: "bold", fontSize: "50px" }}>
                {chuck}
              </span>
            ) : (
              chuck + ","
            );
          })}
        </Typography>
        <Typography cariant="body2" paragraph={true} className="timeline_desc">
          <AssignmentIcon /> {details}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
  return (
    <CustomTimeline title="Research Experiences" icon={<LibraryBooksIcon />}>
      {EducationDetail.research.map((ex) => researchTimelineItem(ex))}
    </CustomTimeline>
  );
};

const LanguageSkillTimeline = () => {
  const languageSkillTimelineItem = ({ language, desc }) => (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent>
        <Typography className="timeline_title">{language}</Typography>
        <Typography variant="caption" className="timeline_date">
          {desc}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
  return (
    <CustomTimeline title="Languages" icon={<LibraryBooksIcon />}>
      {EducationDetail.languageskill.map((ex, index) =>
        index === 0 ? (
          languageSkillTimelineItem(ex)
        ) : (
          <TimelineItem>
            <CustomTimelineSeparator />
            <TimelineContent>
              <Typography className="timeline_title">{ex.language}</Typography>
              <CustomEngSkillChart />
            </TimelineContent>
          </TimelineItem>
        )
      )}
    </CustomTimeline>
  );
};

export const EducationProfile = () => {
  return (
    <>
      <Grid container>
        <Grid lg={6} sm={12} xs={6} item>
          {workhistoryTimeline()}
        </Grid>
        <Grid lg={6} sm={12} xs={6} item>
          {ResearchTimeline()}
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={6} lg={6} sm={12} item>
          {educationTimeline()}
        </Grid>
        <Grid xs={6} lg={6} sm={12} item>
          {LanguageSkillTimeline()}
        </Grid>
      </Grid>
    </>
  );
};
