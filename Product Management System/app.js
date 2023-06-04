const express=require('express');
const app=express();
const path=require('path');
const bodyparser=require('body-parser');
const r=require('./router/routers');

//middleware
app.use(bodyparser.urlencoded({extended:false}));

//configuration
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.set(express.static(path.join(__dirname,'public')))

//finding css and js folder
app.use('/css',express.static(path.join(__dirname,'public/css')))
app.use('/js',express.static(path.join(__dirname,'public/js')))
app.use('/image',express.static(path.join(__dirname,'public/image')))

//handle url
app.use('/',r)

//start server
app.listen(3008,function(){
    console.log('server 3008')
})
module.exports=app;