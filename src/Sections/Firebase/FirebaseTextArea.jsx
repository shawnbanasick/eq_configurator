import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";

const handleChange = (event) => {
  let infoInput = event.target.value;
  appState.currentFirebaseInfo = infoInput;

  // prevent empty text error
  if (infoInput.length !== 0 && infoInput !== null && infoInput !== undefined) {
    const info = `<script>`;
    const info1 = `  firebase.initializeApp(firebaseConfig);`;
    const info2 = `  var rootRef = firebase.database().ref();`;
    const info3 = `  </script>;`;

    const firebaseConfigText = info + infoInput + info1 + info2 + info3;

    console.log(firebaseConfigText);
    appState.firebaseInfo = firebaseConfigText;
  }
};

const FirebaseTextArea = () => {
  return (
    <Container>
      <label>Paste Firebase information: </label>
      <StatementTextsInput
        type="textarea"
        name="textValue"
        value={appState.currentFirebaseInfo || ""}
        onChange={handleChange}
      />
    </Container>
  );
};

export default view(FirebaseTextArea);

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
