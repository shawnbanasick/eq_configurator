import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";

const Scale5Question = () => {
  return (
    <Image
      alt="scale 5 question"
      src="data:image/png;base64,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"
    />
  );
};

export default view(Scale5Question);

const Image = styled.img`
  width: clamp(500px, 75vw, 1300px);
`;
