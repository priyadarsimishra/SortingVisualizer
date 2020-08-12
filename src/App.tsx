import React, { useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import { NavBar } from "./components/NavBar";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Sorting Visualizer";
  }, []);
  return (
    <div className="app">
      <NavBar />
      <h1>Welcome to Sorting Visualizer</h1>
    </div>
  );
};

export default App;
