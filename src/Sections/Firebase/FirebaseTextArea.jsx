import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";

const handleChange = (event) => {
  //   console.log(event.target.value);

  let statementInput = event.target.value;
  appState.currentStatementInput = statementInput;
  let arr = statementInput.split(/\r\n|\r|\n/g);
  let filteredArray = arr.filter(function (el) {
    return el;
  });
  const additionalInfo = `  var rootRef = firebase.database().ref();`;
  const endLine = filteredArray.pop();
  filteredArray.push(additionalInfo, endLine);
  let filteredArrayText = ``;
  for (let i = 0; i < filteredArray.length; i += 1) {
    let iterator = filteredArray[i];
    let substring1 = iterator.substring(0, 12);
    substring1 = substring1.replace(/\s/g, "");
    substring1 = substring1.substring(0, 2);
    if (substring1 !== "//") {
      filteredArrayText = filteredArrayText + iterator;
    }
  }
  // console.log(filteredArrayText);
  appState.firebaseInfo = filteredArrayText;
};

const StatementTextArea = () => {
  return (
    <Container>
      <label>Paste Firebase information: </label>
      <StatementTextsInput
        type="textarea"
        name="textValue"
        value={appState.currentStatementInput || ""}
        onChange={handleChange}
      />
    </Container>
  );
};

export default view(StatementTextArea);

const StatementTextsInput = styled.textarea`
  width: clamp(500px, 80vw, 1500px);
  height: 400px;
  margin-top: 10px;
  margin-bottom: 30px;
  user-select: all;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  user-select: all;
`;
