function draw() {
    let checkGrassV = !checkGrass(canvas.width / 2 + 14, canvas.height / 2 + 19);
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

    if (checkGrassV) {
        ctx.drawImage(grass, 0, 0, grass.width, grass.height,
            canvas.width / 2 - 14,
            canvas.height / 2,
            grass.width * 2, grass.height * 1.5)
    }
}

let backgroundBattle = new Image();
backgroundBattle.src = 'Print/../../Assets/Batalla/Background.jpg'

function printBattle(pokemonObj) {
    canvas.style.display ='none';
    battalla.style.display = 'block'

    battle.clearRect(0, 0, canvas.width, canvas.height);
    battle.drawImage(backgroundBattle, 0, 0, canvas.width, canvas.height)

    // Pokemon Contrario
    battle.drawImage(pokemonObj.base.src, 0,0)
    //Pokemon Aliado
}


setInterval(draw, 500)


/* function animate() {
    draw();
    requestAnimationFrame(animate);
} */