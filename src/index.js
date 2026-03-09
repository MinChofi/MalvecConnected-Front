import express from"express";
import router from "./routes/index.js";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hol111pus')
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
