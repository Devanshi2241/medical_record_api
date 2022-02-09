require('dotenv').config()
const express= require('express')
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser')
const cors= require('cors')
const mongoose =  require('mongoose')
const  userRoutes = require('./userRoutes.js')
const  recordRoutes = require('./recordRoutes.js')

const app=express()

app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors());

//database connection
mongoose.connect('mongodb+srv://sample-users:'+process.env.MONGO_ATLAS_PW +'@nodetask.ocv1f.mongodb.net/medical?retryWrites=true&w=majority',{
    useNewUrlParser: true
},{ useUnifiedTopology: true}) 

mongoose.Promise = global.Promise

app.use("/user", userRoutes)
app.use("/record", recordRoutes)


 const PORT = process.env.PORT
app.listen(PORT, console.log(`Your server is running at localhost:${PORT}/` ))
