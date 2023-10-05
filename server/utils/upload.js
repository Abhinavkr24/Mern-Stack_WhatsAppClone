import multer from 'multer';
import pkg from 'multer-gridfs-storage';
import dotenv from 'dotenv';

const {GridFsStorage} = pkg;
dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const storage=new pkg({
    url: `mongodb://${USERNAME}:${PASSWORD}@ac-eowkz2i-shard-00-00.1ehpyut.mongodb.net:27017,ac-eowkz2i-shard-00-01.1ehpyut.mongodb.net:27017,ac-eowkz2i-shard-00-02.1ehpyut.mongodb.net:27017/?ssl=true&replicaSet=atlas-xdy1t1-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options:{useUnifiedTopology:true,useNewUrlParser:true},
    file:(request,file)=>{
        const match=["image/jpg","image/png"];
        if(match.indexOf(file.mimeType)===- 1){
            return`${Date.now()}-file-${file.originalname}`;
        }
        return {
            bucketName:"photos",
            fileName:`${Date.now()}-file-${file.originalname}`
        }
    }
});

export default multer({storage});