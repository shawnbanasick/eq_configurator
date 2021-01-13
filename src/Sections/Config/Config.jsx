import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import UserSelectionSwitch from "../../Utils/UserSelectionSwitch";
import RadioButtons from "../../Utils/RadioButtons";
import UserTextInput from "../../Utils/UserTextInput";
import appState from "../../GlobalState/appState";

const handleClick = () => {
  const data = `
    <config version="1.0" htmlParse="false">

      <!-- title of the study -->
      <item id="studyTitle">Name of your study</item>

      <!-- text-align property(left|right) -->
      <item id="textAlign">left</item>

      <item id="日本語">left</item>

    </config>
      `;

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
      <UserSelectionSwitch
        name="willIndicateDistinguishing"
        value="willIndicateDistinguishing"
        toggle
      />
      <QuestionContainer>
        <UserTextInput
          label="1. Title of study:"
          stateId="1title"
          sectionName="config"
          width={500}
          left={0}
        />
        <RadioButtons
          label="2. Text align property:"
          buttonIdArray={["left", "right"]}
          stateId="2textAlign"
          sectionName="config"
        />
        <RadioButtons
          label="3. Shuffle cards:"
          buttonIdArray={["true", "false"]}
          stateId="3shuffleCards"
          sectionName="config"
        />
        <RadioButtons
          label="4a. Log In Required:"
          buttonIdArray={["true", "false"]}
          stateId="4aLogInRequired"
          sectionName="config"
        />
        <UserTextInput
          label="4b. Log In Password:"
          stateId="4bLogInPassword"
          sectionName="config"
          width={300}
          left={0}
        />
        <RadioButtons
          label="5a. Use Log In Script:"
          buttonIdArray={["true", "false"]}
          stateId="5aUseLogInScript"
          sectionName="config"
        />
        <UserTextInput
          label="5b. Log In Script URL:"
          stateId="5bLogInScriptURL"
          sectionName="config"
          width={500}
          left={0}
        />
        <RadioButtons
          label="5c. Request mode:"
          buttonIdArray={["post", "get"]}
          stateId="5cRequestMode"
          sectionName="config"
        />
        <RadioButtons
          label="6. Show Step 3 (card swapping grid):"
          buttonIdArray={["true", "false"]}
          stateId="6ShowStep3"
          sectionName="config"
        />
        <RadioButtons
          label="7. Show Step 4 (individual card comments screen):"
          buttonIdArray={["true", "false"]}
          stateId="7ShowStep4"
          sectionName="config"
        />
        <RadioButtons
          label="8. Show Step 5 (post-sort questionnaire survey):"
          buttonIdArray={["true", "false"]}
          stateId="8ShowStep5"
          sectionName="config"
        />
        <RadioButtons
          label="9. Disable Back Button:"
          buttonIdArray={["true", "false"]}
          stateId="9DisableBackButton"
          sectionName="config"
        />
      </QuestionContainer>

      <GeneralButton onClick={() => handleClick()}>
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
  border: 2px solid red;
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
  border: 2px solid purple;
`;

const SurveyContainer = styled.div`
  margin-bottom: 25px;
  border: 2px solid green;
`;

const ImageContainer = styled.div`
  border: 3px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 10px;
`;
