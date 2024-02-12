import express,{json} from 'express';
import bodyParser from 'body-parser'
import  todoDB from './data/Todo.json' assert {type:"json"}


const app =express();
const port=5000;
//middlewares
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    // console.log(res)
    res.status(200).json({"message":"I am an API todo"})
})

/**
 * To do CRUD OPERATIONS
 */

//GET all the todos
app.get('/todo', (req, res)=>{
      console.table(todoDB);
      res.status(200).json(todoDB)
})
//get one todo
app.get('/todo/:id',(req,res)=>{
    const{id}=req.params
    const todo =todoDB.find(todo=>todo.id==id);
    todo? res.status(200).json(todo) : res.status(404).json({"message":"todo does not exist"})
})

//get completed todos
app.get('/todo/status/:completed',(req,res)=>{
    const{completed}=req.params;
    const todo=todoDB.find(todo=>todo.completed==completed);
    todo?res.status(200).json(todo) : res.status(404).json({"message":"todo does not exist"});

})

// add  a todo

app.post('/todo/add',(req, res)=>{
    const{todo,completed}=req.body;
   if (req.body) {
    let id=todoDB.length+1
    const updatedTodoDb=todoDB.push({id,todo,completed})
    res.status(201).json(todoDB)
}
   else{
    console.log(res.body);
    res.status(404).json({"message":"There are missing parameters"})
   }
})

//update a todo by id 
app.put('/todo/:id',(req,res)=>{
    const{id}=req.params
    const{todo}=req.body
    const updatedTodo=todoDB.map((todoItem,index)=>{
        if(todoItem.id==id){
        
                todoItem.todo=todo   
            
            

            return
        }
        else{
            return ({"msg":"no updates done"})
        }

        
    })

    if(updatedTodo[0]?.msg){
     res.status(400).json({"msg":updatedTodo[0].msg})
    }
    else{
        res.status(200).json(todoDB)
    }
})

//delete the todo
app.delete ('/todo/:id',(req,res)=>{
    const{id}=req.params
    console.log(id);
    //chjeck if the di exists

    const todoBeDeleted=todoDB.find((todo)=>todo.id==id)
    

    todoBeDeleted?
    res.status(200).json({"message":"Deleted successful","data":todoBeDeleted}):res.status(400).json(todoDB)
})








app.listen(port,()=>{
    console.log(`the server is running on port http://localhost:${port}`)
})