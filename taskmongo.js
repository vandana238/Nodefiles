const express = require ('express')
const mongoose = require('mongoose')
const clarity = require('./model')
const app = express();
var cors = require('cors');

app.use(express.json())
app.use(cors());
mongoose.connect('mongodb+srv://vandana:vandana23@cluster0.sbgc1y5.mongodb.net/mydata?retryWrites=true&w=majority')
.then(() => console.log('db connected..')).catch(err => console.log(err))

app.get('/get', async (req, res) => {
try{
const allData = await clarity.find()
return res.json(allData)
}
catch(err)
{
console.log(err.message)
}
})
console.log("heyy")

app.get('/get/:id', async (req,res) =>{
try{
const Data = await clarity.findById(req.params.id)
return res.json(Data)
}
catch(err)
{
console.log(err.message)
}
})

app.get('/sort', (req, res) => {  
    var mysort = {cost:1};
    clarity.find({},(err,data)=> {
      if (err) throw err;
      res.send(data)
      console.log(data);
      }).sort(mysort);
    })
    
    
app.get('/get/filter',  (req, res) => {  
    clarity.find({$and:[{cost:{$gt:30000}},{color:"black"},{rating:{$gt:4.1}}]},(err,data)=>{
     if(err) { console.log(err) }  
    else{res.send(data)   }
    })
    })
     
app.get('/color',(req,res)=>{
//checking the data (atleast one element is matched or not)($elementMatch)
//eq= equal to
//ne =not equal to
clarity.find({color:{$eq:"red"}},(err,data)=>{
    if(err){ console.log(err.message)}
   else{res.send(data)}}
    )
  })

  app.get('/avali',(req,res)=>{
    clarity.find({avaliability:{$eq:535004}},(err,data)=>{
        if(err){ console.log(err.message)}
            else{res.send(data)}
        })
  })
  app.get('/avalnot',(req,res)=>{
clarity.find({avaliability:{$ne:553304}},(err,data)=>{
if(err){console.log(err.message)}
else{res.send(data)}
    })
  })


  app.get('/brand',(req,res)=>{
    clarity.find({brandname:{$eq:tesla}},(err,data)=>{
      if(err)
      {
        console.log(err.message)
      }
     else{res.send(data)}
    })
  })

  // Categories.find({}, { items: 1, _id: 0 })
 app.get('/name',async(req,res)=>{
try{
    const allData = await clarity.find({},{ brandname: 1, _id: 0 })
    return res.json(allData)
    }
    catch(err)
    {
    console.log(err.message)
    }
    })
    
    // app.get('/name',async(req,res)=>{
    //   try{
    //       const allData = await clarity.findone({brandname: " "}, {_id: 0, crmId: 1});)
    //       return res.json(allData)
    //       }
    //       catch(err)
    //       {
    //       console.log(err.message)
    //       }
    //       })
          
   
app.post('/add', async (req,res) => {
const brandname = req.body;
const newData = new clarity(brandname)
 newData.save(function(err,data)
 {
    if(err)
    {
        res.send(err)
    }
    else{
        res.send(data)
    }
 })
})

app.put('/up/:id', async (req,res) => {
try{
await clarity.findByIdAndUpdate(req.params.id,{brandname:req.body.brandname})
return res.json(await clarity.find())
}
catch(err)
{
console.log(err.message)
}
})


app.delete('/delete/:id', async (req,res) => {
try{
await clarity.findByIdAndDelete(req.params.id)
return res.json(await clarity.find())
}
catch(err)
{
console.log(err.message)
}
})


app.listen(9075, () =>{ console.log('server running...')})



