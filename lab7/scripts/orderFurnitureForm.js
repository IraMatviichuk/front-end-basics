const form = document.getElementById("order-form");

const REGEXPS = {
  product: (product) => /\w+/i.test(product),
  material: (material) => /\w+/i.test(material),
  itemsNumber: (itemsNumber) =>
    parseInt(itemsNumber) > 0 && parseInt(itemsNumber) <= 10,
};

const ERRORS = {
  product: {
    errorTagId: "error-product",
    errorMessage: "Select an option",
  },
  material: {
    errorTagId: "error-material",
    errorMessage: "Select an option",
  },
  itemsNumber: {
    errorTagId: "error-items-number",
    errorMessage: "Enter a number from 1 to 10",
  },
};

function getFormInputs() {
  const { product, material, itemsNumber } = form;
  return {
    product: product.value,
    material: material.value,
    itemsNumber: itemsNumber.value,
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

function onOrderSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    form.action = "../orderResult.php";
  }
}
