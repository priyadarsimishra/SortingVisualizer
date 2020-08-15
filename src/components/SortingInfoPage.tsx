import React, { useState } from "react";
import { NavBar } from "./NavBar";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";
import MemoryIcon from "@material-ui/icons/Memory";
import TimerIcon from "@material-ui/icons/Timer";
import "../css/pageStyling.css";
interface Props {
  sort: string;
  desc: string;
  worsttime: string;
  besttime: string;
  memory: string;
  memoryDesc: string;
  code: string;
}

const BubbleSortPage: React.FC<Props> = ({
  sort,
  desc,
  worsttime,
  besttime,
  memory,
  memoryDesc,
  code,
}) => {
  return (
    <div className="sortingpage">
      <NavBar />
      <div className="sortingpage__content">
        <Grid container spacing={0}>
          <Grid
            container
            item
            xs={6}
            spacing={0}
            className="sortingpage__leftSide"
          >
            <div className="sortingpage__leftSideContent">
              <div className="sortingpage__sortingNameContainer">
                <h1 className="sortingpage__sortingName">{sort}</h1>
              </div>

              <div className="sortingpage__sortingExplanation">{desc}</div>
              <div className="sortingpage__complexityContainer">
                <div className="sortingpage__eachComplexityContainer">
                  <h3 className="sortingpage__complexityText">
                    Time Complexity{" "}
                  </h3>
                  <TimerIcon className="sortingpage__icon blue" />
                  {": "}
                  <div className="sortingpage__cases">
                    <h2 className="sortingpage__casesText">
                      &nbsp;&nbsp;Best Case: <strong>{besttime}</strong>,
                    </h2>
                    <h2 className="sortingpage__casesText">
                      &nbsp;&nbsp;Worst Case: <strong>{worsttime}</strong>
                    </h2>
                  </div>
                </div>
                <div className="sortingpage__eachComplexityContainer">
                  <h3 className="sortingpage__complexityText">
                    Memory/Space Complexity{" "}
                  </h3>
                  <MemoryIcon className="sortingpage__icon orange" />
                  {": "}
                  <h2 className="sortingpage__casesText">
                    &nbsp;{memoryDesc}&nbsp;&nbsp;
                    <strong>{memory}</strong>
                  </h2>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            container
            item
            xs={6}
            spacing={0}
            className="sortingpage__rightSide"
          >
            <div className="sortingpage__codeContainer">
              <img src={code} className="sortingpage__codeImage" />
            </div>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
};
export default BubbleSortPage;
