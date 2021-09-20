import express from "express";
import diaryRouter from './routers/diaries';

const app = express();
app.use(express.json());

app.use('/api/diaries', diaryRouter);

app.get('/ping', (_req, res) => {
  console.log('someone Pinged here');

  res.send('flight diary backend pongs back');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});