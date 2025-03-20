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