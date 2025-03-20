// Imagenes
    
let backgroundBattle = new Image();
backgroundBattle.src = 'Print/../../Assets/Batalla/Background.jpg'

const statRival = new Image();
statRival.src = "Print/../../Assets/Batalla/Stat_Rival.png";

const bar = new Image();

function printBattle(pokemonObj) {

    canvas.style.display = 'none';
    battalla.style.display = 'block'

    battle.clearRect(0, 0, canvas.width, canvas.height);
    battle.drawImage(backgroundBattle, 0, 0, canvas.width, canvas.height)

    
    // Pokemon Contrario
    
    
    // Pantalla status
    battle.drawImage(statRival, 50, 50, statRival.width * 5, statRival.height * 5);
    // Vida

    printVida(pokemonObj);

    // Imprimir Pokemon
    pokemon = pokemonObj.base;
    battle.drawImage(
        pokemon,
        canvas.width / 2 + pokemon.width * 2,
        canvas.height / 2 - pokemon.height * 2 - pokemon.height / 2,
        pokemon.width * 4,
        pokemon.height * 4
    )

    //Pokemon Aliado
}

