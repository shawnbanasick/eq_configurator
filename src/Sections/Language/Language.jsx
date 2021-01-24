import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import UserTextInput from "../../Utils/UserTextInput";
import UserTextAreaInput from "../../Utils/UserTextAreaInput";
// import appState from "../../GlobalState/appState";
import generateLanguageXml from "../Language/generateLanguageXml";

const handleClick = () => {
  const data = generateLanguageXml();

  exportToXml("language.xml", data);
};

const Language = () => {
  return (
    <MainContent>
      <GlobalStyle />
      <Title>Language Settings</Title>
      <SubTitles>Button Labels</SubTitles>
      <UserTextInput
        label="Continue..."
        stateId="langBtnContinue"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextInput
        label="Close"
        stateId="langBtnClose"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextInput
        label="Help me!"
        stateId="langBtnHelp"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextInput
        label="Agree"
        stateId="langBtnAgree"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextInput
        label="Neutral"
        stateId="langBtnNeutral"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextInput
        label="Disagree"
        stateId="langBtnDisagree"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextInput
        label="Submit data"
        stateId="langBtnSubmit"
        sectionName="lang"
        width={25}
        left={0}
      />
      {/* <UserTextInput
        label="Send via email"
        stateId="langBtnEmail"
        sectionName="lang"
        width={25}
        left={0}
      />{" "}
      <UserTextInput
        label="Print data"
        stateId="langBtnPrint"
        sectionName="lang"
        width={25}
        left={0}
      />{" "} */}
      <UserTextInput
        label="Exit"
        stateId="langBtnExit"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextInput
        label="Please select..."
        stateId="langBtnSelect"
        sectionName="lang"
        width={25}
        left={0}
      />
      <ColorContainer>
        <SubTitles>Navigation and Error Language</SubTitles>
        <UserTextInput
          label="Your answers will be lost."
          stateId="langExitWarning"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Back"
          stateId="langBack"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Please fill in all required fields"
          stateId="langReqFields"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Error"
          stateId="langError"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label={`Please maximize your browser for using this application.`}
          stateId="langMaxWindow"
          sectionName="lang"
          width={30}
          left={0}
        />
      </ColorContainer>
      <SubTitles>Welcome Screen</SubTitles>
      <UserTextInput
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
        width={65}
        height={100}
        left={0}
      />
      <ColorContainer>
        <SubTitles>User Login Screen</SubTitles>
        <UserTextInput
          label="User code"
          stateId="langUserCode"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Log in Text"
          stateId="langLogInText"
          sectionName="lang"
          width={65}
          height={100}
          left={0}
        />
        <UserTextInput
          label="User Code"
          stateId="langFormHeader"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Please insert your user code."
          stateId="langNoInput"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="User code invalid"
          stateId="langUserCodeInvalid"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Connection to server failed. Please try again."
          stateId="langServerConnectFail"
          sectionName="lang"
          width={35}
          left={0}
        />
      </ColorContainer>
      <SubTitles>Introduction (delete default text to skip popup)</SubTitles>
      <UserTextInput
        label="Introduction"
        stateId="langIntroduction"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextAreaInput
        label="Step 1 Text"
        stateId="langIntroText"
        sectionName="lang"
        width={65}
        height={100}
        left={0}
      />
      <ColorContainer>
        <SubTitles>Step 1 (delete default text to skip popup)</SubTitles>
        <UserTextInput
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
          width={65}
          height={100}
          left={0}
        />
      </ColorContainer>
      <SubTitles>Step 2 (delete default text to skip popup)</SubTitles>
      <UserTextInput
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
        width={65}
        height={100}
        left={0}
      />
      <ColorContainer>
        <SubTitles>Step 3 (delete default text to skip popup)</SubTitles>
        <UserTextInput
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
          width={65}
          height={100}
          left={0}
        />
      </ColorContainer>
      <SubTitles>Step 4 (delete default text to skip popup)</SubTitles>
      <UserTextInput
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
        width={65}
        height={100}
        left={0}
      />
      <ColorContainer>
        <SubTitles>
          Step 5 (only displayed if showStep5 is true in config.xml file -
          delete default text to skip popup)
        </SubTitles>
        <UserTextInput
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
          width={65}
          height={100}
          left={0}
        />
      </ColorContainer>
      <SubTitles>Data Transfer</SubTitles>
      <UserTextInput
        label="Submit Data"
        stateId="langTransferHead"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextInput
        label="Data transfer text"
        stateId="langTransferText"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextInput
        label="Data transfer failed"
        stateId="langTransferFailed"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextAreaInput
        label="Data transfer OK"
        stateId="langTransferOk"
        sectionName="lang"
        width={60}
        left={0}
      />
      <GeneralButton
        style={{ width: "78vw", margin: "30px" }}
        onClick={() => handleClick()}
      >
        Download statements.xml file
      </GeneralButton>
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
  box-sizing: border-box;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica, sans-serif;
  /* font-size: 18px; */
  width: calc(100vw - 140px);
  box-sizing: border-box;
  max-height: calc(100vh - 23px);
  overflow: auto;
  user-select: none;
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;

const ColorContainer = styled.div`
  background-color: #ededed;
  padding-left: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
`;

const SubTitles = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding-left: 15px;
  margin-top: 30px;
`;
