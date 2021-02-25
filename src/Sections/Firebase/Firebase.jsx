import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import FirebaseTextArea from "./FirebaseTextArea";
import exportToXml from "../../Utils/exportToXml";
import GeneralButton from "../../Utils/GeneralButton";
import addFirebaseInfoToIndexHtml from "./addFirebaseInfoToIndexHtml";
import { toast } from "react-toastify";
import { ToastContainer, Slide } from "react-toastify";
import addProject from "../../assets/images/firebase_add_project.png";
import realtimeDatabase from "../../assets/images/firebase-realtime-database.png";
import authentication from "../../assets/images/firebase-authentication.png";
import authenticationSignInMethod from "../../assets/images/firebase-authentication-sign-in-method.png";
import authenticationEnableAnonymous from "../../assets/images/firebase-authentication-enable-anonymous.png";
import projectSettingsGear from "../../assets/images/firebase-project-settings-gear.png";

import anonEnableSwitch from "../../assets/images/firebase-anon-enable-switch.png";
import anonSelect from "../../assets/images/firebase-anon-select.png";
import addProjectName from "../../assets/images/firebase-add-project-name.png";
import createProject from "../../assets/images/firebase-create-project.png";
import projectCreated from "../../assets/images/firebase-project-created.png";
import getJavascriptApi from "../../assets/images/firebase-get-javascript-api.png";
import addNickname from "../../assets/images/firebase-add-nickname.png";
import copyApiInfo from "../../assets/images/firebase-copy-api-info.png";
import createDatabase from "../../assets/images/firebase-create-database.png";
import databaseLocation from "../../assets/images/firebase-database-location.png";
import defaultRules from "../../assets/images/firebase-default-rules.png";
import initialDatabase from "../../assets/images/firebase-initial-database.png";
import clickRules from "../../assets/images/firebase-click-rules.png";
import editRules from "../../assets/images/firebase-edit-rules.png";
import newRules from "../../assets/images/firebase-new-rules.png";
import publishRules from "../../assets/images/firebase-publish-rules.png";
import databaseData from "../../assets/images/firebase-database-data.png";
import exportJson from "../../assets/images/firebase-export-json.png";
import gotoConsole from "../../assets/images/firebase-goto-console.png";

const text = `
    {
      "rules": {
      ".read": false,
      ".write": "auth.uid !== null"
      }
    }
    `;

const handleClick = () => {
  const data = addFirebaseInfoToIndexHtml();
  // console.log(data);
  if (data !== undefined) {
    exportToXml("index.html", data, "html");
  }
};

