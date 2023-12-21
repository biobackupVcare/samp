const express =require('express')

const app = express()

const cors = require('cors')
const port = 8000

app.use(express.json())

app.use(cors())

app.get('/',(req,res)=>{
    res.send("helloworld")
})

app.get('/hello',(req,res)=>{
    res.send("sdmklnfdls")
})
app.get('/lo',(req,res)=>{
    res.send("hello world good morning")
})
app.get('/rakesh',(req,res)=>{
    res.send("first go world")
})

app.listen(port,()=>{
    console.log('nvkngf')
})
