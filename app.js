require('dotenv').config();
require('express-async-errors');

// Express
const express = require('express');
const app = express();

// database
const connectDB = require('./db/connect');

// middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('E-Commerce API');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, console.log(`Server is listening at ${port}...`));
    } catch (error) {
        console.error(error);
    }
};

start();
