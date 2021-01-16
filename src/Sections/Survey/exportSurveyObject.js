const exportSurveyObject = () => {
  const surveyQuestionObject = {
    text: [
      "required: true",
      "label: Age",
      "note: Please enter your year of birth (YYYY, eg. 1980).",
      "maxlength: 4",
      `restricted: "0-9"`,
    ],
    textarea: ["label: Comments", "required: false"],
    radio: [
      "required: true",
      "label: Gender",
      "note: Please select your gender",
      "options: female;male",
    ],
    rating2: [
      "required: false",
      "label: Please answer the following questions.",
      "scale: Yes;No;",
      "options: There's a car in my household;I own a car for myself",
    ],
    rating5: [
      "required: false",
      "label: Please answer the following questions.",
      "scale: 1;2;3;4;5",
      "options: How would you rate your current transportation route;How would you rate your old transportation route",
    ],
    rating10: [
      "required: false",
      "label: Please answer the following questions.",
      "scale: 1;2;3;4;5;6;7;8;9;10;",
      "options: How would you rate your current transportation route;How would you rate your old transportation route",
    ],
    checkbox: [
      "required: false",
      "label: What kind of transportation do you prefer?",
      "options: Car;Railroad;Bike;",
    ],
    select: [
      "required: false",
      "label: What kind of transportation do you prefer?",
      "options: Car;Railroad;Bike",
    ],
    note: ["bg: false", "option: All fields marked with an * are mandatory"],
  };
  return surveyQuestionObject;
};

export default exportSurveyObject;
