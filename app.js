const express = require('express');
const app = express();
const path = require('path');
const PUERTO = 0911;

app.use(express.static('./public'));

app.listen(PUERTO, function(){
    console.log('Servidor corriendo en la ruta 0911')
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './views/home.html'))
})

/*document.addEventListener('DOMContentLoaded', () =>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150
    })
}) */