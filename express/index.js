import express from 'express';
import bodyparser from 'body-parser'

const app =express()

const port =8000;
app.use(bo)
app.get('/health',(req,res)=>{
   res.status(200).send('I am healthy 💪');
})

// app.use('/',(req,res)=>{
//     res.status(200).send('This is root dir')
// })
app.use(express.static('public'))
app.use('/images', express.static('images'));

//get -with next()

app.get('/go-next',(req,res,next)=>{
    console.log("My first function");
    next()
},(req,res)=>{
    console.log("I am the function");
    res.status(200).json("I am the next function")
}
)


//get -download method 
app.get('/download',(req,res)=>{
    res.download('./public/images(1).jpeg')
})

app.post('/download',(req, res)=>{
    console.log(req.body)
})



app.listen(port, ()=>{
    console.log(`Express is running on http://localhost:${port}`);
})