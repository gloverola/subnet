import express from 'express';
import { PORT } from './config/env';
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Subnet API');
});

app.listen(PORT, () => {
  console.log(`Subnet API is running on http://localhost:${PORT}`);
});

export default app;
