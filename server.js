import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoute from './routes/authRoute.js';
import cors from 'cors';
dotenv.config();

//rest object
const app = express();

//databse config
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoute);

//rest API
app.get('/', (req, res) => {
  res.send('<h1>Welcome to eCommerce App</h1>');
});

//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
