import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
// import "./anchorStyling.css";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";

const setMode = (event) => {
  if (event.target.value === "pro") {
    appState.beginnerDisplayMode = false;
  } else {
    appState.beginnerDisplayMode = true;
  }
};

const Start = () => {
  return (
    <MainContent>
      <GlobalStyle />
      <Title>Easy HTMLQ Configurator</Title>
      <IntroText>
        Easy HTMLQ Configurator reduces the effort needed to set-up and test an
        online Q sort.　Anyone can do it. You don't need any special programming
        skills. If you can copy / paste / point / click - you can easily and
        quickly setup a basic online Q sort for your project. It creates a
        simple way to edit files, and immediately see those changes in a web
        broswer.
      </IntroText>
      <ButtonContainer>
        <BeginnerButton value="beginner" onClick={setMode}>
          Beginner Mode
        </BeginnerButton>{" "}
        <ProButton value="pro" onClick={setMode}>
          Pro
          <br />
          Mode
        </ProButton>
      </ButtonContainer>
    </MainContent>
  );
};

export default view(Start);

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
  justify-content: center;
  flex-direction: column;
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
  /* border: 2px solid green; */
`;

const Title = styled.h1`
  align-self: center;
  text-align: center;
  font-size: 5vw;
  /* border: 2px solid red; */
  width: 80vw;
`;

const BeginnerButton = styled(GeneralButton)`
  height: 150px;
  width: 200px;
  font-size: 2em;
`;

const ProButton = styled(GeneralButton)`
  height: 150px;
  width: 200px;
  font-size: 2em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* border: 2px solid red; */
  margin-top: 50px;
`;

const IntroText = styled.span`
  font-size: 2vw;
  align-self: center;
  width: 70vw;
  padding: 30px;
  /* border: 2px solid red; */
`;
