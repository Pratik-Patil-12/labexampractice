const express = require('express')
const db = require('../db')
const utils = require('../utils')
const router = express.Router()

router.get('/get',(error,data)=>{
    console.log("crash landing")
})