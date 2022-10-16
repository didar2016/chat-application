//external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require('./routes/loginRouter')
const inboxRouter = require('./routes/inboxRouter')
const usersRouter = require('./routes/usersRouter')

//internal imports
const {notfoundHandler, errorHandler} = require('./middleware/common/errorHandler')


const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then (()=> console.log("database connection successful"))
.catch(err=> console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname,"public")))

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//ROUTING SETUP
app.use('/', loginRouter);
app.use('/inbox', inboxRouter);
app.use('/users', usersRouter);




//ERROR HANDLING
//4o4 not found handler
app.use(notfoundHandler);
app.use(errorHandler)



//server listening
app.listen(process.env.PORT, () =>{
    console.log(`app listening to port ${process.env.PORT}`)
})