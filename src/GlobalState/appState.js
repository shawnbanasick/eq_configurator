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
  surveyQuestionsArray: [
    {
      id: "item-0",
      content: [
        "required (true/false): true",
        "label text: Age",
        "note: Please enter your year of birth (YYYY, eg. 1980).",
        "maxlength: 4",
        `restricted: "0-9"`,
      ],
    },
    {
      id: "item-1",
      content: [
        "required (true/false): true",
        "label text: Age",
        "note: Please enter your year of birth (YYYY, eg. 1980).",
        "maxlength: 4",
        `restricted: "0-9"`,
      ],
    },
    {
      id: "item-2",
      content: [
        "required (true/false): true",
        "label text: Age",
        "note: Please enter your year of birth (YYYY, eg. 1980).",
        "maxlength: 4",
        `restricted: "0-9"`,
      ],
    },
    {
      id: "item-3",
      content: [
        "required (true/false): true",
        "label text: Age",
        "note: Please enter your year of birth (YYYY, eg. 1980).",
        "maxlength: 4",
        `restricted: "0-9"`,
      ],
    },
    {
      id: "item-4",
      content: [
        "required (true/false): true",
        "label text: Age",
        "note: Please enter your year of birth (YYYY, eg. 1980).",
        "maxlength: 4",
        `restricted: "0-9"`,
      ],
    },
    {
      id: "item-5",
      content: [
        "required (true/false): true",
        "label text: Age",
        "note: Please enter your year of birth (YYYY, eg. 1980).",
        "maxlength: 4",
        `restricted: "0-9"`,
      ],
    },
  ],
  /*
  config.xml settings */

  /*
  config.xml settings */

  /*
  config.xml settings */

  /*
  config.xml settings */

  activeWindow: "viewStart",

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
