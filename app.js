const express = require('express')
const app = express()

app.get('/', (req,res)=>res.send('HOLA DANIEL!!'))
app.get('/salida', (req, res)=>res.send('Chau! '))

app.listen(3030, ()=>console.log('server running in port 3030'))