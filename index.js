const express = require('express')
const app = express();
var bodyParser = require('body-parser')
const Aluno = require('./model/Aluno')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})


app.post('/', async (req,res)=>{
 var isStudent = req.body.isStudent;

    if(isStudent =='no'){
        isStudent = false
    }else {
        isStudent = true
    }

    const aluno = await Aluno.create({name:req.body.name,email:req.body.email, phone:req.body.phone,age:req.body.age, gender:req.body.gender, isStudent:isStudent })
    aluno.save();
    res.json(req.body)

})

app.get("/alunos", async (req,res)=>{
   const alunos = await Aluno.findAll()
   console.log(alunos);
   res.json(alunos)
  
})


//listener
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('O servidor está on no endereço http://localhost:' + listener.address().port)
})
