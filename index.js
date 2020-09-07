import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = 5000;

app.use(bodyParser.json());//cosumir cosas

//Metodo GET o Obtener
app.get('/', (request, response) =>{
    response.send({name: 'José Daniel', age: 19});
});

app.post('/', (request, response) => {
    const {price, quatity} = request.body;
    response.send({tag: `Llevate ${quatity} unidades por tan solo ${price} pesos`});
})

app.listen(port, ()=> console.log(`Saver started at: http://localhost:${port}`));