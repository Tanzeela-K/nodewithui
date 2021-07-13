const db = require('../config/connection');

exports.insert=(req,res)=>{
    data={name:req.body.name,email:req.body.email,phone:req.body.phone};
    let sql = 'INSERT INTO users SET ?';
    db.query(sql,data,(err,result)=>{
        if(err){
            console.log('Failed' +err)
            res.json({
                status:400,
                msg:'failed',
                error :err
            })
        }else{
            console.log('Sucessfully inserted data');
            console.log(result)
            
            //res.render('/')
        }
    })
}

exports.select=(req,res)=>{
    let sql = 'select * from users';
    db.query(sql,(err,result)=>{
        if(err){
           // console.log('Failed' +err)
            res.json({
                status:400,
                msg:'failed',
                error:err
            })
        }else{
            //console.log('Sucessfully inserted data');
            res.render('user_index', {
                title : 'CRUD Operation using NodeJS / ExpressJS / MySQL',
                users : result
            })
        }
    })
}

exports.selectById=(req,res)=>{
    let userId =req.parms.userId;
    let sql = `select * from users where id = ${userId}`;
    db.query(sql,(err,result)=>{
        if(err){
           // console.log('Failed' +err)
            res.json({
                status:400,
                msg:'failed',
                error:err
            })
        }else{
            //console.log('Sucessfully inserted data');
            res.json({
                status:200,
                msg:'Sucessfullt added',
                data:result
            })
        }
    })
}

exports.update = (req,res)=>{
    let userId = req.body.id;
    let sql = "update users set name='"+req.body.name+"',email='"+req.body.email+"',phone = '"+req.body.phone+"' where id = " +userId;
    db.query(sql,(err,result)=>{
        if(err){
           // console.log('Failed' +err)
            res.json({
                status:400,
                msg:'failed',
                error:err
            })
        }else{
            //console.log('Sucessfully inserted data');
            res.json({
                status:200,
                msg:'Sucessfullt added',
                data:result
            })
        }
    })
}

exports.delete = (req,res)=>{
    let userId = req.parms.id;
    let sql = `Delete from users where id = ${userId} `;
    db.query(sql,(err,result)=>{
        if(err){
           // console.log('Failed' +err)
            res.json({
                status:400,
                msg:'failed',
                error:err
            })
        }else{
            //console.log('Sucessfully inserted data');
            res.json({
                status:200,
                msg:'Sucessfullt added',
                data:result
            })
        }
    })
}