const { response, request } = require('express')
const express = require('express')
const db = require('../db')
const utils = require('../utils')
const router = express.Router()

router.get('/all',(request,response)=>{
    const connection = db.openConnection()
    const query = `SELECT * FROM emp`
    connection.query(query,(error,data)=>{
        connection.end()
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    })
})

router.post('/add',(request,response)=>{
    const {name,salary,age} = request.body
    const connection = db.openConnection()
    const query = 
    `INSERT INTO emp 
        (empid,name,salary,age)
    VALUES
        (default,'${name}','${salary}','${age}')`
    connection.query(query,(error,data)=>{
        connection.end()
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    })
})

router.patch('/edit/:id',(request,response)=>{
    const {salary} = request.body
    const {id} = request.params
    const connection = db.openConnection()
    const query = `UPDATE emp SET salary = '${salary}' WHERE empid = '${id}'`
    connection.query(query,(error,data)=>{
        connection.end()
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    }) 
})

router.delete('/delete/:id',(request,response)=>{
    const {id} = request.params
    const connection = db.openConnection() 
    const query = `DELETE FROM emp WHERE empid = '${id}'`
    connection.query(query,(error,data)=>{
        connection.end()
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    })
})

module.exports = router