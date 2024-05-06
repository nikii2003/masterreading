import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(express.json());

const PORT = 5000 || process.env.PORT ;

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if(conn){
        console.log("mongodb connected !")
    }
}
connectDB()

app.get("/", (req,res)=>{
    res.json(
       {
        massage:"hello there!"
       }
    )
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
