// const express = require('express')
// const app = express()
// const mongoose=require('mongoose')
// mongoose.connect('mongodb+srv://vandana:vandana23@cluster0.sbgc1y5.mongodb.net/mydata?retryWrites=true&w=majority')
// .then( ()=> console.log('db connected..')).catch(err => console.log(err))
// app.listen(3091, () => console.log('server running...'))
// const imp =  require('./model')

// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))


// app.use(bodyParser.json())
// app.get('/',async(req,res)=>{
//     try{
// const allData=await imp.find()
// return res.json(allData)
//     }
//     catch(err)
//     {
//         console.log(err.message)
//     }
// })
// app.post('/post', async (req,res) => {
//     const user = req.body;
//     const newData = new imp(user)
//     const dat=await newData.save()
//     if(dat)
//     {
//         console.log(dat.message)
//         res.send(dat)
//     }
//     else{
//         res.send("fail")
//     }
//     console.log(user)
   
//     })









const express = require('express')
const app = express()
const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())
mongoose.connect('mongodb+srv://vandana:vandana23@cluster0.sbgc1y5.mongodb.net/mydata?retryWrites=true&w=majority')
.then( ()=> console.log('db connected..')).catch(err => console.log(err))
app.listen(3092, () => console.log('server running...'))
const imp =  require('./model')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/get',async(req,res)=>{
        try{
            console.log("hit")
    const allData=await imp.find()
    return res.json(allData)

        }
        catch(err)
        {
            console.log(err.message)
        }
    })

    app.use(express.json())
    app.post('/postdata', async (req, res) => {
        var details = 
            {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
            }
            const data = new imp(details)
            await data.save()
            console.log(data)
             return res.json(data)
            })

            app.put('/put/:username', async (req, res) => {
    
                try {
                  const updatedUser = await imp.findOneAndUpdate(
                    { username: req.params.username },
                    { $set: req.body },
                    { useFindAndModify: false, new: true }
                  );
                  res.json(updatedUser);
                } catch (err) {
                  console.error(err);
                  res.status(500).send('Internal server error');
                }
              });
              
              
              
app.delete('/delete/:username', async (req, res) => {
    try {
        const deletedData = await imp.deleteOne({username: req.params.username })
        if (deletedData.deletedCount === 0) {
            return res.status(404).json({ msg: 'Not found' })
        }
        return res.json({ msg: 'Deleted successfully' })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ msg: 'Internal server error' })
    }
})

app.get('/getit',async(req,res)=>{

    const request = require('request');

    const options = {
      method: 'GET',
      url: 'https://forecast9.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': 'da9b7700f8msh3af97590421ab7bp18e756jsn10cdc35371ea',
        'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
      }
    };
    
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
    
        console.log(body);
    });

})
