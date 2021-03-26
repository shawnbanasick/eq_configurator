import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";

const setMode = (event) => {
  if (event.target.id === "pro") {
    appState.displayMode = "pro";
  } else {
    appState.displayMode = "beginner";
  }
};

const setTarget = (event) => {
  if (event.target.id === "htmlq") {
    appState.configurationTarget = "easyHtmlq";
  } else {
    appState.configurationTarget = "mobile";
  }
};

const Start = () => {
  let showDescriptionPro;
  let showDescriptionBeginner;
  let showDescriptionHtmlq;
  let showDescriptionMobile;
  const displayMode = appState.displayMode;
  const configurationTarget = appState.configurationTarget;

  if (displayMode === "pro") {
    appState.beginnerButtonActive = false;
    appState.proButtonActive = true;
    showDescriptionPro = true;
    showDescriptionBeginner = false;
  } else {
    appState.beginnerButtonActive = true;
    appState.proButtonActive = false;
    showDescriptionPro = false;
    showDescriptionBeginner = true;
  }

  if (configurationTarget === "easyHtmlq") {
    appState.htmlqButtonActive = true;
    appState.mobileButtonActive = false;
    showDescriptionHtmlq = true;
    showDescriptionMobile = false;
    appState.langPartIdText = "Your name or survey id number";
  } else {
    appState.langPartIdText = "Participant name or survey id number";
    appState.htmlqButtonActive = false;
    appState.mobileButtonActive = true;
    showDescriptionHtmlq = false;
    showDescriptionMobile = true;
  }

  const version = appState.appVersion;

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Easy HTMLQ Configurator</Title>
      <CustomH3>version {version}</CustomH3>
      <IntroText>
        Easy HTMLQ Configurator simplifies the set-up and testing of an online Q
        sort project. It provides guided editing of the HTMLQ configuration
        files and offers increased control over the appearance of the Q-sort. It
        also includes a local web server to immediately test the setup on any
        installed web browser.
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
      <DescriptionDiv>
        {showDescriptionPro && <IntroText>just the essentials</IntroText>}
        {showDescriptionBeginner && (
          <IntroText>in-depth descriptions and directions</IntroText>
        )}
      </DescriptionDiv>
      <SpacerDiv />
      <CustomH2>Select Configuration Target:</CustomH2>
      <ButtonContainer>
        <HtmlqButton
          id="htmlq"
          isActive={appState.htmlqButtonActive}
          onClick={setTarget}
        >
          Easy HTMLQ
        </HtmlqButton>
        <MobileButton
          id="mobile"
          isActive={appState.mobileButtonActive}
          onClick={setTarget}
        >
          EQ Mobile
        </MobileButton>
      </ButtonContainer>
      <DescriptionDiv>
        {showDescriptionMobile && (
          <div>
            <IntroText>
              mobile offline Q sorts on an iPad or laptop computer:
            </IntroText>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shawnbanasick/eq-mobile"
            >
              Download Page
            </a>
          </div>
        )}
        {showDescriptionHtmlq && (
          <div>
            <IntroText>online Q sorts:</IntroText>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shawnbanasick/easy-htmlq"
            >
              Download Page
            </a>
          </div>
        )}
      </DescriptionDiv>
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
  width: calc(100vw - 137px);
  box-sizing: border-box;
  min-height: calc(100vh - 3px);
  overflow: auto;
  user-select: none;
  /* border: 2px solid green; */

  a {
    padding-bottom: 1px;
    text-decoration: none;
    color: #000;
    box-shadow: inset 0 -4px 0 var(--second-theme-color);
    transition: background-color 0.25s ease-out;
    margin-left: 5px;
    font-size: 2vw;
  }

  a:hover {
    background-color: var(--second-theme-color);
    padding-top: 2px;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  align-self: center;
  text-align: center;
  font-size: 5vw;
  width: 70vw;
`;

const BeginnerButton = styled(GeneralButton)`
  box-sizing: border-box;
  text-align: center;
  vertical-align: center;
  height: 50px;
  width: 170px;
  font-size: 20px;
  font-weight: bold;
`;

const ProButton = styled(GeneralButton)`
  box-sizing: border-box;
  text-align: center;
  vertical-align: center;
  height: 50px;
  width: 170px;
  font-weight: bold;
  font-size: 20px;
`;

const HtmlqButton = styled(GeneralButton)`
  box-sizing: border-box;
  text-align: center;
  vertical-align: center;
  height: 50px;
  width: 170px;
  font-size: 20px;
  font-weight: bold;
`;

const MobileButton = styled(GeneralButton)`
  box-sizing: border-box;
  text-align: center;
  vertical-align: center;
  height: 50px;
  width: 170px;
  font-weight: bold;
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  /* align-self: center; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  width: 100%;
  /* max-width: 1200px; */
  margin-top: 0px;
`;

const IntroText = styled.span`
  /* font-size: 22px; */
  align-self: center;
  padding: 10px;
  width: 70vw;
  font-size: 2vw;
  margin-bottom: 20px;
`;

const CustomH2 = styled.span`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin-bottom: 10px;
`;

const DescriptionDiv = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const SpacerDiv = styled.div`
  width: 20px;
  height: 50px;
`;

const CustomH3 = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
