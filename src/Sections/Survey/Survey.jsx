import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
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
import shouldDisplayObject from "./shouldDisplayObject";
import GeneralButton from "../../Utils/GeneralButton";
import SurveyItemDndList from "./SurveyItemDndList";
import FadeIn from "./FadeIn";
import { toast } from "react-toastify";
import { ToastContainer, Slide } from "react-toastify";
import clearAddItemForm from "./clearAddItemForm";

const clone = require("rfdc/default");

const defaultArray = [
  "Text question type",
  "Answer mandatory (true/false): true",
  "Label: Age",
  "Question note: Please enter your year of birth (YYYY, eg. 1980).",
  "Limit answer length: true",
  "Answer maximum length: 4",
  `Answer restricted to numbers "0-9": true`,
];

const notifySuccess = () => {
  toast.success("Item Added", {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const notifyError = (errorMessage) => {
  toast.error(errorMessage, {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const Survey = () => {
  // let showSurvey = appState.config8ShowStep5;
  let detailsArray = appState.detailsArray || defaultArray;

  let showSurveytextImage = appState.showSurveytextImage;
  let showSurveytextareaImage = appState.showSurveytextareaImage;
  let showSurveyradioImage = appState.showSurveyradioImage;
  let showSurveyselectImage = appState.showSurveyselectImage;
  let showSurveycheckboxImage = appState.showSurveycheckboxImage;
  let showSurveyrating2Image = appState.showSurveyrating2Image;
  let showSurveyrating5Image = appState.showSurveyrating5Image;
  let showSurveyrating10Image = appState.showSurveyrating10Image;
  let showSurveyinformationImage = appState.showSurveyinformationImage;

  const surveyQuestionType = appState.surveyQuestionType;
  const displayBoolean2 = shouldDisplayObject();
  const displayBoolean = displayBoolean2[surveyQuestionType];

  const addItem = () => {
    try {
      const newItemObj = {};
      newItemObj.surveyQuestionType = surveyQuestionType;
      const newItemArray = [`Question type: ${surveyQuestionType}`];

      if (displayBoolean.required === true) {
        newItemObj.required = appState.surveyAnswerRequired;
        newItemArray.push(
          `Answer mandatory (true/false): ${appState.surveyAnswerRequired}`
        );
      }
      if (displayBoolean.label === true) {
        let questionLabel = appState.surveyQuestionLabel;
        // to prevent "missing node" error in EQ
        if (questionLabel.trim() === "") {
          throw new Error("Label is missing");
        }
        newItemObj.label = questionLabel;
        newItemArray.push(`Label: ${questionLabel}`);
      }
      if (displayBoolean.note === true) {
        let questionNote = appState.surveyQuestionNote;
        // to prevent "missing node" error in EQ
        if (questionNote.trim() === "") {
          throw new Error("Note is missing");
        }
        newItemObj.note = questionNote;
        newItemArray.push(`Question note: ${questionNote}`);
      }
      if (displayBoolean.maxlength === true) {
        newItemObj.maxlength = appState.surveyAnswerLenMax;
        newItemArray.push(`Answer max length: ${appState.surveyAnswerLenMax}`);
      }
      if (displayBoolean.restricted === true) {
        newItemObj.restricted = appState.surveyAnswerRestricted;
        newItemArray.push(
          `Answer restricted to numbers "0-9" (true/false): ${appState.surveyAnswerRestricted}`
        );
      }
      if (displayBoolean.scale === true) {
        let questionScale = appState.surveyQuestionScale;
        // to prevent "missing node" error in EQ
        if (questionScale.trim() === "") {
          throw new Error("Scale is missing");
        }
        if (questionScale.indexOf(";") === -1) {
          throw new Error("Separate scale options using a semicolon ;");
        }
        if (questionScale.includes(";;")) {
          throw new Error("Consecutive semicolons not allowed");
        }

        newItemObj.scale = questionScale;
        newItemArray.push(`Scale: ${questionScale}`);
      }
      if (displayBoolean.options === true) {
        let questionOptions = appState.surveyQuestionOptions;
        // to prevent "missing node" error in EQ
        if (questionOptions.trim() === "") {
          throw new Error("Options are missing");
        }
        if (questionOptions.indexOf(";") === -1) {
          throw new Error("Separate options using a semicolon ;");
        }
        if (questionOptions.includes(";;")) {
          throw new Error("Consecutive semicolons not allowed");
        }
        let lastChar = questionOptions.substr(questionOptions.length - 1);
        if (lastChar === ";") {
          throw new Error("No semicolon allowed at the end of options");
        }

        newItemObj.options = questionOptions;
        newItemArray.push(`Options: ${questionOptions}`);
      }
      if (displayBoolean.bg === true) {
        newItemObj.bg = appState.surveyBackgroundDisplay;
        newItemArray.push(
          `Use yellow background: ${appState.surveyBackgroundDisplay}`
        );
      }
      const val = Math.floor(1000 + Math.random() * 9000);
      newItemObj.id = `item-${val}`;
      newItemObj.content = newItemArray;
      let surveyQuestionsArray = clone(appState.surveyQuestionsArray);
      surveyQuestionsArray.push(newItemObj);
      appState.surveyQuestionsArray = surveyQuestionsArray;
      notifySuccess();
      clearAddItemForm();
    } catch (error) {
      notifyError(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <StyledToastContainer />
      <Title>Survey Question Creator</Title>
      {/* {showSurvey === "true" && ( */}
      <SurveyContainer>
        <ExampleContainer>
          <div></div>
          <div>
            <h3>Example Item:</h3>
            <ImageContainer>
              {showSurveytextImage && (
                <FadeIn delay={150} duration={450}>
                  <TextImage />
                </FadeIn>
              )}
              {showSurveytextareaImage && (
                <FadeIn delay={150} duration={450}>
                  <TextAreaImage />
                </FadeIn>
              )}
              {showSurveyradioImage && (
                <FadeIn delay={150} duration={450}>
                  <RadioImage />
                </FadeIn>
              )}
              {showSurveyselectImage && (
                <FadeIn delay={150} duration={450}>
                  <SelectImage />
                </FadeIn>
              )}
              {showSurveycheckboxImage && (
                <FadeIn delay={150} duration={450}>
                  <CheckboxImage />
                </FadeIn>
              )}
              {showSurveyrating2Image && (
                <FadeIn delay={150} duration={450}>
                  <Scale2Image />
                </FadeIn>
              )}
              {showSurveyrating5Image && (
                <FadeIn delay={150} duration={450}>
                  <Scale5Image />
                </FadeIn>
              )}
              {showSurveyrating10Image && (
                <FadeIn delay={150} duration={450}>
                  <Scale10Image />
                </FadeIn>
              )}
              {showSurveyinformationImage && (
                <FadeIn delay={150} duration={450}>
                  <InformationImage />
                </FadeIn>
              )}
            </ImageContainer>
            <p>
              <strong>Settings:</strong>
            </p>
            {detailsArray && (
              <ul>
                {detailsArray.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </ExampleContainer>
        <SettingsContainer>
          <h3 style={{ marginBottom: 5, marginTop: 5 }}>New Item Settings:</h3>
          <UserDropdown />
          {displayBoolean.required && (
            <RadioButtons
              label="Answer mandatory:"
              buttonIdArray={["true", "false"]}
              stateId="surveyAnswerRequired"
              sectionName="survey"
            />
          )}
          {displayBoolean.label && (
            <UserTextInput
              label="Label:"
              stateId="surveyQuestionLabel"
              sectionName="survey"
              width={50}
              left={0}
            />
          )}
          {displayBoolean.note && (
            <UserTextInput
              label="Question note:"
              stateId="surveyQuestionNote"
              sectionName="survey"
              width={40}
              left={0}
            />
          )}
          {displayBoolean.maxlength && (
            <RadioButtons
              label="Limit answer length:"
              buttonIdArray={["true", "false"]}
              stateId="surveyAnswerLenIsLimited"
              sectionName="survey"
            />
          )}
          {displayBoolean.maxlength && (
            <UserTextInput
              label="Answer maximum length:"
              stateId="surveyAnswerLenMax"
              sectionName="survey"
              width={5}
              left={0}
            />
          )}
          {displayBoolean.restricted && (
            <RadioButtons
              label="Answer restricted to numbers (0-9):"
              buttonIdArray={["true", "false"]}
              stateId="surveyAnswerRestricted"
              sectionName="survey"
            />
          )}
          {displayBoolean.scale && (
            <UserTextInput
              label="Scale:"
              stateId="surveyQuestionScale"
              sectionName="survey"
              width={55}
              left={0}
            />
          )}
          {displayBoolean.bg && (
            <RadioButtons
              label="Use yellow background:"
              buttonIdArray={["true", "false"]}
              stateId="surveyBackgroundDisplay"
              sectionName="survey"
            />
          )}
          {displayBoolean.options && (
            <UserTextInput
              label="Options:"
              stateId="surveyQuestionOptions"
              sectionName="survey"
              width={55}
              left={0}
            />
          )}
          <AddItemButton onClick={addItem}>Add Item</AddItemButton>
        </SettingsContainer>
        <SurveyItemDndList />
      </SurveyContainer>
      {/* )} */}
    </>
  );
};

export default view(Survey);

const Title = styled.h1`
  font-size: 35px;
  width: 70vw;
  margin-left: 10px;
`;

const SurveyContainer = styled.div`
  margin-bottom: 25px;
  padding-left: 10px;
`;

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 3px solid black;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background: var(--second-theme-color);
  margin-top: 20px;
  margin-bottom: 0px;
  padding-left: 10px;
  width: 75vw;
  max-width: 1200px;
  // height: 620px;
  transition: all 0.5s ease-in-out;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  border-top: 0px solid black;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-top: 0px;
  margin-bottom: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 5px;
  width: 75vw;
  max-width: 1200px;
  transition: all 0.5s ease-out;
`;

const AddItemButton = styled(GeneralButton)`
  margin-left: 70px; // 68vw;
  margin-top: 50px; // 68vw;
  margin-bottom: 10px; // 68vw;
  width: 150px;
`;

const ImageContainer = styled.div`
  width: clamp(300px, 74vw, 1175px);
  transition: all 0.5s ease-out;
`;

const StyledToastContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast--success {
    padding-left: 40px;
    background-color: var(--main-theme-color);
    width: 200px;
  }
`;
