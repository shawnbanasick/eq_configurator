import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
// import UserTextInput from "../../Utils/UserTextInput";
import UserTextAreaInput from "../../Utils/UserTextAreaInput";
import appState from "../../GlobalState/appState";
import generateLanguageXml from "../Language/generateLanguageXml";
import generateMobileLanguageXml from "../Language/generateMobileLanguageXml";
import LangTextInput from "../../Utils/LangTextInput";
import { toast } from "react-toastify";
import { ToastContainer, Slide } from "react-toastify";

const notifyError = (errorMessage) => {
  toast.error(errorMessage, {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const Language = () => {
  let showMobileOptions = false;
  let showHtmlqOptions = true;

  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  let configurationTarget = appState.configurationTarget;

  let data;
  const handleClick = () => {
    if (configurationTarget === "easyHtmlq") {
      data = generateLanguageXml();
      console.log("easy branch");
    } else {
      data = generateMobileLanguageXml();
      console.log("mobile branch");
    }
    if (data.includes(`"></item>`)) {
      notifyError("There is missing language input");
    } else {
      exportToXml("language.xml", data, "xml");
    }
  };

  // let langPartId;
  let sectionTitle;
  if (configurationTarget === "easyHtmlq") {
    showMobileOptions = false;
    showHtmlqOptions = true;
    sectionTitle = "User Login Screen";
    // langPartId = appState.langPartIdText;
  } else {
    showMobileOptions = true;
    showHtmlqOptions = false;
    sectionTitle = "EQ Mobile Controls";
    // langPartId = appState.langPartIdTextMobile;
  }

  return (
    <MainContent>
      <StyledToastContainer />
      <GlobalStyle />
      <Title>Language Settings</Title>
      {displayMode && (
        <DisplayModeText>
          In this file you can customize the user interface language for your
          project.
          <br />
          <br />
          {`Language formatting is available here by using tags before and after the text to be modified. Options include bold {b} {/b}, italics {i} {/i}, and underline {u} {/u}.`}{" "}
          <br />
          <br />
          For example: <br />
          If you input - {`{b}`}test{`{/b}`} - the participant will see -{" "}
          <b>test</b>
          <br />
          If you input - {`{u}`}test{`{/u}`} - the participant will see -{" "}
          <u>test</u>
          <br />
          If you input - {`{i}`}test{`{/i}`} - the participant will see -{" "}
          <i>test</i>
          <br />
          If you input - {`{b}{i}{u}`}test{`{/u}{/i}{/b}`} - the participant
          will see -{" "}
          <u>
            <b>
              <i>test</i>
            </b>
          </u>
          <br />
          <br />
          {`A new line can be inserted using a single break tag {br}, and an open line between text can be created by using two break tags {br}{br}.`}
          <br />
          <br />
          {`A web link can be inserted by using this pattern:`}
          <br />
          {`{a href="https://qmethod.org/" target="_blank"}{u}qmethod.org{/u}{/a}.`}
          <br />
          <br />
          {`See the default text below for more examples.`}
        </DisplayModeText>
      )}

      <SectionContainer>
        <h3>Button Labels</h3>
        <LangTextInput
          label="Continue..."
          stateId="langBtnContinue"
          sectionName="lang"
          width={25}
          left={0}
        />
        <LangTextInput
          label="Close"
          stateId="langBtnClose"
          sectionName="lang"
          width={25}
          left={0}
        />
        <LangTextInput
          label="Help me!"
          stateId="langBtnHelp"
          sectionName="lang"
          width={25}
          left={0}
        />
        <LangTextInput
          label="Agree"
          stateId="langBtnAgree"
          sectionName="lang"
          width={25}
          left={0}
        />
        <LangTextInput
          label="Neutral"
          stateId="langBtnNeutral"
          sectionName="lang"
          width={25}
          left={0}
        />
        <LangTextInput
          label="Disagree"
          stateId="langBtnDisagree"
          sectionName="lang"
          width={25}
          left={0}
        />
        <LangTextInput
          label="Submit data"
          stateId="langBtnSubmit"
          sectionName="lang"
          width={25}
          left={0}
        />
        <LangTextInput
          label="Exit"
          stateId="langBtnExit"
          sectionName="lang"
          width={25}
          left={0}
        />
        <LangTextInput
          label="Please select..."
          stateId="langBtnSelect"
          sectionName="lang"
          width={25}
          left={0}
        />
        <ColorContainer>
          <h3>Navigation and Error Language</h3>
          <LangTextInput
            label="Your answers will be lost."
            stateId="langExitWarning"
            sectionName="lang"
            width={25}
            left={0}
          />
          <LangTextInput
            label="Back"
            stateId="langBack"
            sectionName="lang"
            width={25}
            left={0}
          />
          <LangTextInput
            label="Please fill in all required fields"
            stateId="langReqFields"
            sectionName="lang"
            width={25}
            left={0}
          />
          <LangTextInput
            label="Error"
            stateId="langError"
            sectionName="lang"
            width={25}
            left={0}
          />
        </ColorContainer>
        {showHtmlqOptions && (
          <div>
            <h3>Welcome Screen</h3>
            <LangTextInput
              label="Welcome!"
              stateId="langWelcome"
              sectionName="lang"
              width={25}
              left={0}
            />
            <UserTextAreaInput
              label="Welcome Text"
              stateId="langWelcomeText"
              sectionName="lang"
              width={45}
              height={130}
              left={0}
            />
          </div>
        )}
        <ColorContainer>
          <h3>{sectionTitle}</h3>
          <LangTextInput
            label="Access code"
            stateId="langUserCode"
            sectionName="lang"
            width={25}
            left={0}
          />
          <LangTextInput
            label="Log in Text"
            stateId="langLogInText"
            sectionName="lang"
            width={40}
            left={0}
          />
          <LangTextInput
            label="Access code"
            stateId="langFormHeader"
            sectionName="lang"
            width={25}
            left={0}
          />
          {!showMobileOptions && (
            <LangTextInput
              label="Your name or survey id number"
              stateId="langPartIdText"
              sectionName="lang"
              width={25}
              left={0}
            />
          )}
          {showMobileOptions && (
            <LangTextInput
              label="Participant name or survey id number"
              stateId="langPartIdTextMobile"
              sectionName="lang"
              width={25}
              left={0}
            />
          )}
          <LangTextInput
            label="Please enter your access code."
            stateId="langNoInput"
            sectionName="lang"
            width={25}
            left={0}
          />
          <LangTextInput
            label="Access code invalid"
            stateId="langUserCodeInvalid"
            sectionName="lang"
            width={25}
            left={0}
          />
          <LangTextInput
            label="Connection to server failed. Please try again."
            stateId="langServerConnectFail"
            sectionName="lang"
            width={25}
            left={0}
          />
          {showMobileOptions && (
            <>
              <LangTextInput
                label="Q sorts Stored in Local Memory:"
                stateId="langQsortsStored"
                sectionName="lang"
                width={30}
                left={0}
              />
              <LangTextInput
                label="Currently Offline - Save to Local Memory"
                stateId="langSaveToLocalMemory"
                sectionName="lang"
                width={30}
                left={0}
              />
              <LangTextInput
                label="Return to Control Screen"
                stateId="langReturnToControl"
                sectionName="lang"
                width={30}
                left={0}
              />
              <LangTextInput
                label="Send Stored Q Sorts to Firebase"
                stateId="langSendQsortsToFirebase"
                sectionName="lang"
                width={30}
                left={0}
              />
              <LangTextInput
                label="Success - All Stored Q Sorts Transferred to Firebase"
                stateId="langFirebaseSuccess"
                sectionName="lang"
                width={25}
                left={0}
              />
              <LangTextInput
                label="Remember to Turn Off Auto Screen Lock Before Start"
                stateId="langRememberAutolock"
                sectionName="lang"
                width={23}
                left={0}
              />
              <LangTextInput
                label="Always Do a Screen Capture of Q Sorts as Backup"
                stateId="langDoScreenCapture"
                sectionName="lang"
                width={23}
                left={0}
              />

              <LangTextInput
                label="Clear Cache"
                stateId="langClearCache"
                sectionName="lang"
                width={23}
                left={0}
              />
              <LangTextInput
                label="Clear Cache Password"
                stateId="langClearCachePassword"
                sectionName="lang"
                width={23}
                left={0}
              />
              <LangTextInput
                label="Clear"
                stateId="langClear"
                sectionName="lang"
                width={23}
                left={0}
              />

              <UserTextAreaInput
                label="Clear Cache Text"
                stateId="langClearCacheText"
                sectionName="lang"
                width={46}
                height={100}
                left={0}
              />
            </>
          )}
        </ColorContainer>
        <h3>Introduction</h3>
        <LangTextInput
          label="Introduction"
          stateId="langIntroduction"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Intro Text"
          stateId="langIntroText"
          sectionName="lang"
          width={55}
          height={130}
          left={0}
        />
        <ColorContainer>
          <h3>Step 1</h3>
          <LangTextInput
            label="Step 1 of 5"
            stateId="langStep1"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="Step 1 Text"
            stateId="langStep1Text"
            sectionName="lang"
            width={55}
            height={160}
            left={0}
          />
        </ColorContainer>
        <h3>Step 2</h3>
        <LangTextInput
          label="Step 2 of 5"
          stateId="langStep2"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Step 2 Text"
          stateId="langStep2Text"
          sectionName="lang"
          width={55}
          height={160}
          left={0}
        />
        <LangTextInput
          label="Step 2 Cond. of Instruction"
          stateId="langStep2CondOfInstruc"
          sectionName="lang"
          width={43}
          left={0}
        />
        <LangTextInput
          label="Step 2 Text Size Label"
          stateId="langStep2TextSizeLabel"
          sectionName="lang"
          width={33}
          left={0}
        />
        <ColorContainer>
          <h3>Step 3</h3>
          <LangTextInput
            label="Step 3 of 5"
            stateId="langStep3"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="Step 3 Text"
            stateId="langStep3Text"
            sectionName="lang"
            width={55}
            height={150}
            left={0}
          />
          <LangTextInput
            label="Step 3 Cond. of Instruction"
            stateId="langStep3CondOfInstruc"
            sectionName="lang"
            width={43}
            left={0}
          />
        </ColorContainer>
        <h3>Step 4</h3>
        <LangTextInput
          label="Step 4 of 5"
          stateId="langStep4"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Step 4 Text"
          stateId="langStep4Text"
          sectionName="lang"
          width={55}
          height={150}
          left={0}
        />
        <ColorContainer>
          <h3>
            Step 5 (only displayed if "Show Step 5" is true in the Config file)
          </h3>
          <LangTextInput
            label="Step 5 of 5"
            stateId="langStep5"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="Step 5 Text"
            stateId="langStep5Text"
            sectionName="lang"
            width={55}
            height={150}
            left={0}
          />
        </ColorContainer>
        <h3>Data Transfer</h3>
        <LangTextInput
          label="Submit Data"
          stateId="langTransferHead"
          sectionName="lang"
          width={25}
          left={0}
        />
        <LangTextInput
          label="Data transfer text"
          stateId="langTransferText"
          sectionName="lang"
          width={45}
          left={0}
        />
        <LangTextInput
          label="Data transfer failed"
          stateId="langTransferFailed"
          sectionName="lang"
          width={45}
          left={0}
        />
        <UserTextAreaInput
          label="Data transfer OK"
          stateId="langTransferOk"
          sectionName="lang"
          width={50}
          height={100}
          left={0}
        />
        <TenPxSpacer></TenPxSpacer>
        <TenPxSpacer></TenPxSpacer>
      </SectionContainer>
      <DownloadMapButton onClick={() => handleClick()}>
        Save to the <b>SETTINGS</b> folder and replace the "language.xml" file
      </DownloadMapButton>
    </MainContent>
  );
};

export default view(Language);

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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-size: 18px;
  padding-bottom: 30px;
`;
const Title = styled.h1`
  font-size: 5vw;
  align-self: center;
`;

const ColorContainer = styled.div`
  background-color: #ededed;
  padding-left: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

const DownloadMapButton = styled(GeneralButton)`
  max-width: 300px;
  align-self: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

// const SubTitles = styled.p`
//   font-size: 20px;
//   font-weight: bold;
//   padding-left: 15px;
//   margin-top: 30px;
// `;

const DisplayModeText = styled.div`
  align-self: center;
  margin-top: 40px;
  margin-bottom: 50px;
  width: 92%;
  max-width: 1200px;
  font-size: 20px;
  padding: 10px;
  border: 3px solid black;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border: 1px solid black;
  width: 92%;
  max-width: 1000px;
  /* border-radius: 3px; */
`;

const TenPxSpacer = styled.div`
  height: 10px;
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
