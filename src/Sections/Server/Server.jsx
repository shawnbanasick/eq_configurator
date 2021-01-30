import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import { toast } from "react-toastify";
import { ToastContainer, Slide } from "react-toastify";
const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;
const { dialog } = require("electron").remote;
const { remote } = require("electron");
const mainWindow = remote.getCurrentWindow();

const copyToClipboard = (value) => {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
};

const notifySuccess = () => {
  toast.success("Address Copied", {
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

const copyText = () => {
  try {
    copyToClipboard("http://localhost:9990");
    notifySuccess();
  } catch (e) {
    notifyError();
  }
};

const handleClick = async () => {
  // console.log("clicked");

  const data = await dialog
    .showOpenDialog(mainWindow, {
      properties: ["openDirectory"],
    })
    .then((result) => {
      console.log(result.canceled);
      console.log(result.filePaths);
      if (result.canceled === false) {
        appState.userSelectedFilePath = result.filePaths;
        return result.filePaths;
      }
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(data);
  ipcRenderer.send("get-file-path", data);
};

const Server = () => {
  const beginnerDisplay = appState.beginnerDisplayMode;
  return (
    <MainContent>
      <StyledToastContainer />
      <GlobalStyle />
      <Title>Server Startup</Title>
      {beginnerDisplay && (
        <IntroText>
          The first step is to <strong>download</strong> the base files for Easy
          HTMLQ (available <a href="">here</a>) and save them to an easily
          accessible place on your computer (for example, to the "Desktop"
          folder). The files are in a compressed format (*.zip), so don't forget
          to uncompress them.
        </IntroText>
      )}
      <IntroText>
        The configurator has a built-in server. This will allow you to
        immediately see the changes you make to your files as you make them. To
        start the server, all you need to do is
        <strong> find the uncompressed folder </strong>with the Easy HTMLQ base
        files. You dont't need to select a specific file - you just want to find
        the folder and then click "open".
      </IntroText>
      <FindServerButton style={{ width: "78vw" }} onClick={() => handleClick()}>
        Navigate to the HTMLQ base files folder &nbsp;&nbsp; &gt;&gt;&gt;
        &nbsp;&nbsp; index.html should be visible.
      </FindServerButton>
      <IntroText>
        After opening the folder, the configurator will find the "index.html"
        file and start the server. Copy the location below and paste it into
        your web browser's address bar.
      </IntroText>
      <ProjectLinkDiv>
        <LinkSpan>http://localhost:9990</LinkSpan>
        <LinkCopyButton onClick={copyText}>Copy to Clipboard</LinkCopyButton>
      </ProjectLinkDiv>
      <IntroText>
        The default Easy HTMLQ demo project will now load in your browser. The
        project is not on the internet - it is being hosted from your computer,
        and you are accessing it from the browser on your machine. However,
        after you set up your Firebase file, this demo project will save
        completed sort data to Firebase. So you can use this to test your
        complete setup - including data upload. It is important to remember to
        delete any testing data from your Firebase location before you begin
        your actual project.
      </IntroText>
    </MainContent>
  );
};

export default view(Server);

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
  font-size: 5vw;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;

const IntroText = styled.span`
  font-size: 2vw;
  align-self: center;
  width: 70vw;
  padding: 15px;
  /* border: 2px solid red; */
`;

const FindServerButton = styled(GeneralButton)`
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.2em;
`;

const ProjectLinkDiv = styled.div`
  display: inline-flex;
  /* flex-direction: row; */
  justify-content: center;
  gap: 10px;
`;

const LinkSpan = styled.span`
  font-size: 2vw;
  align-self: center;
  width: auto;
  font-weight: bold;
  padding: 15px;
  /* margin-right: 10px; */
  /* border: 2px solid red; */
`;
const LinkCopyButton = styled(GeneralButton)`
  align-self: center;
  height: 50px;
  /* margin-left: 10px; */
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.2em;
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
