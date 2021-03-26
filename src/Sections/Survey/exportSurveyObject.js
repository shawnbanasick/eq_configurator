const exportSurveyObject = () => {
  const surveyQuestionObject = {
    text: [
      "Text question type",
      "Answer mandatory (true/false): true",
      "Label: Age",
      "Question note: Please enter your year of birth (YYYY, eg. 1980).",
      "Limit answer length: true",
      "Answer maximum length: 4",
      `Answer restricted to numbers "0-9": true`,
    ],
    textarea: [
      "Textarea question type",
      "Answer mandatory (true/false): false",
      "Label: Comments",
    ],
    radio: [
      "Radio question type",
      "Answer mandatory (true/false): true",
      "Label: Year",
      "Question note: Please select your year",
      "Options: Freshman;Sophomore;Junior;Senior",
    ],
    rating2: [
      "Rating2 question type",
      "Answer mandatory (true/false): false",
      "Label: Please answer the following questions.",
      "Scale: Yes;No;",
      "Options: I have used an iPad in class before.;I have used a notebook computer in class before.",
    ],
    rating5: [
      "Rating5 question type",
      "Answer mandatory (true/false): false",
      "Label: Please answer the following questions.",
      "Options: How would you rate the use of iPads in this class?;How would you rate this class overall?",
    ],
    rating10: [
      "Rating10 question type",
      "Answer mandatory (true/false): false",
      "Label: Please answer the following questions.",
      "Options: How would you rate the use of the Socrative website in this class?;How would you rate the use of the Quizlet website in this class?",
    ],
    checkbox: [
      "Checkbox question type",
      "Answer mandatory (true/false): false",
      "Label: What kind of class do you prefer?",
      "Options: Lecture;Group Discussion;Active Learning",
    ],
    select: [
      "Select question type",
      "Answer mandatory (true/false): false",
      "label text: What is your program focus?",
      "Options: Global Studies;Linguistics;English Literature",
    ],
    information: [
      "Information type",
      "Use yellow background: true",
      "Options: All sections marked with an * are mandatory",
    ],
  };
  return surveyQuestionObject;
};

export default exportSurveyObject;
