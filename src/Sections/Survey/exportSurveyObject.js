import React from "react";

const exportSurveyObject = () => {
  const surveyQuestionObject = {
    text: {
      label: "Age",
      note: "Please enter your year of birth (YYYY, eg. 1980).",
      required: "true",
      maxlength: 4,
      restricted: "0-9",
    },
    textArea: {
      label: "Comments",
      required: "false",
    },
    radio: {
      label: "Gender",
      note: "Please select your gender",
      required: "true",
      options: "female;male",
    },
    rating2: {
      label: "Please answer the following questions.",
      required: "false",
      scale: "Yes;No;",
      options: "There's a car in my household;I own a car for myself",
    },
    rating5: {
      label: "Please answer the following questions.",
      required: "false",
      scale: "1;2;3;4;5",
      options:
        "How would you rate your current transportation route;How would you rate your old transportation route",
    },
    rating10: {
      label: "Please answer the following questions.",
      required: "false",
      scale: "1;2;3;4;5;6;7;8;9;10;",
      options:
        "How would you rate your current transportation route;How would you rate your old transportation route",
    },
    checkbox: {
      label: "What kind of transportation do you prefer?",
      required: "false",
      options: "Car;Railroad;Bike;",
    },
    select: {
      label: "What kind of transportation do you prefer?",
      required: "false",
      options: "Car;Railroad;Bike",
    },
    note: {
      bg: "false",
      option: "All fields marked with an * are mandatory",
    },
  };
  return surveyQuestionObject;
};

export default exportSurveyObject;
