const express = require('express');
const route = express.Router();
const admincontroller = require('../controller/admincontroller');

route.get('/',admincontroller.select);
route.post('/insert',admincontroller.insert);

route.get('/selectByid/:userId',admincontroller.selectById);
route.post('/update',admincontroller.update);
route.get('/delete/:userId',admincontroller.delete);
route.get('/add',(req,res)=>{
    res.render('user_add',{
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    })
})


module.exports=route;