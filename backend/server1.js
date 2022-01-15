const express = require('express')
const app = express()
const cors = require('cors')
const routerEmp1 = require('./routes/emp1')

app.use(express.json())

app.use(cors('*'))

app.use('/emp',routerEmp1)

app.listen(4000,'0.0.0.0',()=>{
    console.log("server started on 4000")
})