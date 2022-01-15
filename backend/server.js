const express = require('express')
const routerEmp = require('./routes/emp')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors('*'))

app.use('/emp',routerEmp)

app.get('/',(request,response)=>{
    response.send('Hello from the server side')
})

app.listen(4000,'0.0.0.0',()=>{
    console.log("server started on port 4000")
})