import { addUserServices } from "../services/userService.js";
import { userValidator } from "../validators/user.vlaidators.js";
import bcrypt from 'bcrypt'



export const userRegister =async(req, res)=>{
    const{username, password,email}=req.body;
    const{error}=userValidator({username, password,email});
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    else{
         try {

            const salt =await bcrypt.genSalt(10);
            const hashPwd=await bcrypt.hash(password,salt);
            const newUser ={username:username, password:hashPwd, email:email}
            const  response =await addUserServices(newUser);
    
            if(response.message){
                return res.status(500).json({error:response.message})
            }
            else{
                return res.status(201).json({message:'user created succcessfully'})
            }
            
         } catch (error) {
            return res.status(200).json({message:error.message})
         }
    }
}