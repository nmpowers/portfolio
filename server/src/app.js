import express from 'express';
import cors from 'cors';
import projectRoutes from './routes/projectRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);

//fallback
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

export default app;