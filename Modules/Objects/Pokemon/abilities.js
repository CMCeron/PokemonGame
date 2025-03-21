function attack (pokemonObj,tipo){
    pokemonObj.health - 10;
    // Vida
    printVida(pokemonObj, tipo);
}

function scape() {
    batalla.style.display = 'none';
    canvas.style.display = 'none';
}

function heal(pokemonObj){
    pokemonObj.health - 10;
    // Vida
    printVida(pokemonObj, 'aliado');
}