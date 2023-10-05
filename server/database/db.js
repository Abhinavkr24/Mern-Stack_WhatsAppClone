import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection=async()=>{

    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-eowkz2i-shard-00-00.1ehpyut.mongodb.net:27017,ac-eowkz2i-shard-00-01.1ehpyut.mongodb.net:27017,ac-eowkz2i-shard-00-02.1ehpyut.mongodb.net:27017/?ssl=true&replicaSet=atlas-xdy1t1-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log('Database connected successfully');
    } catch (error) {
          console.log('error while connecting with the database',error.message);
    }
}
export default Connection;