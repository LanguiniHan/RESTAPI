import express  from "express";
import bodyParser from 'body-parser';

import usersRouts from './Routes/user.js';

const app= express();
const PORT=5001;

app.use(bodyParser.json());
app.use('/user', usersRouts);

app.get('/',(req,res)=>{
    console.log('[TEST]!');
    res.send('Hello from Home From Group 1 of SS1314(wbd)');
});

app.listen(PORT,()=>console.log(`Server Running On port: http://localhost:${PORT}`));