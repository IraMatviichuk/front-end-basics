const productSelect = document.getElementById("product");
const materialSelect = document.getElementById("material");

const productsOptions = [
  "стіл",
  "крісло",
  "ліжко",
  "диван",
  "канапе",
  "кушетка",
  "софа",
  "шезлонг",
  "стілець",
  "табурет",
  "шафи",
  "секретер",
  "сервант",
  "буфет",
  "полиця",
  "етажерка",
  "стелаж",
  "тумбочка",
  "комод",
  "трильяж",
  "трюмо",
  "ширма",
  "вішалка",
];

const materialOptions = [
  "сосна",
  "ялина",
  "дуб",
  "граб",
  "ясень",
  "бук",
  "модрина",
  "кедр",
  "тис",
  "береза",
  "клен",
  "вільха",
  "волоський горіх",
  "біла акація",
  "липа",
  "вишня",
];

productsOptions.forEach((productOption, index) => {
  let option = document.createElement("option");
  option.value = index;
  option.innerText = productOption;
  productSelect.appendChild(option);
});

materialOptions.forEach((materialOption, index) => {
  let option = document.createElement("option");
  option.value = index;
  option.innerText = materialOption;
  materialSelect.appendChild(option);
});
