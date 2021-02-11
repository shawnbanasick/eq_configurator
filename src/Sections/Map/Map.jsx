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

  exportToXml("map.xml", data);
};

const Map = () => {
  const numStatements = appState.statements.length;

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Map Settings</Title>
      <h2>{numStatements} Statements</h2>
      <MapInputElement />
      <DownloadMapButton onClick={() => handleClick()}>
        Save file to <b>settings folder</b> and replace "map.xml" file
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

const DownloadMapButton = styled(GeneralButton)`
  width: auto;
  /* border: 2px solid red; */
`;
