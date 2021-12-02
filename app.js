const express=require('express');

//para que tenga todas las opciones de express en la const app
//para hablar con express en este punto va ser app
const app = express();



app.get('/',(req,res)=>{

res.sendFile(__dirname + '/home.html');

});

app.get('/about',(req,res)=>{

    res.sendFile(__dirname + '/about.html');
    
    });









//para que diga que hice el server en el segundo argumento con una funcion anonimit arrow funcion
app.listen(3000, () => console.log('Server work on port 3000'));

