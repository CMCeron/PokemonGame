
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let x = 50;
let y = 50;

const player = new Image();
player.src = '../Assets/Player/B_andar.png'; // 14 * 19
let playerY = 0
let playerX = 0;


const map = new Image();
map.src = '../Assets/Map/Berry_Forest.jpg';

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(map, 0,0);
    ctx.drawImage(player,playerX,playerY,15,20,x,y,20,40);
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {

        case 'ArrowUp':
        case 'w':
            y -= 10;
            andarArriba();
            break;
        case 'ArrowDown':
        case 's':
            y += 10;
            andarAbajo();
            break;

        case 'ArrowRight':
        case 'd':
            x += 10;
            andarDerecha();
            break;

        case 'ArrowLeft':
        case 'a':
            x -= 10;
            andarIzquierda();
            break;
    }
})

setInterval(draw, 20);

