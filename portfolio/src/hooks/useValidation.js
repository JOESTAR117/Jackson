import { useState } from "react";

const useValidation = (validateForm) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inFieldValid = validateForm(value);
  const inputHasError = isTouched && !inFieldValid;

  return {value, isTouched, setValue, setIsTouched, inputHasError};
};

export default useValidation;
