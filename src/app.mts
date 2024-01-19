import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {router as studentRouter} from './mongodb/routes/student.router.mjs'; 
dotenv.config();


// connect to  MongoDb

const MongoDb_Connnection_String = `mongodb://localhost`;
async function connectToMongoDB(connectionString: string){
    await mongoose.connect(connectionString);
    console.log('Connected to MongoDB database');

}


try{
    await connectToMongoDB(MongoDb_Connnection_String);

} catch (e) {
    console.log('Failed to connect to MongoDB database:', e);

}

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(cookieParser());

app.use('/api', studentRouter);

app.get('/', (req, res)=> {

    res.status(200).send('Hello World')

});


app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`);
})
