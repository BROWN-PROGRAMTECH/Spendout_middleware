const dotenv = require('dotenv').config()
const express = require('express')
 const mongoose = require("mongoose");
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

//THE CODE BELOW IS AN EXAMPLE OF ROUTE MIDDLEWARE DEFINITION
// const userRoute = require("./routes/userRoute");
// const projectRoute = require("./routes/projectRoute");
//const path = require("path");

//middleware
app.use(express.json()) //handle json data in the app
app.use(express.urlencoded({extended:true})) //handle data come from url
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(express.static(__dirname));

//Routes Middleware go here(THE BELOW BLOCK OF CODE IS AND EXAMPLE OF ROUTE MIDDLEWARE) 
// app.use("/api/users", userRoute)
// app.use('/api/project', projectRoute)
// app.use('/api/service', serviceRoute) 
// app.use('/api/experience', experienceRoute)
// app.use('/api/testimony', testimonialsRoute)

//routes
app.get('/', (req, res) => {
    res.send('home page')
})

//Mongo database connexion configuration
 const PORT = process.env.PORT || 5000
mongoose.set('strictQuery', true)
 app.listen(PORT, () => {
        console.log(`Mongo server is running on port ${PORT}. Good Job!`)
 })


mongoose
  .connect(process.env.MONGO_URI, {
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));