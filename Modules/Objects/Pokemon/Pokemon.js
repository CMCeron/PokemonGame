class Pokemon {
    constructor(id, tipo, shiny, health) {
        this.id = id;

        this.src = 'Pokemon/../../Assets/Pokemons/';

        this.nombre = null;
        this.shiny = shiny;
        this.tipo = tipo;
        this.abilities = ['atacar', 'pegar', 'Curar','Huir'];

        this.health = health?health:100;

        this.huella = new Image();
        this.mini = new Image();
        this.base = new Image();

        this.getName(id).then(() => {
            this.loadImages();
        }).catch((error) => {
            console.error("Error al obtener el nombre del Pokémon:", error);
        });
    }

    getName(id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://localhost/PokemonGame/Modules/Objects/Pokemon/GetPokemon.php',
                method: 'post',
                data: { id: id },
                success: (data) => {
                    this.nombre = data.match(/^.+/)[0];
                    resolve();
                },
                error: (xhr, status, error) => {
                    reject(new Error("Error en la llamada AJAX de getname: " + status + " " + error));
                }
            })
        })
    }

    loadImages() {
            if(this.nombre) {
            this.huella.src = `${this.src + this.nombre}_Huella.png`;
            this.mini.src = `${this.src + this.nombre}_Mini.png`;

            if (this.shiny) {
                this.base.src = this.getTipo() + '_Shiny.png';
            } else {
                this.base.src = this.getTipo() + '.png';
            }
        }
    }
    getTipo() {
        if (this.tipo == 'contra') {
            return this.src + this.nombre;
        } else {
            return `${this.src + this.nombre}_Bak`;
        }
    }

}
