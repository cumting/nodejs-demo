const express=require('express');
const mysql=require('mysql');

var db=mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'test'});

module.exports=function (){
  var router=express.Router();
router.get("/",(req,res)=>{
 res.redirect("index.html")
});

  router.get('/getbase', (req, res)=>{
    db.query('SELECT * FROM base', (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        res.send(data).end();
      }
    });
  });
  router.get('/getsuper', (req, res)=>{
    db.query('SELECT * FROM super', (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        res.send(data).end();
      }
    });
  });

  return router;
};
