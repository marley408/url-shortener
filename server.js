const express = require('express');
const connectDB = require('./config/db');
const authRoute = require('./routes/auth');
const linkHistory = require('./routes/linkHistory');
const cors = require('cors');

const app = express();

// connect to db
connectDB();

app.use(
  cors({
    origin: 'https://admiring-kepler-c78b23.netlify.com/',
    credentials: true
  })
);
// allows us to accept json data into our API
app.use(express.json({ extended: true }));

// define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));
app.use('/api/user', authRoute);
app.use('/api/user', linkHistory);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
