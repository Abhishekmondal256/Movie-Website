const dotenv=require('dotenv');

const mongoose=require('mongoose');
const express=require('express');
const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());
//middleware
// const User=require('./model/userSchema');
app.use(require('./router/auth'));
app.use('/public',express.static('public'));
const PORT=process.env.PORT;

const middleware=(req,res,next)=>{

  next();  

}


app.use(middleware);


app.get('/',(req,res)=>{
res.send("hello word from server");

});
app.get('/signin',(req,res)=>{
res.send("signin done");

});
app.get('/signup',(req,res)=>{
    res.send("signup done");
    
    });
app.get('/about',middleware,(req,res)=>{
        res.send("about page");
        
        });

app.listen(5000,()=>{
    console.log(`server running at port  5000`);
})