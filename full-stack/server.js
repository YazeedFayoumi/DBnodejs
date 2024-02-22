// const express =  require('express')
// var cros=require('cros')
// var app=express()
// app.use(cros)
// app.listen(9000,function(){
//     console.log(`Server is running on port 8000.`);

// })C:\Users\user\Documents\GitHub\DBnodejs\full-stack\server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Start server" });
});

app.get("/getData", (req, res) => {
    res.json({ name:"Yazeed" ,age:"20", field:"Software Engineering" });
  });

app.get("/getPrice", (req, res) => {
    res.json({price1:"545" ,
        price2:"868",
        price3:"932" ,
        price4:"345"});
});

app.listen(8003, () => {
  console.log(`Server is running on port 8003.`);
});


