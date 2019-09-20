function handleLoad() {
    var grades = 0;
    var texto = document.querySelector('p');
    

    
    function getRandomArbitrary() {
        var flecha = document.querySelector('.hand');

        grades= Math.floor(Math.random()*(360));
        texto.innerText = grades;
        flecha.style.transform='rotate('+ grades +' deg)';
        console.log(grades);
        console.log(flecha);
    }

   setInterval(getRandomArbitrary, 2000);
}

window.addEventListener('load', handleLoad);


