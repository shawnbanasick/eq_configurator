import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import "./anchorStyling.css";
import GlobalStyle from "../../Utils/GlobalStyle";
// import heroImage from "../../assets/kade-hero-image.png";
// import TranslationAttribution from "./TranslationAttribution";

const Start = () => {
  return (
    <MainContent>
        <GlobalStyle />
        <Title>Easy HTMLQ Configurator</Title>
      <WebLinkRow>
        <h1>web links:</h1>
        <Rule />
      </WebLinkRow>
      <WebLinkDiv1>
        <StyledAnchor
          className="sixth before after"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shawnbanasick/kade"
        >
          Home Page
        </StyledAnchor>
      </WebLinkDiv1>
      <WebLinkDiv2>
        <StyledAnchor
          className="sixth before after"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shawnbanasick/kade/wiki"
        >
          User Manual
        </StyledAnchor>
      </WebLinkDiv2>
      <WebLinkDiv3>
        <StyledAnchor
          className="sixth before after"
          target="_blank"
          rel="noopener noreferrer"
          href="https://shawnBanasick.github.io/ken-q-analysis/index.html"
        >
          Ken-Q Analysis <br/> Web Application
        </StyledAnchor>
      </WebLinkDiv3>
      <WebLinkDiv4>
        <StyledAnchor
          className="sixth before after"
          target="_blank"
          rel="noopener noreferrer"
          href="https://shawnbanasick.github.io/ken-q-data/index.html"
        >
          Ken-Q Data
        </StyledAnchor>
      </WebLinkDiv4>
    </MainContent>
  );
};

export default view(Start);

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

const StyledAnchor = styled.a``;

const MainContent = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 270px 130px 30px 10px 200px 1fr;
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

const WebLinkDiv1 = styled.div`
  display: flex;
  grid-area: linkboxRow1;
  height: 100px;
  width: 480px;
  display: grid;
  align-items: center;
  justify-content: right;
  font-size: 22px;
  margin-right: 3px;
  margin-bottom: 3px;
  text-align: center;
  user-select: none;
  line-height: 1.2;
`;

const WebLinkDiv2 = styled.div`
  display: flex;
  grid-area: linkboxRow2;
  height: 100px;
  width: 480px;
  display: grid;
  align-items: center;
  justify-content: left;
  font-size: 22px;
  margin-right: 3px;
  margin-bottom: 3px;
  text-align: center;
  user-select: none;
  line-height: 1.2;
`;

const WebLinkDiv3 = styled.div`
  display: flex;
  grid-area: linkboxRow3;
  height: 100px;
  width: 480px;
  display: grid;
  align-items: center;
  justify-content: right;
  font-size: 22px;
  margin-right: 3px;
  margin-bottom: 3px;
  text-align: center;
  user-select: none;
  line-height: 1.2;
`;

const WebLinkDiv4 = styled.div`
  display: flex;
  grid-area: linkboxRow4;
  height: 50px;
  width: 480px;
  display: grid;
  align-items: center;
  justify-content: left;
  font-size: 22px;
  margin-right: 3px;
  margin-bottom: 3px;
  text-align: center;
  user-select: none;
  line-height: 1.2;
`;

const WebLinkRow = styled.div`
  align-items: center;
  grid-area: weblinkRow;
  width: 900px;
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
    font-size: 80px;
    width: 80vw;
   align-items: center;
   justify-content: center;
`;

// const ImageContainer = styled.div`
//   display: grid;
//   align-items: center;
//   justify-content: center;
//   grid-area: row1;
// `;

// const Image = styled.img`
//   align-items: center;
//   justify-content: center;
//   width: 600px;
// `;

const Rule = styled.hr`
  grid-area: rule;
`;
