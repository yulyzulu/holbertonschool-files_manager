const express = require('express');

const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware de body parser
app.use(express.json());

// Routes
routes(app);

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});

export default app;
