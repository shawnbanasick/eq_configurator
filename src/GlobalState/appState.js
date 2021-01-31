import { store } from "@risingstack/react-easy-state";

const appState = store({
  /*
  DEFAULT settings */
  userSelectedFilePath: "",
  beginnerDisplayMode: true,

  /*
  DEFAULT page opening */
  // viewConfig: true,
  viewStart: true,

  /*
  config.xml default settings */
  showSurveytextImage: true,

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
  configDisableBackButtontrueActive: true,
  configDisableBackButton: true,

  surveyQuestionType: "text",
  activeWindow: "viewStart",
  showSuccessMessage: false,
  showErrorMessage: false,
  surveyQuestionsArray: [
    {
      id: "item-0",
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
      id: "item-1",
      content: [
        "item type: textarea",
        "required (true/false): true",
        "label text: Write Comments Here",
      ],
      surveyQuestionType: "textarea",
      required: true,
      label: "Write Comments Here",
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
      surveyQuestionType: "radio",
      required: true,
      label: "Gender",
      note: "Please enter your gender",
      options: "male;female",
    },
    {
      id: "item-3",
      content: [
        "item type: select",
        "required (true/false): false",
        "label text: What kind of transportation do you prefer",
        "options: Car;Railroad;Bike",
      ],
      surveyQuestionType: "select",
      required: false,
      label: "What kind of transportation do you prefer",
      options: "Car;Railroad;Bike",
    },
    {
      id: "item-4",
      content: [
        "item type: checkbox",
        "required (true/false): false",
        "label text: What kind of transportation do you prefer",
        "options: Car;Railroad;Bike;Walking",
      ],
      surveyQuestionType: "checkbox",
      required: false,
      label: "What kind of transportation do you prefer - checkbox",
      options: "Car;Railroad;Bike;Walking",
    },
    {
      id: "item-5",
      content: [
        "item type: rating2",
        "required (true/false): false",
        "label text: Please answer the following questions",
        "scale: Yes;No;",
        "options: There's a car in my household; I own a car for myself",
      ],
      surveyQuestionType: "rating2",
      required: false,
      label: "Please answer the following questions",
      scale: "Yes;No",
      options: "There's a car in my household; I own a car for myself",
    },
    {
      id: "item-6",
      content: [
        "item type: rating5",
        "required (true/false): false",
        "label text: Please answer the following questions",
        "scale: 1;2;3;4;5",
        "options: How would you rate your current transportation route;How would you rate your old transportation route",
      ],
      surveyQuestionType: "rating5",
      required: false,
      label: "Please answer the following questions",
      scale: "1;2;3;4;5",
      options:
        "How would you rate your current transportation route;How would you rate your old transportation route",
    },
    {
      id: "item-7",
      content: [
        "item type: rating10",
        "required (true/false): false",
        "label text: Please answer the following questions",
        "scale: 1;2;3;4;5;6;7;8;9;10",
        "options: How would you rate your current transportation route;How would you rate your old transportation route",
      ],
      surveyQuestionType: "rating10",
      required: false,
      label: "Please answer the following questions",
      scale: "1;2;3;4;5;6;7;8;9;10",
      options:
        "How would you rate your current transportation route;How would you rate your old transportation route",
    },
    {
      id: "item-8",
      content: [
        "item type: information",
        "background visible (true/false): false",
        "options: All fields marked with an * are mandatory",
      ],
      surveyQuestionType: "information",
      bg: false,
      options: "All fields marked with an * are mandatory",
    },
  ],
  /*
  statements.xml settings */

  /*
  map.xml settings */
  statements: [
    "1. statement 1",
    "2. statement 2",
    "3. statement 3",
    "4. statement 4",
    "5. statement 5",
    "6. statement 6",
    "7. statement 7",
    "8. statement 8",
  ],
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
    "Please note: This is just a demo and no data will be stored. Thanks to Job van Exel, that we can use his survey as an example.{br}{br}Comments and bug reports are highly welcome.{br}{br}Please click on the continue-button.",
  langUserCode: "User Code",
  langLogInText:
    "Please enter your user code. Please note, that in this demo any user code will be accepted.{br}{br}{i}Tip: This is an optional step and you can deactivate it in your own survey.{i}",
  langFormHeader: "User Code",
  langNoInput: "Please insert your user code.",
  langUserCodeInvalid: "User code invalid",
  langServerConnectFail: "Connection to server failed. Please try again.",
  langIntroduction: "Introduction",
  langIntroText: `This study is about travel behaviour. We are interested in your attitude towards car and public transport as travel alternatives for middle-distance trips.{br}{br}Please maximize your browser window and click on the continue-button to start the survey.`,
  langStep1: "Step 1 of 5",
  langStep1Text: `Read the folowing statements carefully and split them up into three piles: a pile for statements you tend to disagree with, a pile for cards you tend to agree with, and a pile for the rest.{br}{br}You can either drag the cards into one of the three piles or press 1, 2, 3 on your keyboard. Changes can be made later.{br}{br}If you want to read this instruction a second time, press the help-button at the bottom left corner.`,
  langStep2: "Step 2 of 5",
  langStep2Text: `Take the cards from the "AGREE"-pile and read them again. You can scroll through the statements by using the scroll bar. Next, select the two statements you most agree with and place them on right side of the score sheet below the "+2".{br}{br}Now read the cards in the "DISAGREE"-pile again. Just like before, select the two statements you most disagree with and place them on the left side of the score sheet below the "-2".{br}{br}Next, select the statements you second most agree/disagree with and place them under "+1"/"-1". Follow this procedure for all cards in the "AGREE"- and "DIAGREE"-pile.{br}{br}Finally, read the "NEUTRAL"-cards again and arange them in the remaining open boxes of the score sheet.`,
  langStep3: "Step 3 of 5",
  langStep3Text: `Now you have placed all cards on the score sheet. Please go over your distribution once more and shift cards if you want to.{br}{br}{i}Tip: This is an optional step and you can deactivate it in your own survey.{i}`,
  langStep4: "Step 4 of 5",
  langStep4Text: `Please explain why you agree most or disagree most with the following statements you have placed below "+2" or "-2".{br}{br}{i}Tip: This is a optional step and you can deactivate it in your own survey.{i}`,
  langStep5: "Step 5 of 5",
  langStep5Text: `Finally, please answer the following questions regarding your background.{br}{br}{i}Tip: This is a optional step and you can deactivate it in your own survey.{i}`,
  langTransferHead: "Submit Data",
  langTransferText: "You've finished the survey. Please submit your data now.",
  langTransferFailed:
    "Data submission failed. Please try again or mail your results via email/post.",
  langTransferOk: `Thank you for using Easy HTMLQ. We would appreciate if you could send us feedback about this application (bugs, ideas, suggestion, etc.).{br}{br}Christian Hackert{br}{a href="http://www.hackert.biz/flashq" target="_blank"}{u}www.hackert.biz/flashq{/u}{/a}.{br}{br}You can now close your browser window.`,

  /*
  firebase.xml settings */
});

export default appState;
