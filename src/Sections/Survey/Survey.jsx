import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
// import "./anchorStyling.css";
import GlobalStyle from "../../Utils/GlobalStyle";
// import heroImage from "../../assets/kade-hero-image.png";
// import TranslationAttribution from "./TranslationAttribution";
import UserDropdown from "../../Utils/UserDropdown";
import appState from "../../GlobalState/appState";
import RadioButtons from "../../Utils/RadioButtons";
import UserTextInput from "../../Utils/UserTextInput";

const TextImage = React.lazy(() => import("./textQuestion"));

const Survey = () => {
  let showSurvey = appState.config8ShowStep5;

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Survey Settings</Title>
      {showSurvey === "true" && (
        <SurveyContainer>
          <h2 style={{ marginBottom: 50 }}>Add Survey Questions</h2>
          <UserDropdown />
          <ImageContainer>
            <p>Example:</p>
            <TextImage />
          </ImageContainer>
          <UserTextInput
            label="2. Question text:"
            stateId="surveyQuestionLabel"
            sectionName="survey"
            width={500}
            left={0}
          />
          <UserTextInput
            label="3. Question note (optional):"
            stateId="surveyQuestionNote"
            sectionName="survey"
            width={500}
            left={0}
          />
          <RadioButtons
            label="4. Answer required:"
            buttonIdArray={["true", "false"]}
            stateId="surveyAnswerRequired"
            sectionName="survey"
          />
          <RadioButtons
            label="5. Answer restricted to numbers (0-9):"
            buttonIdArray={["true", "false"]}
            stateId="surveyAnswerRestricted"
            sectionName="survey"
          />
          <RadioButtons
            label="6a. Limit answer length:"
            buttonIdArray={["true", "false"]}
            stateId="surveyAnswerLenLimited"
            sectionName="survey"
          />
          <UserTextInput
            label="6b. Answer maximum length:"
            stateId="6bsurveyAnswerLenMax"
            sectionName="survey"
            width={40}
            left={0}
          />
        </SurveyContainer>
      )}
    </MainContent>
  );
};

export default view(Survey);

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
