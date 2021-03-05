import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

const server = express();

server.use(bodyParser.json({ limit: "30mb", exceeded: true}));
server.use(bodyParser.urlencoded({ limit: "30mb", exceeded: true }));
server.use(cors())

server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD || "Per aspera ad astra"
    res.send(`<h2>${messageOfTheDay}</h2>`)
})

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.eventNames.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(PORT, () => console.log(`Mongo Connection successful. Server running on port: ${PORT}`)))
    .catch((error) => console.log(`${error}: did not connect`))