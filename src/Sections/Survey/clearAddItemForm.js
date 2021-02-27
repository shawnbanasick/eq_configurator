import appState from "../../GlobalState/appState";

const clearAddItemForm = () => {
  appState.surveyAnswerRequired = false;
  appState.surveyAnswerRequiredtrueActive = false;
  appState.surveyAnswerRequiredfalseActive = true;
  appState.surveyQuestionLabel = "";
  appState.surveyQuestionNote = "";
  appState.surveyAnswerLenIsLimited = undefined;
  appState.surveyAnswerLenIsLimitedtrueActive = false;
  appState.surveyAnswerLenIsLimitedfalseActive = false;
  appState.surveyAnswerLenMax = undefined;
  appState.surveyAnswerLenMaxtrueActive = false;
  appState.surveyAnswerLenMaxfalseActive = false;
  appState.surveyAnswerRestricted = undefined;
  appState.surveyAnswerRestrictedtrueActive = false;
  appState.surveyAnswerRestrictedfalseActive = false;
  appState.surveyQuestionScale = "";
  appState.surveyQuestionOptions = "";
  appState.surveyBackgroundDisplay = undefined;
  appState.surveyBackgroundDisplaytrueActive = false;
  appState.surveyBackgroundDisplayfalseActive = false;
  return null;
};

export default clearAddItemForm;
