const express = require('express')
const userRouter = require('./routes/CreateUser');
const dataRouter = require('./routes/DisplayData');
const cors = require('cors');

const app = express();
const port = 3030;
const connectToMongo = require('./db');
connectToMongo();

app.use(cors());
app.use(express.json())
app.use('/api', userRouter)
app.use('/api',dataRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})