export const addUserServices =async(newUser)=>{
    try {
         const result=await poolRequest()
         
         .input('username',sql.VarChar, newUser.username)
         .input('username',sql.VarChar, newUser.username)
         .input('username',sql.VarChar, newUser.username)
         .query('INSERT INTO tbl_user(username,password,email) VALUES (@username,@password,@email)');
         return result
    } catch (error) {
        return error
    }

}

export const findUserCredentialsService =async(username,password)=>{

}