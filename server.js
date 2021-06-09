const express = require('express');

const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

//routes
routes(app);

app.listen(PORT, function() {
  console.log(`Listening http://localhost:${PORT}`);
});

export default app;
