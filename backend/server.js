const express = require('express');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const feedbackRoutes = require('./routes/feedbackRoutes');
const authRoutes = require('./routes/authRoutes'); // <-- this too if used

dotenv.config();
const app = express();

const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",
  "https://feed-back-form-cc24.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes); 

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(" MongoDB connected"))
.catch((err) => console.error(" MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
