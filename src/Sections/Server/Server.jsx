import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import { toast } from "react-toastify";
import { ToastContainer, Slide } from "react-toastify";
import eqClickSaveFiles from "../../assets/images/htmlq-download-link.png";
import mobileClickSaveFiles from "../../assets/images/mobile-download-link.png";

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
  const data = await dialog
    .showOpenDialog(mainWindow, {
      properties: ["openDirectory"],
    })
    .then((result) => {
      console.log(result.canceled);
      console.log(result.filePaths);

      if (result.canceled === false) {
        appState.userSelectedFilePath = result.filePaths;
        ipcRenderer.send("get-file-path", result.filePaths);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(data);
};

const Server = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  let showHtmlqContent;
  let showMobileContent;
  let nameDisplay;
  const configurationTarget = appState.configurationTarget;
  if (configurationTarget !== "easyHtmlq") {
    showMobileContent = true;
    showHtmlqContent = false;
    nameDisplay = "EQ Mobile";
  } else {
    showMobileContent = false;
    showHtmlqContent = true;
    nameDisplay = "Easy HtmlQ";
  }

  return (
    <MainContent>
      <StyledToastContainer />
      <GlobalStyle />
      <Title>Testing Server Start-up</Title>
      {displayMode && (
        <div>
          {showHtmlqContent && (
            <>
              <DisplayModeText>
                The first step is to download the base files for Easy HTMLQ and
                save them to an accessible place on your computer (for example,
                to the "Desktop" folder). To download, go to the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/shawnbanasick/easy-htmlq"
                >
                  Easy HTMLQ
                </a>{" "}
                home page and click the download link. The files will be in a
                compressed format (*.zip), so don't forget to{" "}
                <b>
                  <i>decompress</i>
                </b>{" "}
                them.
              </DisplayModeText>
              <SpacerDiv />
              <img src={eqClickSaveFiles} width="90%" alt="a" />
            </>
          )}

          {showMobileContent && (
            <>
              <DisplayModeText>
                The first step is to download the base files for EQ Mobile and
                save them to an accessible place on your computer (for example,
                to the "Desktop" folder). To download, go to the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/shawnbanasick/eq-mobile"
                >
                  EQ Mobile
                </a>{" "}
                home page and click the download link. The files will be in a
                compressed format (*.zip), so don't forget to{" "}
                <b>
                  <i>decompress</i>
                </b>{" "}
                them.
              </DisplayModeText>
              <SpacerDiv />
              <img src={mobileClickSaveFiles} width="90%" alt="a" />
            </>
          )}

          <SpacerDiv />
          <DisplayModeText>
            To start the local web server, all you need to do is
            <strong> find the uncompressed folder </strong>with the base files.
            You don't need to select a specific file - you just need to find the
            folder.
          </DisplayModeText>
          <SpacerDiv />
        </div>
      )}

      <FindServerButton onClick={() => handleClick()}>
        Navigate to the {nameDisplay} base files folder where "index.html" is
        located
      </FindServerButton>
      <IntroText>
        After opening the folder, the configurator will find the "index.html"
        file and start the server. Copy the location below and paste it into
        your web browser's address bar.
      </IntroText>
      <ProjectLinkDiv>
        <LinkSpan>http://localhost:9990</LinkSpan>
        <LinkCopyButton onClick={copyText}>Click Here to Copy</LinkCopyButton>
      </ProjectLinkDiv>
      {displayMode && (
        <DisplayModeText>
          The <b>default project files</b> will now load in your browser. The
          project is not on the internet - it is being hosted from your
          computer, and you're accessing it from the browser on your machine.
          However, after you set up your Firebase file, this demo project will
          save completed Q sort data to the Firebase realtime database.
          <br />
          <br />
          So, you can use this local server to <b>test your complete setup</b> -
          including data upload (however, don't forget to delete any testing
          data from your Firebase location before you begin your actual
          project).
          <br />
          <br />
          The next step is to replace the <b>four settings files</b>{" "}
          (config.xml, statements.xml, map.xml, and language.xml) of the demo
          project's base files with your project's information.
        </DisplayModeText>
      )}
      <SpacerDiv />
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
  width: calc(100vw - 137px);
  box-sizing: border-box;
  max-height: calc(100vh - 3px);
  overflow: auto;
  user-select: none;

  img {
    max-width: 1000px;
    display: block;
    margin: auto;
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
  font-size: 5vw;
  width: 70vw;
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
  height: auto;
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 22px;
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
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 22px;
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
  width: 78vw;
  max-width: 1200px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
`;

const SpacerDiv = styled.div`
  margin-bottom: 50px;
`;
