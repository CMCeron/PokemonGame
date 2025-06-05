class Pokemon {
    constructor(id, tipo, shiny, health = 100) {
        
        this.id = id;

        this.src = 'http://localhost/PokemonGame/Assets/Pokemons/';

        this.nombre = null;
        this.shiny = shiny;
        this.tipo = tipo;
        this.abilities = ['atacar', 'pegar', 'Curar', 'Huir'];

        this.health = health;

        this.huella = new Image();
        this.mini = new Image();
        this.base = new Image();

        this.getName(id);
    }

    getName(id) {
        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Objects/Pokemon/GetPokemon.php',
            method: 'post',
            async: false,
            data: { id: id },
            success: (data) => {
                if(data != 'ERROR'){
                    this.nombre = data;

                    this.loadImages();
                }else{
                    console.log("Pokemon NOMBRE --- ERROR");
                }
            }
        })

    }

    loadImages() {
        if (this.nombre) {
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
