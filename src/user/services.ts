import { PrismaClient } from '@prisma/client'
import messages from "../services/messages.json";


const prisma = new PrismaClient()

export default{
    createUser:(req:any,res:any)=>{
        return new Promise(async (resolve, reject) => {
            try {
                const { email, name} = req.body
                const user = await prisma.user.create({
                    data: {
                      email,
                      name
                    },
                  })

                if (user) {
                    return resolve({
                        status: 200,
                        error: false,
                        result: user,
                        code: "USER_CREATED",
                        message:"USER_CREATED"
                    })
                }
                else {
                    return reject({
                        status: 400,
                        error: true,
                        code: "USER_CREATE_FAILED",
                        message: "USER_CREATE_FAILED"

                    })
                }

            } catch (err) {
                console.log(err, "<<--[USER 001] Error in contacts create")
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR"

                })
            }
        })

    },
    getAllUser:(req:any,res:any)=>{
        return new Promise(async(resolve,reject)=>{
            try{
                const getuser=await prisma.user.findMany()
                console.log(getuser,"getUser")
                if(getuser){
                    return resolve({
                        status: 200,
                        error: false,
                        result: getuser,
                        code: "USER_FOUND",
                        message: messages["USER_FOUND"]
                    })
                }else{
                    return reject({
                        status: 404,
                        error: true,
                        code: "USER_NOT_EXISTS",
                        message:"USER_NOT_EXISTS"
                    })
                }

            }catch(err){
                return reject({
                        status: 500,
                        error: true,
                        result: err,
                        code: "INTERNAL_SERVER_ERROR",
                        message: "INTERNAL_SERVER_ERROR"
                })
    
            }

        })
   
    }
}
  