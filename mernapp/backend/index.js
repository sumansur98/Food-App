const express = require('express')
const userRouter = require('./routes/CreateUser');


const app = express()
const port = 5173;
const connectToMongo = require('./db');
connectToMongo();

app.use(express.json())
app.use('/api', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})