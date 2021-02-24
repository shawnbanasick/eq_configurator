import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
// import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";

const Server = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Upload Your Files to the Web</Title>

      <IntroText>
        The next step is to <strong>upload</strong> your files to a web server.
        There are a number of choices. Here I recommend either{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/">
          Github
        </a>{" "}
        or{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netlify.com/"
        >
          Netlify
        </a>
        .
      </IntroText>
      <SpacerDiv />
      <SpacerDiv />
      <IntroText>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/">
          Detailed instructions for uploading to Github
        </a>{" "}
      </IntroText>
      <SpacerDiv />
      <SpacerDiv />
      <IntroText>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/">
          Detailed instructions for uploading to Netlify
        </a>{" "}
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
  width: calc(100vw - 137px);
  box-sizing: border-box;
  max-height: calc(100vh - 3px);
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

const SpacerDiv = styled.div`
  height: 10px;
`;
