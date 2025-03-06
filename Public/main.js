
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let x = -930;
let y = -800;

const player = new Image();
player.src = '../Assets/Player/B_andar.png'; // 14 * 19
let playerY = 33;
let playerX = 17;


const map = new Image();
map.src = '../Assets/Map/Berry_Forest.jpg'; // 912 * 752

const mapBlur = new Image();
mapBlur.src = '../Assets/Map/Berry_Forest_Blur.png'; // 912 * 752

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(mapBlur, x-100, y-80, canvas.width * 2+200, canvas.height * 2+160);
    ctx.drawImage(map, x, y, canvas.width * 2, canvas.height * 2);

    ctx.drawImage(player, playerX, playerY, 16, 20,
        canvas.width / 2 - 14,
        canvas.height / 2 - 19,
        14*2 , 19*2);
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {

        case 'ArrowUp':
        case 'w':
            y += 10;
            andarArriba();
            break;
        case 'ArrowDown':
        case 's':
            y -= 10;
            andarAbajo();
            break;

        case 'ArrowRight':
        case 'd':
            x -= 10;
            andarDerecha();
            break;

        case 'ArrowLeft':
        case 'a':
            x += 10;
            andarIzquierda();
            break;
    }
})

setInterval(draw, 20);

