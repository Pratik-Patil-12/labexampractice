const express = require('express')
const cors = require('cors')
const routerEmp2 = require('./routes/emp2')

const app = express()

app.use(express.json())

app.use(cors('*'))

app.use('/emp2',routerEmp2)

app.listen(4000,'0.0.0.0',()=>{
    console.log('server started on 4000')
})