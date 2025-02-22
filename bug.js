const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // This line might throw an error if something goes wrong
    const result = someFunctionThatMightThrow();
    res.send('Hello from Express!');
  }, 1000);
});

function someFunctionThatMightThrow() {
  // Simulate a scenario where an error might occur
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Success';
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});