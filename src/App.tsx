import React, { useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import { NavBar } from "./components/NavBar";
import { VisualDisplay } from "./components/VisualDisplay";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Sorting Visualizer";
  }, []);
  return (
    <div className="app">
      <NavBar />
      <VisualDisplay />
    </div>
  );
};

export default App;
