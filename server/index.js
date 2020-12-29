const path = require('path');
const express = require('express');

const app = express();
const port = 3031;

const staticPath = path.join(__dirname, '../src');

app.use(express.static(staticPath));
app.listen(port, () => {
  console.log(`Server ready in http://localhost:${port}/`);
});
