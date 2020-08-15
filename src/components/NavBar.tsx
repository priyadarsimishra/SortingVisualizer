import React from "react";
import "../css/NavBar.css";
import { Link, Redirect, useHistory } from "react-router-dom";

interface Props {
  pressable: Boolean;
}

export const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__leftContainer">
        <Link className="link" to="/">
          <h1 className="navbar__mainHeaderText">Sorting Visualizer</h1>
        </Link>
      </div>
      <div className="navbar__rightContainer">
        <h3 className="navbar__learnMore">Learn About:</h3>
        <Link className="link" to={"/bubbleSort"}>
          <h3 className="navbar__link">Bubble Sort</h3>
        </Link>
        <Link className="link" to={"/selectionSort"}>
          <h3 className="navbar__link">Selection Sort</h3>
        </Link>
        <Link className="link" to={"/mergeSort"}>
          <h3 className="navbar__link">Merge Sort</h3>
        </Link>
        <Link className="link" to={"/quickSort"}>
          <h3 className="navbar__link">Quick Sort</h3>
        </Link>
      </div>
    </div>
  );
};
