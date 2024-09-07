import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import connectDB from './db/database.connection.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const app = express();

app.use(cors({
  origin: '*', // Adjust this as needed for security
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Configure session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



import authRouter from './routes/auth.routes.js'

//routes declaration
app.use('/api/auth',authRouter);


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });
