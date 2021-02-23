import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { useTranslation } from "react-i18next";
import { view } from "@risingstack/react-easy-state";
import styled, { css } from "styled-components";
import Start from "./Sections/Start/Start";
import Config from "./Sections/Config/Config";
import Statements from "./Sections/Statements/Statements";
import Map from "./Sections/Map/Map";
import Language from "./Sections/Language/Language";
import Firebase from "./Sections/Firebase/Firebase";
import Server from "./Sections/Server/Server";
import Github from "./Sections/Github/Github";
import Weblinks from "./Sections/Weblinks/Weblinks";
import Styles from "./Sections/Styles/Styles";
import appState from "./GlobalState/appState";
import ErrorBoundary from "./Utils/ErrorBoundary";
import indicateDataButtonColor from "./Sections/Start/indicateDataButtonColor";
import "./Utils/UserSelectionSwitch.css";

const handleClick = (target) => {
  const activeWindow = appState.activeWindow;
  // console.log(activeWindow);
  appState[activeWindow] = false;
  appState[target] = true;
  // console.log(target);
  appState.activeWindow = target;
};

const App = (props) => {
  const [t] = useTranslation();

  const {
    viewStart,
    viewConfig,
    viewStatements,
    viewMap,
    viewLanguage,
    viewFirebase,
    viewServer,
    viewWeblinks,
    viewStyles,
    viewGithub,
  } = appState;

  const { isDataButtonGreen, hasUnforcedBeenConfirmed } = appState;

  // const isForcedQsortPattern = inputState;

  // let showUpdateModal = appState.showUpdateModal;

  // const installedVersion = appState.version;
  // const updateVersion = appState.updateVersion;

  // getState
  const inputButtonColor = appState.isInputButtonGreen
    ? "var(--main-theme-color)"
    : "#d6dbe0";
  const correlationsButtonColor = appState.isCorrelationsButtonGreen
    ? "var(--main-theme-color)"
    : "#d6dbe0";
  const factorsButtonColor = appState.isFactorsButtonGreen
    ? "var(--main-theme-color)"
    : "#d6dbe0";
  const rotationButtonColor = appState.isRotationButtonGreen
    ? "var(--main-theme-color)"
    : "#d6dbe0";
  const loadingsButtonColor = appState.isLoadingsButtonGreen
    ? "var(--main-theme-color)"
    : "#d6dbe0";
  // const outputButtonColor = appState.isOutputButtonGreen
  //   ? "var(--main-theme-color)"
  //   : "#d6dbe0";

  let showTopBar = false;
  // if (process.platform === "darwin") {
  //   showTopBar = true;
  // }

  return (
    <AppWrap active={showTopBar}>
      {showTopBar ? <Header>KADE</Header> : null}
      <ErrorBoundary>
        <Split>
          <FilesWindow>
            <StartButton
              active={viewStart}
              onClick={() => handleClick("viewStart")}
            >
              <p className="title">Start</p>
            </StartButton>
            <FileButton
              buttonColor={inputButtonColor}
              active={viewServer}
              onClick={() => handleClick("viewServer")}
            >
              <p className="title">{`1. ${t("Server")}`}</p>
            </FileButton>
            <FileButton
              buttonColor={inputButtonColor}
              active={viewConfig}
              onClick={() => handleClick("viewConfig")}
            >
              <p className="title">{`2. ${t("Config")}`}</p>
            </FileButton>
            <FileButton
              buttonColor={indicateDataButtonColor(
                isDataButtonGreen,
                hasUnforcedBeenConfirmed
              )}
              active={viewStatements}
              onClick={() => handleClick("viewStatements")}
            >
              <p className="title">{`3. ${t("Statements")}`}</p>
            </FileButton>
            <FileButton
              buttonColor={correlationsButtonColor}
              active={viewMap}
              onClick={() => handleClick("viewMap")}
            >
              <p className="title">{`4. ${t("Map")}`}</p>
            </FileButton>
            <FileButton
              buttonColor={factorsButtonColor}
              active={viewLanguage}
              onClick={() => handleClick("viewLanguage")}
            >
              <p className="title">{`5. ${t("Language")}`}</p>
            </FileButton>
            <FileButton
              buttonColor={loadingsButtonColor}
              active={viewStyles}
              onClick={() => handleClick("viewStyles")}
            >
              <p className="title">{`6. ${t("Styles")}`}</p>
            </FileButton>

            <FileButton
              buttonColor={rotationButtonColor}
              active={viewFirebase}
              onClick={() => handleClick("viewFirebase")}
            >
              <p className="title">{`7. ${t("Firebase")}`}</p>
            </FileButton>
            <FileButton
              buttonColor={rotationButtonColor}
              active={viewGithub}
              onClick={() => handleClick("viewGithub")}
            >
              <p className="title">{`8. ${t("Github")}`}</p>
            </FileButton>
            <Spacer />
            <FileButton
              buttonColor={loadingsButtonColor}
              style={{ textAlign: "center" }}
              active={viewWeblinks}
              onClick={() => handleClick("viewGithub")}
            >
              <p className="title">{`${t("Related Software")}`}</p>
            </FileButton>
          </FilesWindow>
          <ActionWindow>
            {viewStart && <Start view={viewStart} />}
            {viewConfig && <Config view={viewConfig} />}
            {viewServer && <Server view={viewServer} />}
            {viewStatements && <Statements view={viewStatements} />}
            {viewMap && <Map view={viewMap} />}
            {viewLanguage && <Language view={viewLanguage} />}
            {viewFirebase && <Firebase view={viewFirebase} />}
            {viewStyles && <Styles view={viewStyles} />}
            {viewGithub && <Github view={viewGithub} />}
            {viewWeblinks && <Weblinks view={viewWeblinks} />}
            {/*{viewProjectHistory && <ProjectHistory view={viewProjectHistory} />}
            {viewHelp && <Help view={viewHelp} />}
            {viewLicense && <License view={viewLicense} />}
            {viewClearProject && <ClearProject view={viewClearProject} />} */}
          </ActionWindow>
        </Split>
      </ErrorBoundary>
    </AppWrap>
  );
};

