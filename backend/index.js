const express = require('express');
const app = express();

const PORT = 3000; // or process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello, this is your app running on localhost!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
