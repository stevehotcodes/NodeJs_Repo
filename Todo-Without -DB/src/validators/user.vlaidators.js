import joi from 'joi';



export const userValidator=(user)=>{
    const userValidator=joi.object({
        username:joi.string().min(3).required()
    })

    return userValidator.validate(user)
}