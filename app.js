const express = require('express');
const app = express();
const port = 8080;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dasol1397:1123aasz@cluster0.dqivz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=> console.log('mongodb connected'))
.catch(err => console.log(err));


app.get('/', (req,res)=> {
    res.send('hi~');
});

app.listen(port, ()=>{
    console.log('${ port } 번 포트에서 서버 실행중');
});