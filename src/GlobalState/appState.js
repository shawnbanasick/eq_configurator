import { store } from "@risingstack/react-easy-state";

const appState = store({
  /*
  DEFAULT settings */
  userSelectedFilePath: "",
  displayMode: "beginner",

  /*
  DEFAULT page opening */
  // viewConfig: true,
  viewStart: true,

  /*
  config.xml default settings */
  showSurveytextImage: true,

  configVersion: "1.0",
  configTextAlignleftActive: true,
  configTextAlign: "left",
  configshuffleCardstrueActive: true,
  configshuffleCards: true,
  configLogInRequiredfalseActive: true,
  configLogInRequired: false,
  configUseLogInScriptfalseActive: true,
  configUseLogInScript: false,
  configShowStep3trueActive: true,
  configShowStep3: "true",
  configShowStep4trueActive: true,
  configShowStep4: "true",
  configShowStep5trueActive: true,
  configShowStep5: "true",
  configDisableBackButton: true,
  configDisableBackButtontrueActive: true,
  configPartNameRequired: true,
  configPartNameRequiredtrueActive: true,

  stylesStatementNumberDisplayfalseActive: true,
  stylesStatementNumberDisplay: false,
  stylesStatementNumberSizesmallActive: true,
  stylesStatementNumberSize: "small",
  stylesStatementNumberOpacityfaintActive: true,
  stylesStatementNumberOpacity: "faint",

  stylesXsmallFontSize: 10,
  stylesSmallFontSize: 11,
  stylesMediumFontSize: 13,
  stylesLargeFontSize: 14,
  stylesXlargeFontSize: 16,
  stylesHdFontSize: 18,
  stylesIpadSmallFontSize: 10,
  stylesIpadLargeFontSize: 14,

  surveyQuestionType: "text",
  activeWindow: "viewStart",
  showSuccessMessage: false,
  showErrorMessage: false,
  surveyQuestionsArray: [
    {
      id: "item-0",
      content: [
        "item type: information",
        "background visible (true/false): false",
        "options: All fields marked with an * are mandatory",
      ],
      surveyQuestionType: "information",
      bg: false,
      options: "All fields marked with an * are mandatory",
    },
    {
      id: "item-1",
      content: [
        "item type: text",
        "required (true/false): true",
        "label text: Age",
        "note: Please enter your year of birth (YYYY, eg. 1980).",
        "maxlength: 4",
        `restricted: "0-9": true`,
      ],
      surveyQuestionType: "text",
      required: true,
      label: "Age",
      note: "Please enter your year of birth (YYYY, eg. 1980).",
      maxlength: 4,
      restricted: true,
    },
    {
      id: "item-2",
      content: [
        "item type: textarea",
        "required (true/false): true",
        "label text: Describe your experience using the iPads in this class",
      ],
      surveyQuestionType: "textarea",
      required: true,
      label: "Describe your experience using the iPads in this class",
    },
    {
      id: "item-3",
      content: [
        "item type: radio",
        "required (true/false): true",
        "label text: Year",
        "note: Please select your year",
        "options: Freshman, Sophomore, Junior, Senior; ",
      ],
      surveyQuestionType: "radio",
      required: true,
      label: "Year",
      note: "Please select your year",
      options: "Freshman;Sophomore;Junior;Senior",
    },
    {
      id: "item-4",
      content: [
        "item type: select",
        "required (true/false): false",
        "label text: What is your program focus?",
        "options: Global Studies;Linguistics;English Literature",
      ],
      surveyQuestionType: "select",
      required: false,
      label: "What is your program focus?",
      options: "Global Studies;Linguistics;English Literature",
    },
    {
      id: "item-5",
      content: [
        "item type: checkbox",
        "required (true/false): false",
        "label text: What kind of class do you prefer?",
        "options: Lecture;Group Discussion;Active Learning",
      ],
      surveyQuestionType: "checkbox",
      required: false,
      label: "What kind of class do you prefer?",
      options: "Lecture;Group Discussion;Active Learning",
    },
    {
      id: "item-6",
      content: [
        "item type: rating2",
        "required (true/false): false",
        "label text: Please respond to the following statements",
        "scale: Yes;No;",
        "options: I have used an iPad in class before.; I have used a notebook computer in class before.",
      ],
      surveyQuestionType: "rating2",
      required: false,
      label: "Please respond to the following statements",
      scale: "Yes;No",
      options:
        "I have used an iPad in class before.; I have used a notebook computer in class before.",
    },
    {
      id: "item-7",
      content: [
        "item type: rating5",
        "required (true/false): false",
        "label text: Please answer the following questions",
        "scale: 1;2;3;4;5",
        "options: How would you rate the use of iPads in this class?;How would you rate this class overall?",
      ],
      surveyQuestionType: "rating5",
      required: false,
      label: "Please answer the following questions",
      scale: "1;2;3;4;5",
      options:
        "How would you rate the use of iPads in this class?;How would you rate this class overall?",
    },
    {
      id: "item-8",
      content: [
        "item type: rating10",
        "required (true/false): false",
        "label text: Please answer the following questions",
        "scale: 1;2;3;4;5;6;7;8;9;10",
        "options: How would you rate the use of the Socrative website in this class?;How would you rate the use of the Quizlet website in this class?",
      ],
      surveyQuestionType: "rating10",
      required: false,
      label: "Please answer the following questions",
      scale: "1;2;3;4;5;6;7;8;9;10",
      options:
        "How would you rate the use of the Socrative website in this class?;How would you rate the use of the Quizlet website in this class?",
    },
  ],
  /*
  statements.xml settings */

  /*
  map.xml settings */
  statements: [],
  qSortPattern: [-2, -1, -1, 0, 0, 0, 1, 1, 2],
  qSortPatternObject: {},
  activeValueM6: 0,
  activeValueM5: 0,
  activeValueM4: 0,
  activeValueM3: 0,
  activeValueM2: 0,
  activeValueM1: 0,
  activeValue0: 0,
  activeValue1: 0,
  activeValue2: 0,
  activeValue3: 0,
  activeValue4: 0,
  activeValue5: 0,
  activeValue6: 0,
  activeValue7: 0,
  activeValue8: 0,
  activeValue9: 0,
  activeValue10: 0,
  activeValue11: 0,
  activeValue12: 0,
  activeValue13: 0,

  /*
  language.xml settings */
  langBtnContinue: "Continue...",
  langBtnClose: "Close",
  langBtnHelp: "Help me!",
  langBtnAgree: "Agree",
  langBtnNeutral: "Neutral",
  langBtnDisagree: "Disagree",
  langBtnSubmit: "Submit data",
  langBtnExit: "Exit",
  langBtnSelect: "Please select...",
  langExitWarning: "Your answers will be lost.",
  langBack: "Back",
  langReqFields: "Please fill in all required fields",
  langError: "Error!",
  langMaxWindow: "Please maximize your browser for using this application.",
  langWelcome: "Welcome!",
  langWelcomeText:
    "This is a demo project on iPad use in the classroom.{br}{br}{b}** Important Information **{/b}{br}For this survey you will need as much screen space as possible!{br}{br}If necessary, please {b}MAXIMIZE{/b} the size of your browser window, {b}{i}reload{/i}{/b} this web page, and click on the continue-button to start the survey.",
  langUserCode: "Access Code",
  langLogInText: "Please enter the access code for this survey. {br}{br}",
  langFormHeader: "Access Code",
  langPartIdText: "Your name or survey id number",
  langNoInput: "Please insert the access code.",
  langUserCodeInvalid: "Access code invalid",
  langServerConnectFail: "Connection to server failed. Please try again.",
  langIntroduction: "Introduction",
  langIntroText: `This study is about iPad use in the classroom. {br}{br}`,
  langStep1: "Step 1 of 5",
  langStep1Text: `Read the folowing statements carefully and split them up into three piles: a pile for statements you tend to disagree with, a pile for cards you tend to agree with, and a pile for the rest.{br}{br}You can either drag the cards into one of the three piles or {b}press 1, 2, 3{/b} on your keyboard. Changes can be made later.{br}{br}If you want to read this instruction a second time, press the help-button at the bottom left corner.`,
  langStep2: "Step 2 of 5",
  langStep2Text: `Take the cards from the "AGREE"-pile and arrange them on right side of the score sheet.{br}{br}Next, take the cards from the "DISAGREE"-pile and arrange them on the left side of the score sheet. Follow this procedure for all cards in the "AGREE"- and "DIAGREE"-piles.{br}{br}Finally, take the "NEUTRAL"-cards arange them in the remaining open boxes of the score sheet.`,
  langStep3: "Step 3 of 5",
  langStep3Text: `Now you have placed all cards on the score sheet. Please go over your distribution once more and swap card positions cards if desired.`,
  langStep4: "Step 4 of 5",
  langStep4Text: `Please explain why you agree most or disagree most with the following statements you have placed below "+4" or "-4".{br}{br}`,
  langStep5: "Step 5 of 5",
  langStep5Text: `Finally, please answer the following questions regarding your background.{br}{br}`,
  langTransferHead: "Submit Data",
  langTransferText: "You've finished the survey. Please submit your data now.",
  langTransferFailed: "Data submission failed. Please try again.",
  langTransferOk: `Thank you for using Easy HTMLQ!{br}{br}You can now close your browser window.`,

  langStep2CondOfInstruc:
    "Give condition of instruction summary to participants",
  langStep3CondOfInstruc:
    "Give condition of instruction summary to participants",

  /*
  firebase.xml settings */
});

export default appState;