export default view(App);

const Header = styled.header`
  box-sizing: border-box;
  display: grid;
  background-color: black;
  font-family: Helvetica;
  color: #d6dbe0;
  font-size: 1rem;
  height: 23px;
  align-items: center;
  text-align: center;
  position: fixed;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  -webkit-app-region: drag;
  user-select: none;
`;

const AppWrap = styled.div`
  box-sizing: border-box;
  font-family: Helvetica;
  height: 100vh;
  width: 100vw;
  ${({ active }) =>
    active &&
    css`
      margin-top: 23px;
    `};
`;

const Split = styled.div`
  box-sizing: border-box;
  display: flex;
`;

const FilesWindow = styled.div`
  box-sizing: border-box;
  background: #d6dbe0;
  width: 135px;
  min-width: 135px;
  height: 100vh;
  overflow: hidden;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
`;

const ActionWindow = styled.div`
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background-color: white;
  height: 99.85vh;
  flex: 1;
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  overflow: auto;
`;

// background: #191324;

// hover -> border-left: solid 8px #d6dbe0;
// active -> border-left: solid 8px #d6dbe0;
// border-bottom: solid 1px #302b3a;
// border-bottom: solid 1px gray;
const FileButton = styled.button`
  box-sizing: border-box;
  padding: 10px;
  padding-bottom: 8px;
  padding-top: 15px;
  width: 100%;
  height: auto;
  background: ${(props) => props.buttonColor || "#d6dbe0"};
  color: black;
  border: none;
  text-align: left;
  transition: 0.3s ease all;
  outline: none !important;
  user-select: none;

  &:hover {
    opacity: 1;
    box-shadow: inset 0 0 0 4px #666, 0 0 1px transparent;
  }

  ${({ active }) =>
    active &&
    `
    background-color: white;
    opacity: 1;
    `};

  .title {
    font-weight: bold;
    font-size: 0.9rem;
    margin: 0 0 5px;
    color: black;
  }
`;

// border-bottom: solid 1px gray;
// ${props => props.width};

const StartButton = styled.button`
  box-sizing: border-box;
  height: 45px;
  padding: 5px;
  padding-right: 25px;
  width: 100%;
  background-color: var(--main-theme-color);
  border: none;
  text-align: center;
  transition: 0.3s ease all;
  outline: none !important;
  user-select: none;

  .title {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 5px 0 5px;
    color: black;
  }

  &:hover {
    opacity: 1;
    box-shadow: inset 0 0 0 4px #666, 0 0 1px transparent;
  }

  ${({ active }) =>
    active &&
    `
    background-color: white;
    opacity: 1;
    .title {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 5px 0 5px;
    color: black;
  } 
    `};
`;

// const NoUpdateSpacer = styled.button`
//   box-sizing: border-box;
//   padding: 10px;
//   width: 100%;
//   height: 75px;
//   background: #d6dbe0;
//   color: black;
//   border: none;
//   text-align: left;
//   transition: 0.3s ease all;
// `;

const Spacer = styled.div`
  margin-top: 50px;
`;
