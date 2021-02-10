import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import exportToXml from "../../Utils/exportToXml";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import UserNumberInput from "../../Utils/UserNumberInput";

const handleClick = () => {
  const userSelectedFilePath = `${appState.userSelectedFilePath}/settings/map.xml`;
  console.log(userSelectedFilePath);
  // const data = generateMapXml();

  // exportToXml("map.xml", data);
};

const Map = () => {
  const numStatements = appState.statements.length;

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Styles</Title>
      <SettingsDiv>
        <UserNumberInput
          label="1. Font size for extra small screens (screen height less than 800px - iPad, small laptops)"
          step={1}
          value={10}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesXsFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="2. Font size for small screens (height between 800px and 899px)"
          step={1}
          value={12}
          upperLimit={100}
          lowerLimit={10}
          stateId="stylesXsFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="3. Font size for medium  screens (height between 900px and 1079px)"
          step={1}
          value={14}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesXsFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="4. Font size for large screens (height 1080px and 1199px)"
          step={1}
          value={16}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesXsFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="5. Font size for very large screens (height 1200px and 1439px)"
          step={1}
          value={18}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesXsFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="6. Font size for 4k screens (height greater than 1440px)"
          step={1}
          value={20}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesXsFontSize"
          sectionName="styles"
        ></UserNumberInput>
      </SettingsDiv>

      <DownloadMapButton
        style={{ width: "300px" }}
        onClick={() => handleClick()}
      >
        Save file to <b>stylesheets folder</b> and replace "htmlq.css"
      </DownloadMapButton>
    </MainContent>
  );
};

export default view(Map);

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

const DownloadMapButton = styled(GeneralButton)`
  width: 500px;
  /* border: 2px solid red; */
`;

const SettingsDiv = styled.div`
  margin-bottom: 30px;
`;
