import { PrismaClient } from '@prisma/client'


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

    }
}
  