import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import UserSelectionSwitch from "../../Utils/UserSelectionSwitch";
import RadioButtons from "../../Utils/RadioButtons";
import UserTextInput from "../../Utils/UserTextInput";
import Survey from "../Survey/Survey";
import generateConfigXml from "../Config/generateConfigXml";

// import appState from "../../GlobalState/appState";

const handleClick = () => {
  const data = generateConfigXml();

  exportToXml("config.xml", data);
};

// const localStore = store({
//   includeSurvey: Boolean(appState.config8ShowStep5),
// });

const Config = () => {
  return (
    <MainContent>
      <GlobalStyle />
      <Title>Config.xml</Title>
      <h3>Options</h3>
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
          width={50}
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
          label="4a. Log In Required:"
          buttonIdArray={["true", "false"]}
          stateId="configLogInRequired"
          sectionName="config"
        />
        <UserTextInput
          label="4b. Log In Password:"
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
        <RadioButtons
          label="6. Show Step 3 (card swapping grid):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep3"
          sectionName="config"
        />
        <RadioButtons
          label="7. Show Step 4 (individual card comments screen):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep4"
          sectionName="config"
        />
        <RadioButtons
          label="8. Show Step 5 (post-sort questionnaire survey):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep5"
          sectionName="config"
        />
        <RadioButtons
          label="9. Disable Back Button:"
          buttonIdArray={["true", "false"]}
          stateId="configDisableBackButton"
          sectionName="config"
        />
      </QuestionContainer>
      <Survey />
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
  /* grid-template-columns: 1fr;
  grid-template-rows: 150px 130px 20px 350px 200px 1fr;
  grid-template-areas:
    "title"
    "options"
    "row3"
    "row4"
    "row5"
    "row6"; */
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

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;

const QuestionContainer = styled.div`
  margin-bottom: 25px;
  width: calc(100vw - 215px);
  /* border: 2px solid purple; */
`;
