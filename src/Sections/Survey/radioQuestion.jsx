import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";

const radioQuestion = () => {
  return (
    <Image
      alt="radio question"
      src="data:image/png;base64,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"
    />
  );
};

export default view(radioQuestion);

const Image = styled.img`
  width: clamp(500px, 75vw, 1300px);
`;
