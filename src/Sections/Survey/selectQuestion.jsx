import React from "react";

const FactorImage = () => {
  return (
    <img
      style={{ width: "80vw" }}
      alt="text question (age)"
      src="data:image/png;base64,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"
    />
  );
};

export default FactorImage;
