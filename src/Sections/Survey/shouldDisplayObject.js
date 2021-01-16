const shouldDisplayObject = () => {
  const shouldDisplay = {
    text: {
      required: true,
      label: true,
      note: true,
      maxlength: true,
      restricted: true,
      scale: false,
      options: false,
      bg: false,
    },
    textArea: {
      required: true,
      label: true,
      note: false,
      maxlength: false,
      restricted: false,
      scale: false,
      options: false,
      bg: false,
    },
    rating2: {
      required: true,
      label: true,
      note: false,
      maxlength: false,
      restricted: false,
      scale: true,
      options: true,
      bg: false,
    },
    rating5: {
      required: true,
      label: true,
      note: false,
      maxlength: false,
      restricted: false,
      scale: false,
      options: false,
      bg: false,
    },
  };
  return shouldDisplay;
};

export default shouldDisplayObject;
