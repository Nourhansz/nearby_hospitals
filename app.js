const requestIp = require('request-ip');
var http = require('http');
var ip = require('ip');

const express = require('express');
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/user');
const port = process.env.PORT || 3000;

const app = express();
//app.set('trust proxy', true);
app.enable('trust proxy');
// app.set('trust proxy', (ip) => {
//   if (ip === '127.0.0.1' || ip === '123.123.123.123') return true // trusted IPs
//   else return false
// })

app.use(express.json());
app.use(userRouter);

app.get('/', (req, res) => {
    //res.send("hello");
    //res.send(requestIp.getClientIp(req));
    // res.redirect('/login');
    //    const idAddress = req.header('x-forwarded-for') || req.remoteAddress;
    //     console.log(idAddress);
    address = ip.address();
    res.send(address);
})

app.listen(port, () => {
    console.log("port is listening");
})
