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

app.listen(port,()=>{
    console.log('nvkngf')
})
