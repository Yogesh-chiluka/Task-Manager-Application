import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import connectDB from './db/database.connection.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { ApiResponse } from './utils/ApiResponse.js';

dotenv.config({ path: './.env' });

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN, // Adjust this as needed for security
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
import taskRouter from './routes/task.routes.js'

//routes declaration
app.use('/api/auth',authRouter);
app.use('/api',taskRouter);


app.get('/api', (req, res) => {
   res.status(200).json(
    new ApiResponse(200,"OK")
)
});
 

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });
