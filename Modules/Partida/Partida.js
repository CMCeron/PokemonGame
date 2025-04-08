class Partida {
    constructor(x, y, activePokemon) {
        this.userID = null;

        this.PositionX = x;
        this.PositionY = y;

        this.activePokemon = activePokemon;

        this.getUserID();
    }

    getUserID() {
        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Partida/getUserID.php',
            method: 'get',
            success: (data) => {
                this.userID = data;
                this.loadData();
            }
        })
    }

    newUser() {
        if (this.userID) {
            $.ajax({
                url: 'http://localhost/PokemonGame/Modules/Partida/nuevoUsuario.php',
                method: 'post',
                data: { userID: this.userID },
                success: (data) => {
                    if (data) {
                        try {
                            console.log(data);
                            this.PositionX = -930;
                            this.PositionY = -800;
                            this.activePokemon = JSON.parse(data.activePokemon);
                        } catch (error) {
                            console.error('Ha habido un error:');
                        }
                    }

                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.error('Error en la petición AJAX de partida:', textStatus, errorThrown);
                }
            })
        }
    }

    loadData() {
        if (this.userID) {
            $.ajax({
                url: 'http://localhost/PokemonGame/Modules/Partida/cargarPartida.php',
                method: 'post',
                data: { userID: this.userID },
                success: (data) => {
                    if(data == 'error: No se encontraron partidas para el usuario especificado.'){
                        this.newUser();
                        return;
                    }
                    if (data) {
                        try {
                            console.log(data);
                            this.PositionX = data.positionX;
                            this.PositionY = data.positionY;
                            this.activePokemon = JSON.parse(data.activePokemon);
                        } catch (error) {
                        }
                    }

                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.error('Error en la petición AJAX de partida:', textStatus, errorThrown);
                }
            })
        }
    }

    saveData() {
        console.log(this.PositionX, this.PositionY, this.activePokemon);
        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Partida/guardarPartida.php',
            method: 'post',
            data: {
                userID: this.userID,
                PositionX: this.PositionX,
                PositionY: this.PositionY,
                activePokemon: JSON.stringify(this.activePokemon)
            },
            success: (data) => {
                alert(data);
            }
        })
    }

    reload(positionX, positionY, activePokemon) {
        this.PositionY = positionY;
        this.PositionX = positionX;
        this.activePokemon = activePokemon;
    }
}
