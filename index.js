const express = require('express')
const app =express()
const port =process.env.PORT || 5000;

const categorires =require('./data/categories.json');

app.get('/',(req, res) =>{
    res.send('News API');
})

app.get('/course-categories',(req,res) =>{
    res.send(categorires)
})

app.listen(port,() =>{
    console.log('Running')
})