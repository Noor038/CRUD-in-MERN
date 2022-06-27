import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb://Noor:12345@ac-yomqcw4-shard-00-00.jecwzlb.mongodb.net:27017,ac-yomqcw4-shard-00-01.jecwzlb.mongodb.net:27017,OEL APP?ssl=true&replicaSet=atlas-yf120f-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
       
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;