const { request, response } = require('express')
const express = require('express')
const db = require('../db')
const utils =  require("../utils")
const router = express.Router()

router.get('/',(request,response)=>{
    console.log("nusti practice 1")
})