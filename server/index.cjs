const express=require('express')
const cors=require('cors')
const model=require('./mongodb.cjs')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
const port=9999;
app.listen(port,(err)=>{
    if(err) throw err;
    console.log("Server Running");
})
app.get('/getUsers',(req,res)=>{
    model.find({})
    .then(result =>{
        res.json(result)
    })
    .catch(err =>res.json(err))
})

app.post('/signin',(req,res)=>{
    model.create(req.body)
    .then(result =>res.json(result))
    .catch(err =>res.json(err))
})
app.post('/login',(req,res)=>{
    let {email,password,isAdmin}=req.body
    model.findOne({email:email})
    .then(result =>{
        if(result){
            // console.log("password",result.password,"Result isAdmin",result.isAdmin,"isAdmin",isAdmin);
            if((result.password === password) && (result.isAdmin === isAdmin)){
                res.json({login:true})
            }else{
                res.json({login:false})
                // res.status(404)
            }
        }else{
            res.status(500)
            // .json({massage:'Error in Server'})
            res.json("No Recard")
        }
        })
    .catch(err =>res.json(err))
})
//updating
app.patch('/users/:id',(req,res)=>{
    const {isActive}=req.body
    const {id}=req.params
    model.findByIdAndUpdate({_id:id},{isActive:isActive})
    .then(result =>{
        res.json(result)
    })
    .catch(err =>res.json(err))
})
//delete based on id
app.delete('/delete/:id',(req,res)=>{
    let {id}=req.params;
    model.findByIdAndDelete({_id:id})
    .then(result=>{
        res.json(result)
    })
    .catch(err =>res.json(err))
})

//post for Active persons
app.post('/active',(req,res)=>{
    let {email,password,isActive}=req.body
    model.findOne({email:email})
    .then(result =>{
        if(result){
            if(result.password === password && result.isActive === isActive){
                res.json({Active:true})
            }else{
                res.json({Active:false})
                res.status(404)
            }
        }else{
            res.status(500)
            res.json("No Recard")
        }
        })
    .catch(err =>res.json(err))
})



app.get('/search',(req,res)=>{
    let search =req.query
    if(search){
    model.findOne({phone:search.phone})
    .then(result =>res.json(result))
    .catch(err =>res.json(err))  
    }
})