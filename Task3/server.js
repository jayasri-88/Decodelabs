require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/itemRoutes'));
app.get('/', (req, res) => {
    res.json({ message: "Inventory API running " });
});
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});