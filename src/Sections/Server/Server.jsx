import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;

// const fs = electron.remote.require("fs");

const handleClick = () => {
  console.log("clicked");

  ipcRenderer.sendSync("get-file-path", "filepath");
  // const data = generateConfigXml();

  // exportToXml("config.xml", data);
};

const Server = () => {
  return (
    <MainContent>
      <GlobalStyle />
      <Title>Server Settings</Title>
      <GeneralButton style={{ width: "78vw" }} onClick={() => handleClick()}>
        Navigate to HTMLQ base files &nbsp;&nbsp; &gt;&gt;&gt; &nbsp;&nbsp;
        index.html
      </GeneralButton>
    </MainContent>
  );
};

export default view(Server);

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
