function updateText() {
  return new Promise((resolve, reject) => {
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

