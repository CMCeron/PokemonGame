// Imagenes

let backgroundBattle = new Image();
backgroundBattle.src = 'Print/../../Assets/Batalla/Background.jpg'

const statRival = new Image();
statRival.src = "Print/../../Assets/Batalla/Stat_Rival.png";

const statThis = new Image();
statThis.src = "Print/../../Assets/Batalla/Stat_this.png";

const greenBar = new Image();
greenBar.src = "Print/../../Assets/Batalla/Barra_green.jpg";

const yellowBar = new Image();
yellowBar.src = "Print/../../Assets/Batalla/Barra_Yellow.jpg";

const redBar = new Image();
redBar.src = "Print/../../Assets/Batalla/Barra_Red.jpg";

const message = new Image();
message.src = "Print/../../Assets/Batalla/History.jpg";

const abilities = new Image();
abilities.src = "Print/../../Assets/Batalla/Select_Abilities.png";

function printBattle(pokemonEnemigo) {

    canvas.style.display = 'none';
    batalla.style.display = 'block'

    batalla.style.backgroundColor = 'var(--gameBackground)';
    battle.clearRect(0, 0, canvas.width, canvas.height);
    battle.drawImage(backgroundBattle, 0, 0, canvas.width, canvas.height * 3 / 4)

    setTimeout(() => {

        // Pokemon Contrario

        // Pantalla status
        battle.drawImage(
            statRival,
            50,
            50,
            statRival.width * 5,
            statRival.height * 5);

        // Vida
        printVida(pokemonEnemigo, 'enemigo');

        // Nombre
        document.fonts.ready.then(() => {
            printName(pokemonEnemigo, 'enemigo');
        }).catch(() => { // Si no se carga bien que lo vuelva a cargar
            printName(pokemonEnemigo, 'enemigo');
        });;

        // Imprimir Pokemon Enemigo
        printPokemon(pokemonEnemigo, 'enemigo');

        // ------------------------------------------------------------------------------------------------------------s


        console.log(sheet.pokemonActive.nombre);
        const pokemonAmigo = sheet.pokemonActive;



        // Pantalla status
        battle.drawImage(
            statThis,
            batalla.width - statThis.width * 5,
            batalla.height - statThis.height * 5 - batalla.height * 1 / 4,
            statThis.width * 5,
            statThis.height * 5
        );

        // Vida
        printVida(pokemonAmigo, 'aliado');

        // Nombre
        document.fonts.ready.then(() => {
            printName(pokemonAmigo, 'aliado');
        }).catch(() => { // Si no se carga bien que lo vuelva a cargar
            printName(pokemonAmigo, 'aliado');
        });;

        // Imprimir Pokemon
        printPokemon(pokemonAmigo, 'aliado');

        // Background Mensajes

        battle.drawImage(
            message,
            0,
            batalla.height * 3 / 4,
            batalla.width,
            batalla.height * 1 / 4
        );

        // Background Selección de Habilidades
        battle.drawImage(
            abilities,
            batalla.width * 2/4,
            batalla.height * 3 / 4,
            batalla.width * 2/4,
            batalla.height * 1 / 4
        );

        messageAppear(pokemonAmigo, 1, pokemonEnemigo);
    }
        , 500);

}

