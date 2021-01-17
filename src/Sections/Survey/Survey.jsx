import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import UserDropdown from "./UserDropdown";
import appState from "../../GlobalState/appState";
import RadioButtons from "../../Utils/RadioButtons";
import UserTextInput from "../../Utils/UserTextInput";

import TextImage from "./textQuestion";
import TextAreaImage from "./textAreaQuestion";
import RadioImage from "./radioQuestion";
import Scale2Image from "./scale2Question";
import Scale5Image from "./scale5Question";
import Scale10Image from "./scale10Question";
import CheckboxImage from "./checkboxQuestion";
import SelectImage from "./selectQuestion";
import InformationImage from "./informationQuestion";

const defaultArray = [
  "label: Age",
  "note: Please enter your year of birth (YYYY, eg. 1980).",
  "required: true",
  "maxlength: 4",
  `restricted: "0-9"`,
];

const Survey = () => {
  let showSurvey = appState.config8ShowStep5;
  console.log("show survey", showSurvey);
  // console.log(appState.showSurveytextareaImage);

  let detailsArray = appState.detailsArray || defaultArray;

  //   const test = "true";
  let showSurveytextImage = appState.showSurveytextImage;
  let showSurveytextareaImage = appState.showSurveytextareaImage;
  let showSurveyradioImage = appState.showSurveyradioImage;
  let showSurveyselectImage = appState.showSurveyselectImage;
  let showSurveycheckboxImage = appState.showSurveycheckboxImage;
  let showSurveyrating2Image = appState.showSurveyrating2Image;
  let showSurveyrating5Image = appState.showSurveyrating5Image;
  let showSurveyrating10Image = appState.showSurveyrating10Image;
  let showSurveyinformationImage = appState.showSurveyinformationImage;

  // let detailsArray = ["sdfskf", "sdfs", "sdfdsf"];
  console.log(detailsArray);

  // for development only
  showSurvey = true;

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Question Generator</Title>
      {/* {showSurvey === "true" && ( */}
      <SurveyContainer>
        <ImageContainer>
          <p>Example:</p>
          {showSurveytextImage && <TextImage />}
          {showSurveytextareaImage && <TextAreaImage />}
          {showSurveyradioImage && <RadioImage />}
          {showSurveyselectImage && <SelectImage />}
          {showSurveycheckboxImage && <CheckboxImage />}
          {showSurveyrating2Image && <Scale2Image />}
          {showSurveyrating5Image && <Scale5Image />}
          {showSurveyrating10Image && <Scale10Image />}
          {showSurveyinformationImage && <InformationImage />}
          {detailsArray && (
            <ul>
              {detailsArray.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </ImageContainer>
        <h2 style={{ marginBottom: 10, marginTop: 50 }}>Add Question</h2>
        <UserDropdown />
        <RadioButtons
          label="Answer required:"
          buttonIdArray={["true", "false"]}
          stateId="surveyAnswerRequired"
          sectionName="survey"
        />
        <UserTextInput
          label="Label:"
          stateId="surveyQuestionLabel"
          sectionName="survey"
          width={50}
          left={0}
        />
        <UserTextInput
          label="Question note (optional):"
          stateId="surveyQuestionNote"
          sectionName="survey"
          width={40}
          left={0}
        />
        <RadioButtons
          label="Answer restricted to numbers (0-9):"
          buttonIdArray={["true", "false"]}
          stateId="surveyAnswerRestricted"
          sectionName="survey"
        />
        <RadioButtons
          label="Limit answer length:"
          buttonIdArray={["true", "false"]}
          stateId="surveyAnswerLenLimited"
          sectionName="survey"
        />
        <UserTextInput
          label="Answer maximum length:"
          stateId="6bsurveyAnswerLenMax"
          sectionName="survey"
          width={40}
          left={0}
        />
      </SurveyContainer>
      {/* )} */}
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
  width: 100%; // calc(100vw - 160px);
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
  width: 70vw;
  align-items: center;
  justify-content: center;
`;

const SurveyContainer = styled.div`
  margin-bottom: 25px;
  width: 80vw;
  /* border: 2px solid green; */
`;

const ImageContainer = styled.div`
  border: 3px solid black;
  background: #eaeaff;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 10px;
  width: 100%;
  height: 400px;
  transition: opacity 3s ease-in-out;
`;