// COLISIONS MAP
const colision = new Image();
colision.src = '../Assets/Map/Berry_Forest.svg';

// COLISIONS GRASS MAP
const grassCollission = new Image();
grassCollission.src = '../Assets/Map/Berry_Forest_Grass.svg';

// Colision
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

// Hierba
function checkGrass(newX, newY) {

    canvas.style.backgroundColor = '';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(grassCollission, x, y, canvas.width * 2, canvas.height * 2);

    ctx.strokeStyle = "rgba(255, 0, 0, 0.2)";
    ctx.rect(newX, newY, 14 * 2, 19);
    ctx.stroke();

    let imgData = ctx.getImageData(newX, newY, 14 * 2, 19).data;
    return imgData[3] !== 255;

}