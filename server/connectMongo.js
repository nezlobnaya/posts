import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()


const CONNECTION_URL = process.env.CONNECTION_URL;

export const connectDB = async () => {

    try {
        await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Mongo Connection successful')
        // server.listen(PORT, () => console.log(`Mongo Connection successful. Server running on port: ${PORT}`))
    } catch  (error) {
        console.log(`${error}:did not connect`)
    }

}




mongoose.set('useFindAndModify', false);