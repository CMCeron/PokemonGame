class Partida {
    constructor(activePokemon) {
        userID = this.getUserID;

        PositionX = x;
        positionY = y;

        activePokemon = activePokemon;

    }

    getUserID() {
        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Partida/getUserID.php',
            method: 'get',
            success: (data, status) => {
                this.userID = data;
            }
        })
    }

    loadData() {
        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Partida/getUserID.php',
            method: 'get',
            success: (data, status) => {
                this.userID, this.PositionX, this.PositionY, this.activePokemon = { ...data };
            }
        })
    }

    saveData() {
        this.reload();
        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Partida/getUserID.php',
            method: 'post',
            data: {
                userID: this.userID,

                PositionX: this.PositionX,
                PositionY: this.PositionY,

                activePokemon: this.activePokemon
            },
            success: (data, status) => {
                alert(data);
            }
        })
    }

    reload(PositionX, positionY, activePokemon) {
        this.positionY = positionY;
        this.positionX = positionX;
        this.activePokemon = activePokemon;
    }
}

