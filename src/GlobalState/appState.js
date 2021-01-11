import { store } from "@risingstack/react-easy-state";

const appState = store({
  
  /*
  set default save file path */
  userSelectedFilePath: "",
  
  /*
  config.xml default settings */
  
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
  viewStart: true
});

export default appState;

