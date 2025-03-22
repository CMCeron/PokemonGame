function messageAppear(pokemonObj, n, pokemonEnemigo) {
    let messages = document.querySelector('.message');
    messages.style.display = 'flex';

    let text = document.createElement('p')

    switch (n) {
        case 1:
            text.onclick = () => abilitiesAppear(pokemonObj);
            text.appendChild(
                document.createTextNode(`¿Qué hará ${pokemonObj.nombre}?`)
            )

            abilitiesAppear(pokemonObj, pokemonEnemigo);
            break;

        case 3:
            text.onclick = () => messageAppear(1);
            text.appendChild(
                document.createTextNode(`${pokemonEnemigo.nombre} te ha atacado`)
            )
            setTimeout(() => messageAppear(1), 2000)
            break;
        case 4:
            text.onclick = () => scape();
            text.innerHTML = `Has derrotado al pokemon`;
            setTimeout(() => scape, 1000)
            break;
        case 4:
            text.onclick = () => scape();
            text.innerHTML = `Has sido derrotado`;
            setTimeout(() => scape, 1000)
            break;
    }
    messages.innerHTML = "";
    messages.appendChild(text)

}

function abilitiesAppear(pokemonObj, pokemonEnemigo) {
    let abilities = document.querySelector('.abilities');
    abilities.style.display = 'flex';

    pokemonObj.abilities.forEach(element => {

        if (element == 'Curar') {
            let text = document.createElement('p');
            text.onclick = () => heal(pokemonObj);
            text.appendChild(
                document.createTextNode(element)
            )

            abilities.appendChild(text);

            hurt(pokemonObj);
        } else if (element == 'Huir') {
            let text = document.createElement('p')
            text.appendChild(
                document.createTextNode(element)
            )
            text.onclick = () => scape();

            abilities.appendChild(text);
        } else {
            let text = document.createElement('p')
            text.onclick = () => attack(pokemonEnemigo);

            text.appendChild(
                document.createTextNode(element)
            )

            abilities.appendChild(text);
            hurt(pokemonObj);
        }
    });
}

function hurt(pokemonObj) {
    pokemonObj.health -= 10;
    console.log('ALIADO'+pokemonObj.health);
    // Vida
    printVida(pokemonObj, 'aliado');

    if (pokemonObj.health < 1) {
        messageAppear(pokemonObj, 5)
    }
}

function attack(pokemonObj) {
    pokemonObj.health -= 10;
    console.log('ENEMIGO'+pokemonObj.health);
    // Vida
    printVida(pokemonObj, 'enemigo');

    if (pokemonObj.health < 1) {
        messageAppear(pokemonObj, 4)
    }
}

function scape() {
    let divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.innerHTML = '';
        div.style.display = 'none';
    });


    batalla.style.display = 'none';
    canvas.style.display = 'block';
}

function heal(pokemonObj) {
    pokemonObj.health = 100;
    // Vida
    printVida(pokemonObj, 'aliado');
}