
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d", { willReadFrequently: true });

let x = -930;
let y = -800;

// PLAYER
const player = new Image();
player.src = '../Assets/Player/B_andar.png'; // 14 * 19
let playerY = 33;
let playerX = 17;

// MAP
const map = new Image();
map.src = '../Assets/Map/Berry_Forest.jpg'; // 912 * 752

const mapBlur = new Image();
mapBlur.src = '../Assets/Map/Berry_Forest_Blur.png'; // 912 * 752

const tree = new Image();
tree.src = '../Assets/Map/Berry_Forest_Trees.png'

// COLISIONS MAP
const colision = new Image();
colision.src = '../Assets/Map/Berry_Forest.svg';

// COLISIONS GRASS MAP
const grassCollission = new Image();
grassCollission.src = '../Assets/Map/Berry_Forest_Grass.svg';

// GRASS IMG
const grass = new Image();
grass.src = '../Assets/Map/grass.png';

// Pokemons 
const pokemons = [
    {
        id: 0,
        nombre: 'Bulbasur',
        shiny: false,
        src: () => {
            if( this.shiny == false ){
                return `${this.nombre}.png`;
            }else{
                return `${this.nombre}_Shiny.png`;
            }
        }
    },
    {
        id: 1,
        nombre: 'algo',
        shiny: false,
        src: () => {
            if( this.shiny == false ){
                return `${this.nombre}.png`;
            }else{
                return `${this.nombre}_Shiny.png`;
            }
        }
    },
    {
        id: 2,
        nombre: 'algo3',
        shiny: false,
        src: () => {
            if( this.shiny == false ){
                return `${this.nombre}.png`;
            }else{
                return `${this.nombre}_Shiny.png`;
            }
        }
    }
];


document.addEventListener('keydown', function (event) {
    switch (event.key) {

        case 'ArrowUp':
        case 'w':
            movePlayer(0, 5);
            andarArriba();
            break;
        case 'ArrowDown':
        case 's':
            movePlayer(0, -5);
            andarAbajo();
            break;

        case 'ArrowRight':
        case 'd':
            movePlayer(-5, 0);
            andarDerecha();
            break;

        case 'ArrowLeft':
        case 'a':
            movePlayer(5, 0);
            andarIzquierda();
            break;
    }
})


// Cargar imágenes antes de dibujar
player.onload = map.onload = mapBlur.onload = colision.onload = function () {
    animate();
};