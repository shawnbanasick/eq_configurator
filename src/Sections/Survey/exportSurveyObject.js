const exportSurveyObject = () => {
  const surveyQuestionObject = {
    text: [
      "required (true/false): true",
      "label text: Age",
      "note: Please enter your year of birth (YYYY, eg. 1980).",
      "maxlength: 4",
      `restricted: "0-9"`,
    ],
    textarea: ["required (true/false): false", "label: Comments"],
    radio: [
      "required (true/false): true",
      "label text: Gender",
      "note: Please select your gender",
      "options: female;male",
    ],
    rating2: [
      "required (true/false): false",
      "label text: Please answer the following questions.",
      "scale: Yes;No;",
      "options: There's a car in my household;I own a car for myself",
    ],
    rating5: [
      "required (true/false): false",
      "label text: Please answer the following questions.",
      "scale: 1;2;3;4;5",
      "options: How would you rate your current transportation route;How would you rate your old transportation route",
    ],
    rating10: [
      "required (true/false): false",
      "label text: Please answer the following questions.",
      "scale: 1;2;3;4;5;6;7;8;9;10;",
      "options: How would you rate your current transportation route;How would you rate your old transportation route",
    ],
    checkbox: [
      "required (true/false): false",
      "label text: What kind of transportation do you prefer?",
      "options: Car;Railroad;Bike;",
    ],
    select: [
      "required (true/false): false",
      "label text: What kind of transportation do you prefer?",
      "options: Car;Railroad;Bike",
    ],
    information: [
      "bg: false",
      "option text: All fields marked with an * are mandatory",
    ],
  };
  return surveyQuestionObject;
};

export default exportSurveyObject;
