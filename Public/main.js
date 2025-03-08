
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

function draw() {
    canvas.style.backgroundColor = 'var(--gameBackground)';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(mapBlur, x - 100, y - 80, canvas.width * 2 + 200, canvas.height * 2 + 160);
    ctx.drawImage(map, x, y, canvas.width * 2, canvas.height * 2);
    //ctx.drawImage(colision, x, y, canvas.width * 2, canvas.height * 2);

    ctx.drawImage(player, playerX, playerY, 16, 20,
        canvas.width / 2 - 14,
        canvas.height / 2 - 19,
        14 * 2, 19 * 2);

    ctx.drawImage(tree, x, y, canvas.width * 2, canvas.height * 2);
}

function checkCollision(newX, newY) {
    canvas.style.backgroundColor = '';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(colision, x, y, canvas.width * 2, canvas.height * 2);

    ctx.strokeStyle = "rgba(13, 255, 0, 0.201)";
    ctx.rect(newX, newY, 14 * 2, 19);
    ctx.stroke();

    let imgData = ctx.getImageData(newX, newY, 14 * 2, 19).data;
    return imgData[3] !== 255;
}

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

function animate() {
    draw();
    requestAnimationFrame(animate);
}

// Cargar imágenes antes de dibujar
player.onload = map.onload = mapBlur.onload = colision.onload = function () {
    animate();
};