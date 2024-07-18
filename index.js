require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
require('./db/connection');
const app = express()
const user = require("./Model/userSchema");
const upload = require('./multerConfig/config')

const userController = require('./Controller/userController')
const reportController = require('./Controller/reportController')
app.use('/uploads', express.static('uploads'));
//PORT definition
PORT = 3001 || process.env.PORT  //static || dynamically
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

function myMiddleware(req, res, next) {
    // Middleware logic
    next();
}

app.use(myMiddleware);
app.listen((PORT), () => {
    console.log(`app is running on port ${PORT}`);
})

// request resolving
app.get('/', (req, res) => {
    console.log(req.file);
    res.send('Get Request');
})

// for api testing do not use for web application
app.post('/status', async (req, res) => {
    const { id } = req.body;
    try {
        const adminDetails = await user.findOne({ _id: id })
        console.log(adminDetails);
        if (!adminDetails) return res.status(404).json("no found")
        return res.status(201).json(adminDetails)
    }
    catch (err) {
        return res.status(501).json(err);
    }
})
// api for login
app.post('/login', userController.adminLogin)
// for report accident report
app.post('/registerReport',
    upload.single('image'),
    reportController.addReport)
// for listing all report default sort order
app.get('/allreport', reportController.allreport)