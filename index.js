import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import path from "path";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));
// app.use(express.static("node_modules"));
let fNumber = 0;
let lNumber = 0;
let operation = "";

let sumUp = (fNumber, lNumber, opt) =>{
    if (opt === "plus"){
        return fNumber + lNumber;
    }
    else if (opt === "minus"){
        return fNumber - lNumber;
    }
    else {
        return "Please Choose the right operation";
    }
}


app.get('/', (req,res)=>{
    res.render("index.ejs");
});

app.post('/submit', (req,res)=>{
    fNumber = parseInt(req.body['firstNumber']);
    lNumber = parseInt(req.body['secondNumber']);
    operation = req.body['operation'];

    let dataSumUp = sumUp(fNumber,lNumber,operation);
    res.render('index.ejs', {data : dataSumUp});
})

app.listen(port, ()=>{
    console.log(`app running at ${port} `);
})