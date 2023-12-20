import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dallRoutes from './routes/dalle.routes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));

app.use('/api/v1/dalle', dallRoutes);

app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from DALL.E"})
})

app.listen(8080, () => console.log('Server has started on port 8080'));