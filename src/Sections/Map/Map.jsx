import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
// import "./anchorStyling.css";
import GlobalStyle from "../../Utils/GlobalStyle";
// import heroImage from "../../assets/kade-hero-image.png";
// import TranslationAttribution from "./TranslationAttribution";
import MapInputElement from "./MapInputElement";
// import exportToXml from "../../Utils/exportToXml";
import generateMapXml from "./generateMapXml";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
// const fs = require("fs");
// const path = require("path");
// const { app } = require("electron");
const { ipcRenderer } = require("electron");

ipcRenderer.on("map-xml-data-saved", (event, arg) => {
  console.log(arg);
  // console.log(event);
  // console.log(event.response);
  appState.viewStart = false;
  appState.viewMap = true;
  appState.activeWindow = "viewMap";
});

const handleClick = () => {
  // const filePath = path.join(__dirname, "map.xml");
  // console.log(filePath);
  // // console.log(app.getPath("home"));
  const data = generateMapXml();

  ipcRenderer.send("map-xml-data", data);

  // fs.writeFile(filePath, data, (err) => {
  //   if (err === undefined || err === null) {
  //     console.log("success");
  //   } else {
  //     console.log(err);
  //   }
  // });

  // exportToXml("map.xml", data);
};

const Map = () => {
  return (
    <MainContent>
      <GlobalStyle />
      <Title>Map Settings</Title>
      <MapInputElement />
      <GeneralButton style={{ width: "78vw" }} onClick={() => handleClick()}>
        Download Map.xml file
      </GeneralButton>
    </MainContent>
  );
};

export default view(Map);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const MainContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  justify-items: center;
  align-items: center;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  width: calc(100vw - 140px);
  box-sizing: border-box;
  max-height: calc(100vh - 23px);
  overflow: auto;
  user-select: none;
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;
