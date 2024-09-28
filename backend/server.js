import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { route } from './route/contact.js'; 
import './config/db.js'; 
const app = express();

app.use(bodyParser.json()); 

app.use(cors()); 

app.use('/api', route);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 


