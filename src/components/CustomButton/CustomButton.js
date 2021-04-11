import { Button } from "@material-ui/core";
import React from "react";
import './Custombotton.css'
export const CustomButton = ({ text, icon }) => {
  return (
    <Button
      className="custom_btn_container"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    ><span className='btn_text'>{text}</span></Button>
  );
};
