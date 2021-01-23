import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import UserSelectionSwitch from "../../Utils/UserSelectionSwitch";
import RadioButtons from "../../Utils/RadioButtons";
import UserTextInput from "../../Utils/UserTextInput";
// import generateConfigXml from "../Config/generateConfigXml";

const Language = () => {
  return (
    <MainContent>
      <GlobalStyle />
      <Title>Language Settings</Title>
      <h3>Button Label Language</h3>
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
      />{" "}
      <UserTextInput
        label="Help me!"
        stateId="langBtnHelp"
        sectionName="lang"
        width={25}
        left={0}
      />{" "}
      <UserTextInput
        label="Agree"
        stateId="langBtnAgree"
        sectionName="lang"
        width={25}
        left={0}
      />{" "}
      <UserTextInput
        label="Neutral"
        stateId="langBtnNeutral"
        sectionName="lang"
        width={25}
        left={0}
      />{" "}
      <UserTextInput
        label="Disagree"
        stateId="langBtnDisagree"
        sectionName="lang"
        width={25}
        left={0}
      />{" "}
      <UserTextInput
        label="Submit data"
        stateId="langBtnSubmit"
        sectionName="lang"
        width={25}
        left={0}
      />{" "}
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
      />{" "}
      <UserTextInput
        label="Please select..."
        stateId="langBtnSelect"
        sectionName="lang"
        width={25}
        left={0}
      />
      <h3>Navigation and Error Language</h3>
      <UserTextInput
        label="Your answers will be lost."
        stateId="langExitWarning"
        sectionName="lang"
        width={25}
        left={0}
      />{" "}
      <UserTextInput
        label="Back"
        stateId="langBack"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextInput
        label="Please fill in all required fields"
        stateId="langExit"
        sectionName="lang"
        width={25}
        left={0}
      />{" "}
      <UserTextInput
        label="Please select..."
        stateId="langSelect"
        sectionName="lang"
        width={25}
        left={0}
      />
      <UserTextInput
        label="Exit"
        stateId="langBtnExit"
        sectionName="lang"
        width={25}
        left={0}
      />{" "}
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
