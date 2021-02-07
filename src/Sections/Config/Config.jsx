import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
// import UserSelectionSwitch from "../../Utils/UserSelectionSwitch";
import RadioButtons from "../../Utils/RadioButtons";
import UserTextInput from "../../Utils/UserTextInput";
import UserNumberInput from "../../Utils/UserNumberInput";
import Survey from "../Survey/Survey";
import generateConfigXml from "../Config/generateConfigXml";
import appState from "../../GlobalState/appState";
// import appState from "../../GlobalState/appState";

const handleClick = () => {
  const data = generateConfigXml();

  exportToXml("config.xml", data);
};

const Config = () => {
  let configUseLogInScript = appState.configUseLogInScript;
  if (configUseLogInScript === false || configUseLogInScript === "false") {
    configUseLogInScript = false;
  }
  let configShowStep5 = appState.configShowStep5;
  if (configShowStep5 === false || configShowStep5 === "false") {
    configShowStep5 = false;
  }
  console.log(configShowStep5);

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
      {/* <UserSelectionSwitch
        name="willIndicateDistinguishing"
        value="willIndicateDistinguishing"
        toggle
      /> */}
      <QuestionContainer>
        <UserTextInput
          label="1. Title of study:"
          stateId="configTitle"
          sectionName="config"
          width={40}
          left={0}
        />
        <RadioButtons
          label="2. Text align property:"
          buttonIdArray={["left", "right"]}
          stateId="configTextAlign"
          sectionName="config"
        />
        <RadioButtons
          label="3. Shuffle cards:"
          buttonIdArray={["true", "false"]}
          stateId="configshuffleCards"
          sectionName="config"
        />
        <RadioButtons
          label="4a. Project Access Code Required:"
          buttonIdArray={["true", "false"]}
          stateId="configLogInRequired"
          sectionName="config"
        />
        <UserTextInput
          label="4b. Project Access Code:"
          stateId="configLogInPassword"
          sectionName="config"
          width={30}
          left={0}
        />
        <RadioButtons
          label="5a. Use Log In Script:"
          buttonIdArray={["true", "false"]}
          stateId="configUseLogInScript"
          sectionName="config"
        />
        {configUseLogInScript && (
          <>
            <UserTextInput
              label="5b. Log In Script URL:"
              stateId="configLogInScriptURL"
              sectionName="config"
              width={40}
              left={0}
            />
            <RadioButtons
              label="5c. Request mode:"
              buttonIdArray={["post", "get"]}
              stateId="configRequestMode"
              sectionName="config"
            />
          </>
        )}

        <UserNumberInput
          label="6. Step 1 (disagree, neutral, agree initial card sorting) font size:"
          step={0.1}
          value={1.2}
          upperLimit={5.0}
          lowerLimit={0.1}
          stateId="configStep1FontSize"
          sectionName="config"
        ></UserNumberInput>

        <UserNumberInput
          label="7. Step 2 (card sorting grid) font size:"
          step={0.1}
          placeholder="input font size"
          value={1.2}
          upperLimit={5.0}
          lowerLimit={0.1}
          stateId="configStep2FontSize"
          sectionName="config"
        ></UserNumberInput>
        <RadioButtons
          label="8. Show Step 3 (card swapping grid):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep3"
          sectionName="config"
        />
        <RadioButtons
          label="9. Show Step 4 (individual card comments screen):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep4"
          sectionName="config"
        />
        <RadioButtons
          label="10. Show Step 5 (questionnaire):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep5"
          sectionName="config"
        />
        <RadioButtons
          label="11. Disable Back Button:"
          buttonIdArray={["true", "false"]}
          stateId="configDisableBackButton"
          sectionName="config"
        />
      </QuestionContainer>
      {configShowStep5 && <Survey />}
      <GeneralButton style={{ width: "78vw" }} onClick={() => handleClick()}>
        Download Config.xml file
      </GeneralButton>
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
  max-height: calc(100vh - 23px);
  padding-left: 50px;
  padding-right: 50px;
  overflow: auto;
  user-select: none;
  /* border: 2px solid red; */
`;

const IntroText = styled.span`
  font-size: 2vw;
  align-self: center;
  width: 70vw;
  padding: 15px;
  /* border: 2px solid red; */
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 78vw;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
`;

const QuestionContainer = styled.div`
  margin-bottom: 25px;
  width: 78vw;
  /* border: 2px solid purple; */
`;

const Title2 = styled.h1`
  /* display: grid; */
  /* grid-area: row1; */
  font-size: 35px;
  width: 70vw;
  /* align-items: center; */
  /* justify-content: center; */
`;
