
const canvas = document.querySelector('#juego');
const ctx = canvas.getContext("2d", { willReadFrequently: true });

const batalla = document.querySelector('#batalla');
const battle = batalla.getContext("2d", { willReadFrequently: true })

// PLAYER
const sheet = new Player();
const player = sheet.walk;

/* player.src = '../Assets/Player/B_andar.png'; // 14 * 19 */
let playerY = 33;
let playerX = 17;

// MAP
const map = new Image();
map.src = '../Assets/Map/Berry_Forest.jpg'; // 912 * 752

const mapBlur = new Image();
mapBlur.src = '../Assets/Map/Berry_Forest_Blur.png'; // 912 * 752

const tree = new Image();
tree.src = '../Assets/Map/Berry_Forest_Trees.png'

// GRASS IMG
const grass = new Image();
grass.src = '../Assets/Map/grass.png';

// PARTIDA 
const partida = new Partida(); // Se coge la última partida


let x, y;

setTimeout(() => {

    // GUARDAR PARTIDA
    const guardar = document.querySelector('button');
    guardar.onclick = () => {
        partida.reload(x, y, sheet.pokemonActive);
        partida.saveData();
    };

    if (!partida.PositionX || !partida.PositionY) {
        partida.PositionX = -930;
        partida.PositionY = -800;
    }

    x = partida.PositionX;
    y = partida.PositionY;

    if (batalla.style.display == 'block') {
        canvas.style.display = 'none';
    }

// Moverse
    document.addEventListener('keydown', function (event) {
        if (canvas.style.display == '' || canvas.style.display == 'block') { // Si esta el juego principal
            switch (event.key) {

                case 'ArrowUp':
                case 'w':
                    movePlayer(0, 5);
                    andarArriba();
                    draw();
                    break;
                case 'ArrowDown':
                case 's':
                    movePlayer(0, -5);
                    andarAbajo();
                    draw();
                    break;

                case 'ArrowRight':
                case 'd':
                    movePlayer(-5, 0);
                    andarDerecha();
                    draw();
                    break;

                case 'ArrowLeft':
                case 'a':
                    movePlayer(5, 0);
                    andarIzquierda();
                    draw();
                    break;
            }
        }
    })

}, 200)

if (canvas.style.display == '' || canvas.style.display == 'block') { // Si esta el juego principal
    let w;
    // Cargar imágenes antes de dibujar
    player.onload = map.onload = mapBlur.onload = colision.onload = function () {
        if (typeof (Worker) !== 'undefined') {
            if (typeof (w) == 'undefined') {
                w = new Worker('dibujar.js');
            }

            w.onmessage = function (event) {
                event.data;
            }
        }
    }
}