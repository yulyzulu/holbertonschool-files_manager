const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware of body parser
app.use(bodyParser.json());

// Routes
app.use('/', router);
app.use('/status', router);
app.use('/stats', router);

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});

export default app;
