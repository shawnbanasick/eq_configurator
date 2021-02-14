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

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Config.xml</Title>
      <IntroText>
        This file has two parts. The first part sets up the overall structure of
        your project. The second part is a question generator for the (optional)
        post-Q sort questionnaire.
      </IntroText>
      <Title2>Project Options</Title2>
      <QuestionContainer>
        <UserTextInput
          label="1. Project title:"
          stateId="configTitle"
          sectionName="config"
          width={40}
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
        Save file to <b>settings folder</b> and replace "config.xml" file
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
  justify-items: left;
  align-items: left;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  width: calc(100vw - 140px);
  box-sizing: border-box;
  max-height: calc(100vh - 3px);
  padding-left: 25px;
  padding-right: 50px;
  overflow: auto;
`;

const IntroText = styled.span`
  font-size: 20px;
  align-self: center;
  width: 70vw;
  padding: 15px;
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
