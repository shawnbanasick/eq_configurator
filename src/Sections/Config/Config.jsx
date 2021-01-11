import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from '../../Utils/GeneralButton';
import exportToXml from '../../Utils/exportToXml';


const handleClick = () => {
    console.log("clicked");

    const data = `
    <config version="1.0" htmlParse="false">

      <!-- title of the study -->
      <item id="studyTitle">Name of your study</item>

      <!-- text-align property(left|right) -->
      <item id="textAlign">left</item>

      <item id="日本語">left</item>

    </config>
      `

      exportToXml("config.xml", data);

  };

const Config = () => {
  return (
    <MainContent>
        <GlobalStyle />
        <Title>Config.xml</Title>
        <h3>Options</h3>
        <ol>
            <li>Title of the Study</li>
            <li>text align property (left | right)</li>
            <li>shuffle cards (true | false)</li>
        </ol>
    <GeneralButton onClick={() => handleClick()}>Download Config.xml file</GeneralButton>
    </MainContent>
  );
};

export default view(Config);

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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 130px 20px 350px 200px 1fr;
  grid-template-areas:
    "row1"
    "row2"
    "row3"
    "row4"
    "row5"
    "row6";
  justify-items: left;
  align-items: center;
  background-color: white;
  visibility: ${props => (props.view ? "hidden" : "visible")};
  animation: ${props => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  width: calc(100vw - 140px);
  box-sizing: border-box;
  max-height: calc(100vh - 23px);
  padding-left: 50px;
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
