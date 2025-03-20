class Pokemon {
    constructor(id, tipo, shiny) {
        this.src = 'Player/../../Assets/Pokemons/';

        this.nombre = null;
        this.shiny = shiny;
        this.tipo = tipo;

        this.huella = new Image();
        this.mini = new Image();
        this.base = new Image();

        this.getName(id);
    }
    
    getName(id) {
        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Objects/Pokemon/GetPokemon.php',
            method: 'post',
            data: { id: id },
            success: (data, status) => {
                this.nombre = data.match(/^.+/);
                this.loadImages();
            }
        })
    }
    
    loadImages() {
        if (this.nombre) {
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
