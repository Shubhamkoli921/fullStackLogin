import express from "express"
import cors from 'cors'
import mongoose from 'mongoose'

// const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// mongoose.connect("mongodb://localhost:27017/myLoginRegisterDb",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },()=>{
//     console.log("dbconnected")
// })
mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected!"));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("User", userSchema)

//Routes

app.get("/", (req, res) => {
    res.send("home");
})
app.post("/login", (req, res) => {
    const {email ,password} = req.body
    User.findOne({email:email})
    .then(user =>{
        if(user){
            if(password===user.password){
                res.send({message:"login succesful",user:user})
            }
            else{
                res.send({message:"password is incorrect"})
            }
        }
        else{
            res.send({message:"user not found"})
        }
    })

})

app.post("/register", (req, res) => {
    // console.log(req.body)
    const { name, email, password } = req.body  
    
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                res.send({ message: "user already registered" })
            }
            else {
                const user = new User({
                    name,
                    email,
                    password
                })
                user.save().then(err=>{
                    if (err) {
                        res.send(err)
                    }
                    else {
                        res.send({ message: "successfully Registered" })
                    }
                })
            }
        })
})

app.listen(9002, () => {
    console.log("server started at port 9002")
})

