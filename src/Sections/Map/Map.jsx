import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import MapInputElement from "./MapInputElement";
import exportToXml from "../../Utils/exportToXml";
import generateMapXml from "./generateMapXml";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";

const handleClick = () => {
  const userSelectedFilePath = `${appState.userSelectedFilePath}/settings/map.xml`;
  console.log(userSelectedFilePath);
  const data = generateMapXml();

  exportToXml("map.xml", data, "xml");
};

const Map = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  const numStatements = appState.statements.length;

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Q sort Grid Settings</Title>
      <h2>{numStatements} Statements</h2>
      {displayMode && (
        <DisplayModeText>
          Make sure to enter your statements first. Then, enter the number of
          cards in each column here. The background color of the "Q Sort
          Pattern" text will change to green when all of the statements have
          been allocated.
        </DisplayModeText>
      )}
      <MapInputElement />
      <DownloadMapButton onClick={() => handleClick()}>
        Save file to <b>SETTINGS</b> folder and replace the "map.xml" file
      </DownloadMapButton>
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
  width: calc(100vw - 137px);
  box-sizing: border-box;
  min-height: calc(100vh - 3px);
  overflow: auto;
  user-select: none;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 600px;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
`;

const DownloadMapButton = styled(GeneralButton)`
  width: 600px;
  /* border: 2px solid red; */
`;

const DisplayModeText = styled.div`
  align-self: center;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 98%;

  font-size: 20px;
  padding: 0 10px 0 10px;
  border: 2px solid black;
`;
