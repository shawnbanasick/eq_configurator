import { store } from "@risingstack/react-easy-state";

const appState = store({
  /*
  set default save file path */
  userSelectedFilePath: "",

  /*
  config.xml default settings */
  showSurveytextImage: true,
  config8ShowStep5trueActive: true,
  config8ShowStep5: "true",
  surveyQuestionType: "text",
  activeWindow: "viewStart",
  showSuccessMessage: false,
  showErrorMessage: false,
  surveyQuestionsArray: [
    {
      id: "item-0",
      content: [
        "item type: text",
        "required (true/false): true 1",
        "label text: Age",
        "note: Please enter your year of birth (YYYY, eg. 1980).",
        "maxlength: 4",
        `restricted: "0-9"`,
      ],
    },
    {
      id: "item-1",
      content: [
        "item type: textarea",
        "required (true/false): true",
        "label text: Write Comments Here",
      ],
    },
    {
      id: "item-2",
      content: [
        "item type: radio",
        "required (true/false): true",
        "label text: Gender",
        "note: Please select your gender",
        "options: male;female",
      ],
    },
    {
      id: "item-3",
      content: [
        "item type: select",
        "required (true/false): true",
        "label text: What kind of transportation do you prefer",
        "options: Car;Railroad;Bike",
      ],
    },
    {
      id: "item-4",
      content: [
        "item type: checkbox",
        "required (true/false): true",
        "label text: What kind of transportation do you prefer",
        "options: Car;Railroad;Bike;Walking",
      ],
    },
    {
      id: "item-5",
      content: [
        "item type: rating2",
        "required (true/false): true",
        "label text: Please answer the following questions",
        "scale: Yes;No;",
        "options: There's a car in my household; I own a car for myself",
      ],
    },
    {
      id: "item-6",
      content: [
        "item type: rating5",
        "required (true/false): true",
        "label text: Please answer the following questions",
        "scale: 1;2;3;4;5;",
        "options: How would you rate your current transportation route;How would you rate your old transportation route",
      ],
    },
    {
      id: "item-7",
      content: [
        "item type: rating10",
        "required (true/false): true",
        "label text: Please answer the following questions",
        "scale: 1;2;3;4;5;6;7;8;9;10;",
        "options: How would you rate your current transportation route;How would you rate your old transportation route",
      ],
    },
    {
      id: "item-8",
      content: [
        "item type: information",
        "required (true/false): true",
        "options: All fields marked with an * are mandatory",
      ],
    },
  ],
  /*
  statements.xml settings */

  /*
  map.xml settings */

  /*
  language.xml settings */

  /*
  firebase.xml settings */

  changes: [],

  errorMessage: "",
  extendedErrorMessage: "",
  errorStackTrace: "",

  isDataButtonGreen: false,
  isInputButtonGreen: false,

  showErrorMessageBar: false,
  showUpdateModal: false,

  viewRotation: false,
  viewStart: true,
});

export default appState;
