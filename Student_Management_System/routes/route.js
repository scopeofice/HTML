const express=require('express');
const route=express.Router();
const c=require('../db/dbconnections');

//display data for the first time using index.ejs we render
route.get('/',function(req,resp){
    c.query('select * from student',(err,data,field)=>{
        if(err){
            resp.status(500).send('data not present');
        }else{
            resp.render('index',{student:data})//index.ejs
        }
    })
});

//dispalay form is the on click unction of index.ejs to add new entry
//here the index.ejs is displayed and it has a add student button

//form where you will enter new entry
route.get('/displayform',function(req,resp){
    resp.render('add-student');//add-student.ejs
});

route.get('/edit/:sid',function(req,resp){
    c.query('select * from student where sid=?',[req.params.sid],(err,data,field)=>{// query, params
        if(err){
            resp.status(500).send('failed'+JSON.stringify(err));
        }else{
            resp.render('update-student',{student:data[0]});// update detail page with index of the student in read only state
        }//render is done where you are sending data and redirect it used to go to home page
    })
});


route.get('/delete/:sid',function(req,resp){
    c.query('delete from student where sid=?',[req.params.sid],(err,data,field)=>{
        if(err){
            resp.status(500).send('unable to delete'+JSON.stringify(err));
        }else{
            resp.redirect('/');
        }
    })
});

route.post('/update-student',function(req,resp){//update-student.ejs
    var sid=req.body.sid;
    var sname=req.body.sname;
    var marks=req.body.marks;
    c.query('update student set sname=?,marks=? where sid=?',[sname,marks,sid],(err,data,field)=>{
        if(err){
            resp.status(500).send('data not added'+JSON.stringify(err));
        }else{
            resp.redirect('/');
        }
    })
});
route.post('/insert-student',function(req,resp){
    var sid=req.body.sid;
    var sname=req.body.sname;
    var marks=req.body.marks;
    c.query('insert into student values(?,?,?)',[sid,sname,marks],(err,data,field)=>{
        if(err){
            resp.status(500).send('data not added');
        }else{
            resp.redirect('/');
        }
    })
});

module.exports=route;
