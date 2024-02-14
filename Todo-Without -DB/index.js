import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import logger from './src/utils/logger.js'
import todoRouter from './src/routes/todo.router.js'
dotenv.config()


const app =express();
const port =process.env.PORT || 3000;

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//routes

app.use('/api',todoRouter)

app.get('/health',(req,res)=>{
    res.status(200).send('I am very health');
})

app.listen(port,()=>{
    logger.info("server running on ",port)
});