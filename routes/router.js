const express = require('express')

// create router for express
const router = new express()

const userController = require('../Controller/userController')

router.post('/login',userController.adminLogin)
