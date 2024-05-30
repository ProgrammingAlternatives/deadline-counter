import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

var cors = require('cors');

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());
// Load the initial deadline from environment variable or use a default value
let deadline = new Date(process.env.DEADLINE || '2024-06-01T00:00:00Z').getTime();

// Get the remaining seconds to the deadline
app.get('/api/deadline', (req: Request, res: Response) => {
  const now = Date.now();
  const secondsLeft = Math.max(Math.floor((deadline - now) / 1000), 0);
  res.json({ secondsLeft, deadline });
});

// Set a new deadline
app.post('/api/deadline', (req: Request, res: Response) => {
  const { newDeadline } = req.body;
  
  if (!newDeadline || isNaN(Date.parse(newDeadline))) {
    return res.status(400).json({ error: 'Invalid date format' });
  }

  deadline = new Date(newDeadline).getTime();
  res.json({ message: 'Deadline updated successfully' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
