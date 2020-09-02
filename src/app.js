const fs =require('fs');
const path =require('path');
const express=require('express');
const app=express();
const path=require('path')

path.join('H:\NodeExpress-BankingPortal\src\views')
path.join(__dirname,'views')

app.use(express.static('public'))

app.set('view engine','ejs')

app.get('/',(req,res,)=>{
    res.render('index',{title: 'Index'})
});

var server=app.listen(3000,()=>{
    console.log('PS Project Running on port 3000!');
});