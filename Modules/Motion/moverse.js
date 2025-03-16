function movePlayer(sX, sY) {
    const newX = (canvas.width / 2) + (-sX);
    const newY = (canvas.height / 2) + (-sY);

    // Fuera del canvas
    if (newX < 0 || newX + 14 * 2 > canvas.width || newY < 0 || newY + 19 * 2 > canvas.height) {
        x = -930;
        y = -800;
    }

    // Fuera del mapa de colisiones
    if (newX < 0 || newX + 14 * 2 > canvas.width * 2 || newY < 0 || newY + 19 * 2 > canvas.height * 2) {
        x = -930;
        y = -800;
    }

    if (checkCollision(newX, newY)) {
        x += sX;
        y += sY;
    } else {
        return;
    }

    if(!checkGrass(newX, newY)){
        let appearPokemon = Math.round(Math.random() * 100 - 1);

        if(appearPokemon == 10){
            let id = Math.round(Math.random() * 3);
            let pokemon = new Pokemon(id, 'contra', true);

        }else if(appearPokemon <= 30){
            let id = Math.round(Math.random() * 3);
            let pokemon = new Pokemon(id, 'contra', false);
        }
    }
}

let pierna = 0; // 0 - Derecha  1 - Izquierda

function cambioPierna(){
    if (pierna >= 1){
        pierna = 0; // Izquierda
        return  playerX = 34; // Derecha
    }else{
        pierna ++;
        return  playerX = 0; // Derecha
    }
}

function andarArriba(){
    playerY = 33;
    
    setTimeout(()=>{        //                                            O
        playerX = 17;   // Dejarlo parado cuando va caminando y se para  /|\
    },2000);                //                                           / \
    
    cambioPierna();
}

function andarAbajo(){
    playerY = 0

    setTimeout(()=>{
        playerX = 17;
    },1000)

    cambioPierna();
}

function andarIzquierda(){
    playerY = 65;

    setTimeout(()=>{
        playerX = 17;
    },1000)

    cambioPierna();
}

function andarDerecha(){
    playerY = 98;

    setTimeout(()=>{
        playerX = 17;
    },1000)

    cambioPierna();
}
