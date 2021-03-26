import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import appState from "../GlobalState/appState";

// const clone = require("rfdc")();

const UserTextInput = (props) => {
  // props = label, stateId, sectionName, width, left
  const { t } = useTranslation();

  const newMemoryKey = `inputColor${props.stateId}`;
  let backgroundCol = appState[newMemoryKey] || "white";

  const key = `${props.stateId}`; // ${props.sectionName}

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    appState[key] = value;
    if (value.trim().length === 0) {
      appState[newMemoryKey] = "lightpink";
    } else {
      appState[newMemoryKey] = "white";
    }
  };

  return (
    <InputContainerDiv>
      <TitleSpan>{`${t(props.label)} `}</TitleSpan>
      <UserText
        tabindex="0"
        type="text"
        placeholder={props.placeholder}
        width={props.width}
        height={props.height}
        left={props.left}
        name={props.name}
        value={appState[key] || ""}
        onChange={handleChange}
        className="optionsInput"
        backCol={backgroundCol}
      />
    </InputContainerDiv>
  );
};

export default view(UserTextInput);

const UserText = styled.textarea`
  width: ${(props) => props.width + 26}%;
  height: ${(props) => props.height}px;
  margin-left: ${(props) => props.left}px;
  background-color: ${(props) => props.backCol};
  margin-top: 25px;
  padding-left: 10px;
  box-sizing: border-box;
  &:focus {
    outline: none !important;
    border: 3px solid var(--second-theme-color);
    box-shadow: 0 0 5px var(--second-theme-color);
  }
`;

const InputContainerDiv = styled.div`
  display: flex;
  margin-left: 70px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TitleSpan = styled.span`
  margin-right: 10px;
`;
