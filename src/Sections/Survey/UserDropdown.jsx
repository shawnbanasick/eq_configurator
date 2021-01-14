import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
// import { useTranslation } from "react-i18next";

const optionsArray = [
  "showSurveytextImage",
  "showSurveytextareaImage",
  "showSurveyradioImage",
  "showSurveyselectImage",
  "showSurveycheckboxImage",
  "showSurveyrating2Image",
  "showSurveyrating5Image",
  "showSurveyrating10Image",
  "showSurveynoteImage",
];

const clearImages = () => {
  optionsArray.forEach((item) => (appState[item] = false));
};

const handleCategoryChange = (category) => {
  clearImages();
  appState.surveyQuestionType = category;
  const key = `showSurvey${category}Image`;
  console.log(key);
  appState[key] = true;
  console.log(category);
};

const UserDropdown = () => {
  //   const { t } = useTranslation();

  return (
    <InputContainerDiv>
      <TitleSpan>1. Select question type</TitleSpan>
      <select
        name="category"
        value={appState.surveyQuestionType}
        onChange={(event) => handleCategoryChange(event.target.value)}
      >
        <option id="0">text</option>
        <option id="1">textarea</option>
        <option id="2">radio</option>
        <option id="3">select</option>
        <option id="4">checkbox</option>
        <option id="5">rating2</option>
        <option id="6">rating5</option>
        <option id="7">rating10</option>
        <option id="8">note</option>
      </select>
    </InputContainerDiv>
  );
};

export default view(UserDropdown);

const InputContainerDiv = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 70px;
  width: 800px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TitleSpan = styled.span`
  margin-right: 10px;
`;
