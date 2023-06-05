const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const path=require('path');
const r=require('./routes/route');

app.use(bodyparser.urlencoded({extended:false}));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.set(express.static(path.join(__dirname,'public')));

app.use('/css',express.static(path.join(__dirname,'public/css')));
app.use('/image',express.static(path.join(__dirname,'public/image')));
app.use('/js',express.static(path.join(__dirname,'public/js')));

app.use('/',r);

app.listen(3016,function(){
    console.log('Server port 3016')
});

module.exports=app;