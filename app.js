const express = require('express');
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/user');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(userRouter);


app.listen(port, ()=>{
    console.log("port is listening");
})
