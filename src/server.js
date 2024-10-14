const exp=require("express")
const app=exp()
app.listen(3500,()=>console.log("server is listening on port 3500"))
let cors=require('cors')
app.use(cors())
const path=require('path')
app.use(exp.static(path.join(__dirname,'./build')))

const mclient=require("mongodb").MongoClient
mclient.connect('mongodb://127.0.0.1:27017').then((dbRef)=>{
    const dbObj=dbRef.db('Job')
    const userCollectionObj=dbObj.collection('Job Collection')
    app.set('userCollectionObj',userCollectionObj)
    console.log("Database connection successful")
}).catch(err=>console.log("err is",err))
const userApp=require("./APIs/userApi")
app.use('/user-api',userApp)


const InvalidPathmiddleware=(request,response,next)=>{
    response.send({message:"invalid path"})

}
app.use("*",InvalidPathmiddleware)

const errorHandlingMiddleware=(error,request,response,next)=>{
    response.send({message:error.message});
}
app.use(errorHandlingMiddleware)