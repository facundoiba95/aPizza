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
const routerPizzas = express.Router();
app.use('/api/pizzas', routerPizzas)



routerPizzas.get('/',(req,res)=> {
    const path = req.path;
    if(path === '/'){
       return res.send(Menu)
    } else {
        return res.status(404).send('No se encontro la pagina :/')
    }
})



const PUERTO = process.env.PORT || 3001;
app.listen(PUERTO, ()=> {
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`)
})