/*
1) importar express
2)importar app de express para trabajar con un servidor ya creado
3)instalar cors desde npm
4)usar cors mediante app.use(cors())


*/
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())

const Menu = require('./datos/Menu')
const routerApi = express.Router();
app.use('/api/', routerApi)



routerApi.get('/',(req,res)=> {
      if(req.query.categoria === 'pizzas'){
        return res.send(Menu[0])
    } if(req.query.categoria === 'hamburguesas'){
        return res.send(Menu[1])
    } if(req.query.categoria === 'papas'){
        return res.send(Menu[2])
    } else {
        const error = res.status(404)
        return res.status(404).send(`No se encontro esa categoria :/ Error: ${error}`)
     }
})







const PUERTO = process.env.PORT || 3001;
app.listen(PUERTO, ()=> {
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`)
})