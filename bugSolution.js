const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    try {
      const result = someFunctionThatMightThrow();
      res.send('Hello from Express!');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
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