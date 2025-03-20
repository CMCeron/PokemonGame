function lookPokemon(){ // Buscar pokemon en la hierba
    let pokemon = Math.round(Math.random() * 100 - 1);

    if (pokemon == 10) {
        appearPokemon(true);
        return;

    } else if (pokemon <= 30) {
        appearPokemon(false)
        return;
    }
}

function appearPokemon(shiny){ // Cuando encuentra un pokemon
    
    let id = Math.round(Math.random() * 3);
    if(id>=1){
        canvas.style.display ='none';

        const pokemon = new Pokemon(id, 'contra', shiny);
        console.log(pokemon);
        setTimeout(() => {
            console.log(pokemon.getBaseSrc());
            printBattle(pokemon);
        }, 1000);
    }
}


function printVida(pokemonObj){
    //pokemonObj.health = 30;

    if (pokemonObj.health > 50) {
        bar.src = "Print/../../Assets/Batalla/Barra_green.jpg";
        battle.drawImage(bar, 247, 137, 235 * pokemonObj.health/100, 12);

    } else if (pokemonObj.health > 20) {
        bar.src = "Print/../../Assets/Batalla/Barra_Yellow.jpg";
        battle.drawImage(bar, 247, 137, 235 * pokemonObj.health/100, 12);

    } else {
        bar.src = "Print/../../Assets/Batalla/Barra_Red.jpg";
        battle.drawImage(bar, 247, 137, 235 * pokemonObj.health/100, 12);
    } 
}