const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const porta = 3001;
const product = require("./routes/product");



app.use(express.json());
app.use(morgan("dev"));
app.use(cors());



app.use('/product', product);

app.listen(porta, () => {
  console.log("Nova porta atualizada " + porta);
});