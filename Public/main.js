
const canvas = document.querySelector('#juego');
const ctx = canvas.getContext("2d", { willReadFrequently: true });

const battalla = document.querySelector('#batalla');
const battle = battalla.getContext("2d", { willReadFrequently: true })

let x = -930;
let y = -800;

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

if (battalla.style.display = block) {
    canvas.style.display = none;

    document.addEventListener('keydown', function (event) {
        switch (event.key) {

            case 'ArrowUp':
            case 'w':
                selectUp();
                break;
                
            case 'ArrowDown':
            case 's':
                selectDown();
                break;

            case 'ArrowRight':
            case 'd':
                selectRight();
                break;

            case 'ArrowLeft':
            case 'a':
                selectLeft();
                break;

            case 'tab':
                jump();
                break;

            case 'Enter':
                selectOption();
                break;
        }
    })

}

if (canvas.style.display = block) { // Si esta el juego principal

    document.addEventListener('keydown', function (event) {
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
    })

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
    };
}

