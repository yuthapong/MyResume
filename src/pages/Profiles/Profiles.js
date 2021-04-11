import "./Profiles.css";

import { Typography } from "@material-ui/core";
import { PersonOutlineOutlined, GetApp } from "@material-ui/icons/";
import { TimelineContent } from "@material-ui/lab";
import TimelineItem from "@material-ui/lab/TimelineItem";
import React from "react";

import ProfileDetails from "../../utils/profile_details";
import {
  CustomTimeline,
  CustomTimelineSeparator,
} from "../../components/CustomTimeline/CustomTimeline";
import {CustomButton} from "../../components/CustomButton/CustomButton";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator></CustomTimelineSeparator>
    <TimelineContent className="timelinecontent">
      {link ? (
        <Typography className="timelinetext">
          <span>{title}: </span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelinetext">
          <span>{title}</span>: {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);


const Profiles = () => {
  Object.keys(ProfileDetails).map((eachkey) =>
    console.info(eachkey, ProfileDetails[eachkey])
  );

  return (
    <div className="profile">
      <div className="profile_name">
        <Typography className="Name">Yuthapong Khobkoon </Typography>
        <Typography className="Title">Project Manager</Typography>
      </div>

      <figure className="profile_img">
        <img
          src={process.env.PUBLIC_URL + "profileimg.jpg"}
          alt="something went worng"
        />
      </figure>

      <div className="profile_information">
        <CustomTimeline title="" icon={<PersonOutlineOutlined />}>
          {Object.keys(ProfileDetails).map((eachkey) => (
            <CustomTimelineItem
              title={eachkey}
              text={ProfileDetails[eachkey]}
            />
          ))}
        </CustomTimeline>
        <div className="btn_container">
          <CustomButton icon={<GetApp />} text="Download CV" />
        </div>
      </div>
    </div>
  );
};

export default Profiles;
