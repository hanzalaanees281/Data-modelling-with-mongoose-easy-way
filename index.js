import 'dotenv/config'
import express from "express";


const app = express();


app.get('/', (req, res)=>{
    res.send('hello')
});

const port = process.env.PORT;


app.listen(port, ()=>{
console.log(`server at http://localhost:${port}`);
})