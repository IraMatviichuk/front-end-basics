const form = document.getElementById("calculator-form");

const REGEXPS = {
  angle: (angle) => parseInt(angle) >= 0 && parseInt(angle) <= 90,
  functionType: (functionType) => /^sin|cos|tan$/i.test(functionType),
};

const ERRORS = {
  angle: {
    errorTagId: "error-angle",
    errorMessage: "Enter angle from 0 to 90",
  },
  functionType: {
    errorTagId: "error-function-type",
    errorMessage: "Select an option",
  },
};

function getFormInputs() {
  const { angle, functionType } = form;
  return {
    angle: angle.value,
    functionType: functionType.value,
  };
}

function validateForm() {
  let isValid = true;
  const formInputs = getFormInputs();

  Object.entries(formInputs).forEach(([fieldName, fieldValue]) => {
    let errorMessage = "";
    if (!REGEXPS[fieldName](fieldValue)) {
      errorMessage = ERRORS[fieldName].errorMessage;
      isValid = false;
    }

    document.getElementById(
      ERRORS[fieldName].errorTagId
    ).innerHTML = errorMessage;
  });

  return isValid;
}

function onCalculatorSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    console.log("valid");
    const { angle, functionType } = getFormInputs();
    const radians = angle * (Math.PI / 180);
    const expression = `Math.${functionType}(${radians})`;
    const result = eval(expression);

    document.getElementById(
      "result-expression"
    ).innerText = `${functionType}(${angle}°)=${result}`;
  }
}
