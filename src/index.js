require('dotenv').config();
const express = require('express');




const app = express()

app.get('/',(req,res) =>{
    res.status(200).send('<h1>hello,om</h1>')
})


const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server run on port" + " " + port);
});