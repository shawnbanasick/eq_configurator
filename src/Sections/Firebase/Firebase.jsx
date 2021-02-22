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
      <FirebaseTextArea />
      <GeneralButton onClick={() => handleClick()}>
        Save file to <b>Easy HTMLQ folder</b> and replace "index.html" file
      </GeneralButton>
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
