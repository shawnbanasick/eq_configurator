const exportSurveyObject = () => {
  const surveyQuestionObject = {
    text: [
      "item type: text",
      "answer required (true/false): true",
      "label text: Age",
      "question note: Please enter your year of birth (YYYY, eg. 1980).",
      "maxlength: 4",
      `answer restricted to numbers "0-9" (true/false): true`,
    ],
    textarea: ["answer required (true/false): false", "label: Comments"],
    radio: [
      "item type: radio",
      "answer required (true/false): true",
      "label text: Gender",
      "question note: Please select your gender",
      "options: female;male",
    ],
    rating2: [
      "item type: rating2",
      "answer required (true/false): false",
      "label text: Please answer the following questions.",
      "scale: Yes;No;",
      "options: There's a car in my household;I own a car for myself",
    ],
    rating5: [
      "item type: rating5",
      "answer required (true/false): false",
      "label text: Please answer the following questions.",
      "scale: 1;2;3;4;5",
      "options: How would you rate your current transportation route;How would you rate your old transportation route",
    ],
    rating10: [
      "item type: rating10",
      "answer required (true/false): false",
      "label text: Please answer the following questions.",
      "scale: 1;2;3;4;5;6;7;8;9;10;",
      "options: How would you rate your current transportation route;How would you rate your old transportation route",
    ],
    checkbox: [
      "item type: checkbox",
      "answer required (true/false): false",
      "label text: What kind of transportation do you use?",
      "options: Car;Railroad;Bike;",
    ],
    select: [
      "item type: select",
      "answer required (true/false): false",
      "label text: What kind of transportation do you prefer?",
      "options: Car;Railroad;Bike",
    ],
    information: [
      "item type: information",
      "background: false",
      "option text: All fields marked with an * are mandatory",
    ],
  };
  return surveyQuestionObject;
};

export default exportSurveyObject;
