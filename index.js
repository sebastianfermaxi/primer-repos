const fs = require('fs');
const express = require('express');
const app = express();

const port = 5000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.post('/formulario',(req,res)=>{
    
    console.log(req.body);
    
    const{nombre,apellido} = req.body;
    if(!nombre || !apellido) return res.send('no hay datos');
   fs.writeFile(`${nombre}.txt`, apellido, (err) =>{
    if(err) return res.send('Falló al crear')
    res.download(__dirname+`/${nombre}.txt`);
    //res.send('Archivo descargado')
    })
});

app.get('/',(req,res)=>{
    res.send('Hello Wordl !');
})

app.listen(port, ()=>{
    console.log(`Funcionando en http://localhost/${port}`)
})