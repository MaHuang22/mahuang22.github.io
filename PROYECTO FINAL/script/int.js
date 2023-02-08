document.getElementById("b_modo").addEventListener('click', function(){
    if(document.getElementById('estilo').getAttribute('href') == "css/claro.css" ){
        document.getElementById('estilo').setAttribute('href', "css/oscuro.css");
        document.getElementById('b_modo').innerHTML = 'Modo claro';
        console.log("Se cambio al modo oscuro");
    }else{
        document.getElementById('estilo').setAttribute('href', "css/claro.css");
        document.getElementById('b_modo').innerHTML = 'Modo oscuro';
        console.log("Se cambio al modo claro.");
    }
});