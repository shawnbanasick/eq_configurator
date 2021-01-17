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