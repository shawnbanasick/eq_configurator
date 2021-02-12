import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";

const setMode = (event) => {
  console.log(event.target.id);
  if (event.target.id === "pro") {
    appState.displayMode = "pro";
  } else {
    appState.displayMode = "beginner";
  }
};

const Start = () => {
  const displayMode = appState.displayMode;
  if (displayMode === "pro") {
    appState.beginnerButtonActive = false;
    appState.proButtonActive = true;
  } else {
    appState.beginnerButtonActive = true;
    appState.proButtonActive = false;
  }

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
      <CustomH2>Select Configurator Display Mode:</CustomH2>
      <ButtonContainer>
        <BeginnerButton
          id="beginner"
          isActive={appState.beginnerButtonActive}
          onClick={setMode}
        >
          Novice
        </BeginnerButton>
        <ProButton
          id="pro"
          isActive={appState.proButtonActive}
          onClick={setMode}
        >
          Expert
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
  text-align: center;
  padding-top: 50px;
  height: 100px;
  width: 200px;
  font-size: 2em;
`;

const ProButton = styled(GeneralButton)`
  text-align: center;
  padding-top: 50px;
  height: 100px;
  width: 200px;
  font-size: 2em;
`;

const ButtonContainer = styled.div`
  /* align-self: center; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  /* border: 2px solid red; */
  /* max-width: 1200px; */
  margin-top: 10px;
`;

const IntroText = styled.span`
  font-size: 2vw;
  align-self: center;
  width: 70vw;
  padding: 30px;
  /* padding-bottom: 0px; */
  /* border: 2px solid red; */
`;

const CustomH2 = styled.h2`
  text-align: center;
`;
