// task1
const rowTitle = document.getElementById("title");
let rowName;
const rowGroup = document.getElementById("group");

// властивість document.all є застарілою, тому я використала метод querySelectorAll("*"), що дозволяє отримати аналогічні дані
const allElements = document.querySelectorAll("*");
allElements.forEach((item) => {
  if (item.tagName === "P") {
    rowName = item;
  }
});

rowTitle.style.color = "black";
rowTitle.style.backgroundColor = "yellow";
rowName.style.color = "red";
rowName.style.backgroundColor = "white";
rowGroup.style.color = "black";
rowGroup.style.backgroundColor = "yellow";

const changeFirstStyle = (element) => {
  const { color, backgroundColor } = element.style;
  element.style.color = color === "black" ? "white" : "black";
  element.style.backgroundColor =
    backgroundColor === "yellow" ? "blue" : "yellow";
};

const changeSecondStyle = (element) => {
  const { color, backgroundColor } = element.style;
  element.style.color = color === "red" ? "white" : "red";
  element.style.backgroundColor =
    backgroundColor === "white" ? "green" : "white";
};

rowTitle.addEventListener("click", () => changeFirstStyle(rowTitle));
rowName.addEventListener("click", () => changeSecondStyle(rowName));
rowGroup.addEventListener("click", () => changeFirstStyle(rowGroup));

// task2
const caption = document.getElementById("caption");
const image = document.querySelector("img");
caption.style.color = "black";
image.style.width = "500px";

caption.addEventListener("click", () => {
  caption.style.color = caption.style.color === "black" ? "red" : "black";
  image.style.width = image.style.width === "500px" ? "900px" : "500px";
});
