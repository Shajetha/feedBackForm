const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const feedbackRoutes = require('./routes/feedbackRoutes');
const authRoutes = require('./routes/authRoutes'); // <-- this too if used

dotenv.config();
const app = express();

const allowedOrigins = [
  'http://localhost:5173',                       // for local testing
  'https://feed-back-form-cc24.vercel.app'      // your actual deployed frontend
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // if using cookies/auth headers
}));

app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes); 

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(" MongoDB connected"))
.catch((err) => console.error(" MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
