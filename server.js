const express = require('express');
const rootRouter = require('./routers');
const { basicErrorMW } = require('./middlewares/errors/basicErrorMW');
const { PUBLIC_FOLDER_PATH } = require('./constants');

const app = express();

app.use(express.static(PUBLIC_FOLDER_PATH));

app.use(express.json());

app.use(rootRouter);

app.use(basicErrorMW);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