const notifySuccess = () => {
  toast.success("Rules Copied", {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const notifyError = () => {
  toast.error("Error", {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const copyToClipboard = (value) => {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
};

const copyText = () => {
  try {
    copyToClipboard(text);
    notifySuccess();
  } catch (e) {
    notifyError();
  }
};

const FirebaseInfo = () => {
  return (
    <MainContent>
      <StyledToastContainer />
      <GlobalStyle />
      <Title>Firebase Settings</Title>
      <DisplayModeText>
        Firebase is a Database-as-a-Service company owned by Google. It provides
        a convenient way to store the participants' response data. If you don't
        have a Google account, make one before you begin the setup process.
        <br /> <br />
        Information on how to export the Firebase data for analysis is at the
        bottom of this page. <br /> <br />
        There are four things needed to link a database to Easy HTMLQ: setup a
        new Firebase project, initialize the realtime database, allow anonymous
        log-ins, and set the database rules.
      </DisplayModeText>
      <DisplayModeText>
        <b>1a.</b>
        <br /> I
      </DisplayModeText>
      <SpacerDiv />
      <Title2>Step 1 of 4 - Add a New Project</Title2>

      <DisplayModeText>
        <b>1a.</b>
        <br /> Using your Google account, "Sign-in" to{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://firebase.google.com/"
        >
          Firebase
        </a>{" "}
        and then click on "Go to console".
      </DisplayModeText>
      <img src={gotoConsole} alt="s" />

      <DisplayModeText>
        <b>1b.</b>
        <br /> In your Firebase console, click on "Add project"
      </DisplayModeText>
      <img src={addProject} alt="add a project to firebase" />
      <DisplayModeText>
        <b>1c.</b>
        <br /> Input your project name and then click "Continue"
      </DisplayModeText>
      <img src={addProjectName} alt="s" />
      <DisplayModeText>
        <b>1d.</b>
        <br /> Disable Google Analytics and then click "Create Project"
      </DisplayModeText>
      <img src={createProject} alt="s" />
      <DisplayModeText>
        <b>1e.</b>
        <br /> You will get confirmation. Then click "Continue".
      </DisplayModeText>
      <img src={projectCreated} alt="s" />
      <DisplayModeText>
        <b>1f.</b>
        <br /> Add the Firebase Javascript SDK information by clicking on the
        Javascript icon indicated in the image below.
      </DisplayModeText>
      <img src={getJavascriptApi} alt="s" />
      <DisplayModeText>
        <b>1g.</b>
        <br /> Input a nickname for your app, then click on "Register app".
      </DisplayModeText>
      <img src={addNickname} alt="s" />
      <DisplayModeText>
        <b>1h.</b>
        <br /> Copy the Firebase SDK information by clicking on the icon in the
        bottom right corner. Then click "Continue to console".
      </DisplayModeText>
      <img src={copyApiInfo} alt="s" />
      <DisplayModeText>
        <b>1i.</b>
        <br /> Paste the Firebase Javascript SDK inforamtion into the text area
        below. Then click the gray button to save the new file to the{" "}
        <b>Easy HTMLQ base files folder</b> and replace the "<b>index.html</b>"
        file.
      </DisplayModeText>
      <SpacerDiv />
      <FirebaseTextArea />
      <GeneralButton onClick={() => handleClick()}>
        Save file to the <b>Easy HTMLQ folder</b> and replace the "index.html"
        file
      </GeneralButton>
      <SpacerDiv />
      <Title2>Step 3 of 4 - Allow Anonymous Log-in</Title2>
      <img src={authentication} alt="a" />
      <img src={authenticationSignInMethod} alt="a" />
      <img src={authenticationEnableAnonymous} alt="ad" />
      <img src={anonEnableSwitch} alt="a" />
      <img src={anonSelect} alt="ae" />

      <SpacerDiv />
      <Title2>Step 4 of 4 - Set Realtime Database Access Rules</Title2>
      <img src={realtimeDatabase} alt="database" />

      <Title2>Exporting Data for Analysis</Title2>
      <img src={exportJson} alt="s" />

      <img src={createDatabase} alt="s" />
      <img src={databaseLocation} alt="s" />
      <img src={defaultRules} alt="s" />
      <img src={initialDatabase} alt="s" />
      <img src={clickRules} alt="s" />
      <img src={editRules} alt="s" />
      <img src={newRules} alt="s" />
      <img src={publishRules} alt="s" />
      <img src={databaseData} alt="s" />
      <FirebaseRulesLink>
        <pre>{text}</pre>
      </FirebaseRulesLink>
      <LinkCopyButton onClick={copyText}>
        Copy Rules to Clipboard
      </LinkCopyButton>
    </MainContent>
  );
};

export default view(FirebaseInfo);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const MainContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  width: calc(100vw - 137px);
  box-sizing: border-box;
  max-height: calc(100vh - 3px);
  overflow: auto;
  padding-bottom: 30px;
  /* user-select: none; */
  img {
    /* width: 150px; */
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
    margin-top: 20px;
    margin-bottom: 20px;
  }

  a {
    padding-bottom: 1px;
    text-decoration: none;
    color: #000;
    box-shadow: inset 0 -4px 0 var(--second-theme-color);
    transition: background-color 0.25s ease-out;
    margin-left: 5px;
  }

  a:hover {
    background-color: var(--second-theme-color);
    padding-top: 2px;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;

const FirebaseRulesLink = styled.div`
  background-color: white;
  width: 500px;
  height: 380px;
  margin-top: 80px;
  margin-bottom: 0px;
  border: 3px solid black;
`;

const LinkCopyButton = styled(GeneralButton)`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const StyledToastContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast--success {
    padding-left: 40px;
    background-color: var(--main-theme-color);
    width: 200px;
  }
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-top: 40px;
  width: 98%;
  max-width: 1200px;
  font-size: 20px;
  padding: 0 10px 0 10px;
  border: 2px solid black;
`;

const Title2 = styled.h1`
  margin-left: 10px;
  font-size: 35px;
  width: 70vw;
`;

const SpacerDiv = styled.div`
  box-sizing: border-box;
  height: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
