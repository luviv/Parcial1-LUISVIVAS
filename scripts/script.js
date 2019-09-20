function handleLoad() {
    var min= 1;
    var max = 360;
    var newElement = document.createElement('p');
    
    
    
    function getRandomArbitrary(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.random * (max -  min) + min;
    }

    setTimeout(getRandomArbitrary, 2000);
}

window.addEventListener('load', handleLoad);


