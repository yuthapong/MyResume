import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Doughnut, defaults, HorizontalBar } from "react-chartjs-2";
import Chart from "chart.js";
// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function () {
    originalDoughnutDraw.apply(this, arguments);

    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 114).toFixed(2);
    ctx.fillStyle = "#b9bab0";
    ctx.font = fontSize + "em Calibri";
    ctx.textBaseline = "middle";

    var text = chart.config.data.text,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
  },
});

const OverallData = {
  labels: ["Overall Score", ""],
  datasets: [
    {
      data: [6.0, 4.0],
      backgroundColor: ["rgba(54, 162, 235,0.6)", "rgba(255,255,255,0)"],
      hoverBackgroundColor: ["rgba(54, 162, 235,0.6)", "rgba(255,255,255,0)"],
      borderWidth: [2, 0],
      borderColor: "white",
    },
  ],
  text: "6.0/10",
};

const barData = {
  labels: ["Listening", "Reading", "Writing", "Speaking"],
  datasets: [
    {
      label: "Score",
      data: [7.0, 6.0, 5, 5.5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.4)",
        "rgba(54, 162, 235, 0.4)",
        "rgba(75, 192, 192, 0.4)",
        "rgba(255, 206, 86, 0.4)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 0,
    },
  ],
};

const barOptions = {
  scales: {
    gridLines: {
      display: false,
      color: "#FFFFFF",
    },
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          max: 10,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: "#b9bab0",
        },
      },
    ],
  },
  legend: { display: false },
};

export const CustomEngSkillChart = () => {
  console.table(defaults);
  return (
    <div>
      <div>
        <Typography variant="caption">
          International English Language Testing System (IELTS)
        </Typography>
      </div>
      <Typography style={{ alignSelf: "center" }} variant="overline">
        Overall Score:
      </Typography>
      <Grid alignItems="center" justify="center" container>
        <Grid xs={6} direction="row" item>
          <Doughnut
            data={OverallData}
            options={{
              rotation: -29.84,
              legend: { display: false },
              tooltips: { enabled: false },
            }}
          />
        </Grid>
        <Grid xs={6} item>
          <HorizontalBar data={barData} options={barOptions} />
        </Grid>
      </Grid>
    </div>
  );
};
