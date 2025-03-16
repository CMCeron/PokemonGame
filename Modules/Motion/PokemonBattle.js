function lookPokemon(){ // Buscar pokemon en la hierba
    let pokemon = Math.round(Math.random() * 100 - 1);

    if (pokemon == 10) {
        appearPokemon(true);
        

    } else if (pokemon <= 30) {
        appearPokemon(false)
    }
}

function appearPokemon(shiny){ // Cuando encuentra un pokemon
    
    let id = Math.round(Math.random() * 3);
    let pokemon = new Pokemon(id, 'contra', shiny);

    printBattle();
}