import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import RadioButtons from "../../Utils/RadioButtons";
import UserTextInput from "../../Utils/UserTextInput";
import Survey from "../Survey/Survey";
import generateConfigXml from "../Config/generateConfigXml";
import appState from "../../GlobalState/appState";
import FadeIn from "./FadeIn";

const handleClick = () => {
  const data = generateConfigXml();

  exportToXml("config.xml", data, "xml");
};

const convertToFalse = (value) => {
  if (value === false || value === "false") {
    return false;
  } else {
    return true;
  }
};

const Config = () => {
  let configUseLogInScript = convertToFalse(appState.configUseLogInScript);
  let configLogInRequired = convertToFalse(appState.configLogInRequired);
  let configShowStep5 = convertToFalse(appState.configShowStep5);

  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Config.xml</Title>
      <IntroText>
        This file has two sections. The first part sets up the overall structure
        of your project. The second section is a question generator for the
        (optional) post-Q sort questionnaire.
      </IntroText>
      <Title2>Project Options</Title2>
      <QuestionContainer>
        <UserTextInput
          label="1. Project title:"
          stateId="configTitle"
          sectionName="config"
          width={30}
          left={0}
        />
        <UserTextInput
          label="2. Project version:"
          stateId="configVersion"
          sectionName="config"
          width={5}
          left={0}
        />
        <RadioButtons
          label="3. Text align property:"
          buttonIdArray={["left", "right"]}
          stateId="configTextAlign"
          sectionName="config"
        />

        <RadioButtons
          label="4. Shuffle cards:"
          buttonIdArray={["true", "false"]}
          stateId="configshuffleCards"
          sectionName="config"
        />

        {displayMode && (
          <DisplayModeText>
            The project access code is the same for all participants. The code
            can be a phrase instead of just a single word, and is
            case-sensitive. The use of an access code increases the security of
            the project and is recommended.
          </DisplayModeText>
        )}

        <RadioButtons
          label="5a. Project Access Code Required:"
          buttonIdArray={["true", "false"]}
          stateId="configLogInRequired"
          sectionName="config"
        />
        {configLogInRequired && (
          <LeftSpacer>
            <UserTextInput
              label="5b. Project Access Code:"
              stateId="configLogInPassword"
              sectionName="config"
              width={30}
              left={0}
            />
            <RadioButtons
              label="5c. Require participant name or id number:"
              buttonIdArray={["true", "false"]}
              stateId="configPartNameRequired"
              sectionName="config"
            />
          </LeftSpacer>
        )}
        {displayMode && (
          <DisplayModeText>
            The Log In Script is a legacy option from FlashQ. It allows the use
            of a custom software to log participants into the project from
            outside the Easy HTMLQ software.
          </DisplayModeText>
        )}

        <RadioButtons
          label="6a. Use Log In Script:"
          buttonIdArray={["true", "false"]}
          stateId="configUseLogInScript"
          sectionName="config"
        />
        {configUseLogInScript && (
          <LeftSpacer>
            <UserTextInput
              label="6b. Log In Script URL:"
              stateId="configLogInScriptURL"
              sectionName="config"
              width={40}
              left={0}
            />
            <RadioButtons
              label="6c. Request mode:"
              buttonIdArray={["post", "get"]}
              stateId="configRequestMode"
              sectionName="config"
            />
          </LeftSpacer>
        )}

        <RadioButtons
          label="7. Show Step 3 (card swapping grid):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep3"
          sectionName="config"
        />
        <RadioButtons
          label="8. Show Step 4 (individual card comments screen):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep4"
          sectionName="config"
        />
        <RadioButtons
          label="9. Show Step 5 (questionnaire):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep5"
          sectionName="config"
        />
        <RadioButtons
          label="10. Disable Back Button:"
          buttonIdArray={["true", "false"]}
          stateId="configDisableBackButton"
          sectionName="config"
        />
      </QuestionContainer>
      {configShowStep5 && (
        <FadeIn delay={150} duration={1050}>
          <Survey />
        </FadeIn>
      )}
      <DownloadConfigButton onClick={() => handleClick()}>
        Save file to <b>SETTINGS</b> folder and replace the "config.xml" file
      </DownloadConfigButton>
    </MainContent>
  );
};

export default view(Config);

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
  user-select: none;
`;

const IntroText = styled.span`
  align-self: center;
  padding: 15px;
  width: 70vw;
  font-size: 2vw;
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 78vw;
  align-items: center;
  justify-content: center;
`;

const QuestionContainer = styled.div`
  margin-bottom: 25px;
  width: 78vw;
`;

const Title2 = styled.h1`
  font-size: 35px;
  width: 70vw;
`;

const DownloadConfigButton = styled(GeneralButton)`
  width: 800px;
  align-self: center;
  margin-bottom: 100px;
`;

const LeftSpacer = styled.div`
  margin-left: 30px;
`;

const DisplayModeText = styled.div`
  align-self: center;
  margin-top: 40px;
  width: 900px;
  font-size: 20px;
  padding: 0 10px 0 10px;
  border: 2px solid black;
`;
