const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;
const adminroute = require('./route/adminroute');
//const connect = require('./config/connection');
// app.get('/',(req,res)=>{
//     res.send('<h1>Sucessful</h1>')
// })
//app.use(express.json());
app.use(bodyparser.json());
app.use('/',adminroute);

//set views
app.set('views',path.join(__dirname,'views'));


//set view engine

app.set('view engine','ejs')
app.use(bodyparser.urlencoded({extended:false}))

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
