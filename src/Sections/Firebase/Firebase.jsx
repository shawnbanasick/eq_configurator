import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import FirebaseTextArea from "./FirebaseTextArea";
import exportToXml from "../../Utils/exportToXml";
import GeneralButton from "../../Utils/GeneralButton";
import addFirebaseInfoToIndexHtml from "./addFirebaseInfoToIndexHtml";

const handleClick = () => {
  const data = addFirebaseInfoToIndexHtml();
  // console.log(data);
  if (data !== undefined) {
    exportToXml("index.html", data, "html");
  }
};

const FirebaseInfo = () => {
  return (
    <MainContent>
      <GlobalStyle />
      <Title>Firebase Settings</Title>
      <FirebaseTextArea />
      <GeneralButton onClick={() => handleClick()}>
        Save file to <b>Easy HTMLQ folder</b> and replace "index.html" file
      </GeneralButton>
    </MainContent>
  );
};

export default view(FirebaseInfo);

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
  max-height: calc(100vh - 3px);
  overflow: auto;
  padding-bottom: 30px;
  /* user-select: none; */
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;
