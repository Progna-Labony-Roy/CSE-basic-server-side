const express = require('express')
const app =express();
const cors = require('cors');
const port =process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const details =require('./data/details.json')

app.get('/',(req, res) =>{
    res.send('News API');
})

app.get('/courses',(req,res) =>{
    res.send(courses)
})

app.get('/details',(req,res) =>{
    res.send(details)
})

app.get('/course/:id',(req,res) =>{
    const id =req.params.id;
    const course=details.find(n =>n.course_id === id);
    res.send(course)
})

app.get('/course/:id',(req,res) =>{
    const id =req.params.id;
    const course=details.find(n =>n.course_id === id);
    res.download(course)
})

app.get('/details/:id',(req,res) =>{
    const id= req.params.id;
    const selectedCourse = details.find (c => c._id ===id);
    res.send(selectedCourse);
})

app.listen(port,() =>{
    console.log('Running')
})