import {poolRequest ,sql}from '../utils/dbConnect.'

export const getTodoSService=async()=>{
    try {

        const result=await poolRequest.query(`SELECT *FROM tbl_todo `);
        console.log(result)
        return result.recordset
        
    } catch (error) {
        return error.message
    }
}