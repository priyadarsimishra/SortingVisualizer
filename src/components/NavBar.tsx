import React from "react";
import "../css/NavBar.css";

interface Props {}

export const NavBar: React.FC<Props> = () => {
  return (
    <div className="navbar">
      <div className="navbar__leftContainer">
        <h1 className="navbar__mainHeaderText">Sorting Visualizer</h1>
      </div>
      <div className="navbar__rightContainer">
        {/* CHANGE LATER TO LINKS(GET REACT ROUTER) */}
        <h3 className="navbar__link">Bubble Sort</h3>
        <h3 className="navbar__link">Selection Sort</h3>
        <h3 className="navbar__link">Insertion Sort</h3>
        <h3 className="navbar__link">Merge Sort</h3>
        <h3 className="navbar__link">Quick Sort</h3>
      </div>
    </div>
  );
};
