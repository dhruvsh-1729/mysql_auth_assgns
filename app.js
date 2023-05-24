require('dotenv').config();
const express = require('express')
const app = express();
const indexRouter = require('./routes/index')
const cors=require('cors')
const port = 3000;

app.use(cors())
app.use(express.json())

app.use('/api', indexRouter);  

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
});
