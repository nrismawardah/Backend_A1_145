const express = require('express');
const dotenv = require('dotenv');
const proyekRoutes = require('./routes/proyekRoutes');
const tugasRoutes = require('./routes/tugasRoutes');
const timRoutes = require('./routes/timRoutes');
const anggotaRoutes = require('./routes/anggotaRoutes');

dotenv.config();

const app = express();
app.use(express.json()); // Untuk parsing JSON body

const cors = require('cors');
app.use(cors());

// Routes
app.use('/api/proyek', proyekRoutes);
app.use('/api/tugas', tugasRoutes);
app.use('/api/tim', timRoutes);
app.use('/api/anggota', anggotaRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
