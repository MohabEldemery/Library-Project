import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import cookieParser from "cookie-parser"
import  "./db.js"
import { AdminRouter } from "./routes/auth.js"
import { studentRouter } from "./routes/student.js"
import { bookRouter } from "./routes/book.js"
import { Book } from "./models/Books.js"
import { Student } from "./models/Student.js"
import { Admins } from "./models/Admins.js"

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth',AdminRouter)
app.use('/student', studentRouter)
app.use('/book',bookRouter)

app.get('/dashboard', async (req,res)=>{
    try {
        const students= await Student.countDocuments()
        const admin= await Admins.countDocuments()
        const book= await Book.countDocuments()
        return res.json({ok: true, students,book,admin})
    } catch (error) {
        return res.json(err)
    }
})

app.listen(process.env.PORT, ()=>{
    console.log("Server is running");
})