const express=require('express');
const app = express();
const mongoose=require('mongoose')
const  imp =require('./model2');
mongoose.connect('mongodb+srv://vandana:vandana23@cluster0.sbgc1y5.mongodb.net/mydata?retryWrites=true&w=majority')
.then( ()=> console.log('db connected..')).catch(err => console.log(err))
app.listen(3081, () => console.log('server running...'))


app.get('/get', async (req, res) => {
    try{
    const allData = await imp.find()
    return res.json(allData)
    }
    catch(err)
    {
    console.log(err.message)
    }
    })





    
app.get('/get/:id', async (req,res) =>{
    try{
    const Data = await imp.findById(req.params.id)
    return res.json(Data)
    }
    catch(err)
    {
    console.log(err.message)
    }
    })


    app.get('/get/sort', ( (req, res) => {  
        var dbo = db.db("mydata");
        var mysort = { brandname: 1 };
        
        dbo.collection("mydatac").find().sort(mysort).toArray((err, result)=> {
          if (err) throw err;
          console.log(result);
          db.close();
        
        });
        });
        
        
        app.get('/get/search', ( (req, res) => {  
        usersearch.find({$and:[{cost:{$gt:30000}},{color:"black"},{rating:{$gt:4.1}}]},((err,data)=>{
           
            if(err) {
            console.log(err)
             }  
        
         else{
            res.send(data)
             }
            })
        
        });
        
        
        
    
app.post('/add', async (req,res) => {
        const {productname} = req.body;
        try{
        const newData = new imp({productname})
        await newData.save();
        return res.json(await imp.find())
        }
        catch(err){
        console.log(err.message)
        }
        })


        
app.put('/up/:id', async (req,res) => {
    try{
    await clarity.findByIdAndUpdate(req.params.id)
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
    return res.json(await clarity.find() )
    }
    catch(err)
    {
    console.log(err.message)
    }
    })
        

















 