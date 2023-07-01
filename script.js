function delayHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000); // Resolve after 1 second
  });
}

// Update text after the promise resolves
delayHello()
  .then((message) => {
    const outputElement = document.getElementById("output");
    outputElement.textContent = message;
  })
  .catch((error) => {
    console.error(error);
  });
