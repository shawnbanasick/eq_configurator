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
      <Title>Related Software</Title>

      <WebLinkDiv1>
        <p class="link4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/shawnbanasick/easy-htmlq"
          >
            Easy HTMLQ Base Files
          </a>
        </p>
        <p class="link4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/shawnbanasick/kade"
          >
            KADE (Q methhodology Analysis Software)
          </a>
        </p>
      </WebLinkDiv1>
      {/* <WebLinkDiv1>
        <StyledAnchor
          className="sixth before after"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shawnbanasick/kade/wiki"
        >
          User Manual
        </StyledAnchor>
      </WebLinkDiv1>
      <WebLinkDiv1>
        <StyledAnchor
          className="sixth before after"
          target="_blank"
          rel="noopener noreferrer"
          href="https://shawnBanasick.github.io/ken-q-analysis/index.html"
        >
          Ken-Q Analysis <br /> Web Application
        </StyledAnchor>
      </WebLinkDiv1>
      <WebLinkDiv1>
        <StyledAnchor
          className="sixth before after"
          target="_blank"
          rel="noopener noreferrer"
          href="https://shawnbanasick.github.io/ken-q-data/index.html"
        >
          Ken-Q Data
        </StyledAnchor>
      </WebLinkDiv1> */}
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
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  width: calc(100vw - 137px);
  box-sizing: border-box;
  max-height: calc(100vh - 23px);
  overflow: auto;
  user-select: none;
`;

const StyledAnchor = styled.a``;

const WebLinkDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  /* grid-area: linkboxRow1; */
  /* height: 100px; */
  width: 80%;
  /* display: grid;
  justify-content: right; */
  font-size: 22px;
  margin-right: 3px;
  margin-left: 50px;
  margin-bottom: 3px;
  /* text-align: center; */
  user-select: none;
  line-height: 1.2;

  .link4 a {
    padding-bottom: 1px;
    text-decoration: none;
    color: #000;
    box-shadow: inset 0 -4px 0 rgba(13, 190, 152, 0.7);
    transition: background-color 0.25s ease-out;
    margin-left: 5px;
  }

  .link4 a:hover {
    background-color: rgba(13, 190, 152, 0.7);
    padding-top: 2px;
    box-shadow: none;
  }
`;

const WebLinkDiv2 = styled.div`
  display: flex;
  /* grid-area: linkboxRow2; */
  height: 100px;
  width: 480px;
  /* display: grid;
  align-items: center;
  justify-content: left; */
  font-size: 22px;
  margin-right: 3px;
  margin-bottom: 3px;
  text-align: center;
  user-select: none;
  line-height: 1.2;
`;

const WebLinkDiv3 = styled.div`
  display: flex;
  /* grid-area: linkboxRow3; */
  height: 100px;
  width: 480px;
  /* display: grid;
  align-items: center;
  justify-content: right; */
  font-size: 22px;
  margin-right: 3px;
  margin-bottom: 3px;
  text-align: center;
  user-select: none;
  line-height: 1.2;
`;

const WebLinkDiv4 = styled.div`
  display: flex;
  /* grid-area: linkboxRow4; */
  height: 50px;
  width: 480px;
  /* display: grid;
  align-items: center;
  justify-content: left; */
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
  /* width: 900px; */
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 5vw;
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
