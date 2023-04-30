import React from "react";
import ReqList from "./components/ReqList";
import Panel from "./components/Panel";

const Devtools = () => {
  // if (chrome.devtools.panels.themeName === "dark") {
  //   const panel = document.getElementById("panel");
  //   panel.classList.add("panel-dark");
  // }

  return (
    <div className="content">
      <Panel />
      <ReqList />
    </div>
  );
};

export default Devtools;
