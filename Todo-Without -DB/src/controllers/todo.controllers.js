import data from '../data/data.json' assert {type:"json"};
import { orderData, paginate, sendNotFound, sendServerError } from '../helper/helper.function.js';
import { getTodoSService } from '../services/todoService.js';

export const getTodos=async(req,res)=>{
    try {

        const data=await getTodoSService()
        if(data.length===0){
            sendNotFound(res, 'Not todos found')

        }else{
            //paginating data
            if(!req.query.limit && !req.query.page){
                if(req.query.order){
                    res.status(200).json(orderData(data,req.query.order))
                }
                else{
                    res.status(200).json(data)
                }
            }

            else{
                if(req.query.order){ // paginating and ordering at the same time 
                    paginate(orderData(data,req.query.order),req,res)
                }
                else{
                    paginate(data,req,res)
                }
               
            }

        }
        res.status(200).json('Get all todos')
        
    } catch (error) {
        sendServerError(res,error.message)

        // console.log(error)
        
    }
}

export const createTodo=async(req,res)=>{
    res.status(201).json("create a todo")
}

// export const deleteTodo=async(req,res)=>{
    
// }