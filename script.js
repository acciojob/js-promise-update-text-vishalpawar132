//your JS code here. If required.
function updateText() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

const outputElement = document.getElementById("output");

updateText()
  .then((text) => {
    outputElement.textContent = text;
  })
  .catch((error) => {
    console.error(error);
  });
