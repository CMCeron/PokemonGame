function lookPokemon() { // Buscar pokemon en la hierba
    let pokemon = Math.round(Math.random() * 1000 - 1);

    if (pokemon == 10) {
        appearPokemon(true);
        return;

    } else if (pokemon <= 30) {
        appearPokemon(false)
        return;
    }
}

function appearPokemon(shiny) { // Cuando encuentra un pokemon

    let id = Math.round(Math.random() * 3);
    if (id >= 1) {
        canvas.style.display = 'none';

        const pokemon = new Pokemon(id, 'contra', shiny);
        console.log(pokemon);
        setTimeout(() => {
            console.log(pokemon.base);
            printBattle(pokemon);
        }, 1000);
    }
}


function printVida(pokemonObj, tipo) {
    //pokemonObj.health = 30;
    let color;

    if (pokemonObj.health > 50) {
        color = 'green';
    } else if (pokemonObj.health > 20) {
        color = 'yellow';
    } else {
        color = 'red';
    }

    if (tipo == 'enemigo') {
        eval(
            `battle.drawImage(${color}Bar, 247, 132, 235 * pokemonObj.health / 100, 12);`
        )

    } else if (tipo == 'aliado') {
        eval(
            `battle.drawImage(${color}Bar, batalla.width - 278, batalla.height - 219, 235 * pokemonObj.health / 100, 12);`
        )
    }

}



function printPokemon(pokemonObj, tipo) {
    let pokemon = pokemonObj.base;

    if (tipo == 'enemigo') {
        battle.drawImage(
            pokemon,
            canvas.width / 2 + pokemon.width * 2,
            canvas.height / 2 - pokemon.height * 2 - pokemon.height / 2 - batalla.height * 1 / 4,
            pokemon.width * 4,
            pokemon.height * 4
        )
    } else if (tipo == 'aliado') {
        battle.drawImage(
            pokemon,
            canvas.width / 3 + pokemon.width * 2,
            canvas.height - pokemon.height * 2 - pokemon.height / 2 - batalla.height * 1 / 4,
            pokemon.width * 4,
            pokemon.height * 4
        )
    }

}

function printName(pokemonObj, tipo) {
    battle.font = "35px 'Pixelify Sans'";
    battle.fillStyle = "grey";
    if (tipo == 'enemigo') {
        battle.fillText(pokemonObj.nombre, 100, 110);
    } else if (tipo == 'aliado') {
        battle.fillText(pokemonObj.nombre, battalla.width / 2 + 50, battalla.height * 3 / 4 - 100);
    }
}