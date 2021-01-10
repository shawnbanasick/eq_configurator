import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
// import "./anchorStyling.css";
import GlobalStyle from "../../Utils/GlobalStyle";
// import heroImage from "../../assets/kade-hero-image.png";
// import TranslationAttribution from "./TranslationAttribution";

const Statements = () => {
  return (
    <MainContent>
        <GlobalStyle />
        <Title>Statements Settings</Title>
    </MainContent>
  );
};

export default view(Statements);

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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 170px 130px 30px 10px 200px 1fr;
  grid-template-areas:
    "row1 row1 row1 row1"
    "weblinkRow weblinkRow weblinkRow weblinkRow"
    "rule rule rule rule"
    "linkboxRow1 linkboxRow1 linkboxRow2 linkboxRow2"
    "linkboxRow3 linkboxRow3 linkboxRow4 linkboxRow4"
    "translation translation translation translation";
  justify-items: center;
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
