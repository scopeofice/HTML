const express = require("express");
const router = express.Router();
const c = require("../db/db.connect");

//to go to home page and display our index page
router.get("/", function (req, resp) {
  c.query("select * from product", function (err, data, field) {
    if (err) {
      resp.status(500).send("no data found" + JSON.stringify(err));
    } else {
      resp.render("index", { productData: data });
    }
  });

  //to display
  router.get("/displayAddForm", function (req, resp) {
    resp.render("add-product");
  });

  // to add product
  router.post('/insertProduct',function(req,resp){
    var pid=req.body.pid;
    var pname=req.body.pname;
    var price=req.body.price;
    c.query('insert into product values (?,?,?)',[pid,pname,price],function(err,result){
        if(err){
            resp.status(500).send('data not added');
        }else{
            resp.redirect('/');
        }
    })
  })

  //take you to edit and update page
  router.get('/edit/:pid',function(req,resp){
    console.log('pid',req.params.pid)
    c.query('select * from product where pid=?',[req.params.pid],function(err,data,field){
        if(err){
            resp.status(500).send('data not added'+JSON.stringify(err))
        }else{
            resp.render('update-product',{product:data[0]});
        }
    })
  })
  
  //update product table
  router.post("/updateProduct",function(req,resp){
    var pid=req.body.pid;
    var pname=req.body.pname;
    var price=req.body.price;
    c.query('update product set pname=?,price=? where pid=?',[pname,price,pid],function(err,data,field){
        if(err){
            resp.status(500).send('data mot added'+JSON.stringify(err));
        }else{
            resp.redirect('/');
        }
    })
  })
  //to delete product
  router.get('/delete/:pid',function(req,resp){
    c.query('delete from product where pid=?',[req.params.pid],function(err,data){
        if(err){
            resp.status(500).send('data not deleted')
        }else{
            resp.redirect('/');
        }
    })
  })
});
module.exports=router;