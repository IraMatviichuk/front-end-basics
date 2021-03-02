const form = document.getElementById("form");

const REGEXPS = {
  fullName: /[a-zA-Z ]{5,30}/i,
  group: /^[a-z]{2}-\d{2}$/i,
  variant: /^([1-9]{1}|[1-2][0-9]|[3][0-5])$/i,
  phone: /^(\+?38)?\d{10}$/i,
  email: /^([a-z0-9\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})$/i,
};

const ERRORS = {
  fullName: {
    errorTagId: "error-full-name",
    errorMessage: "Invalid fullName",
  },
  group: {
    errorTagId: "error-group",
    errorMessage: "Invalid group",
  },
  variant: {
    errorTagId: "error-variant",
    errorMessage: "Invalid variant",
  },
  phone: {
    errorTagId: "error-phone",
    errorMessage: "Invalid phone",
  },
  email: {
    errorTagId: "error-email",
    errorMessage: "Invalid email",
  },
};

function getFormInputs() {
  const { fullName, group, variant, phone, email } = form;
  return {
    fullName: fullName.value,
    group: group.value,
    variant: variant.value,
    phone: phone.value,
    email: email.value,
  };
}

function validateForm() {
  let isValid = true;
  const formInputs = getFormInputs();

  Object.entries(formInputs).forEach(([fieldName, fieldValue]) => {
    let errorMessage = "";
    if (!REGEXPS[fieldName].test(fieldValue)) {
      errorMessage = ERRORS[fieldName].errorMessage;
      isValid = false;
    }

    document.getElementById(
      ERRORS[fieldName].errorTagId
    ).innerHTML = errorMessage;
  });

  return isValid;
}

function onMouseDown() {
  if (validateForm()) {
    const { fullName, group, variant, phone, email } = getFormInputs();
    window.location.href = `formInput.html?fullName=${fullName}&group=${group}&variant=${variant}&phone=${phone}&email=${email}`;
  }
}
