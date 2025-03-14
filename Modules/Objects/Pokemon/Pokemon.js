class Pokemon {
    constructor(id, tipo, shiny) {
        this.src = 'Player/../../Assets/Pokemons/',

            this.huella = new Image()
        this.huella.src = `${this.src + this.getName(id)}_Huella.png`,

            this.mini = new Image()
        this.mini = `${this.src + this.getName(id)}_Mini.png`,

            this.base = () => {
                if (shiny) {
                    return this.tipo(id) + '_Shiny.png'
                } else {
                    return this.tipo(id) + '.png'
                }
            }
    }

    tipo(id) {
        if (tipo == 'enemigo') {
            return this.src + this.getName(id);
        } else {
            return `${this.src + this.getName(id)}_Bak`;
        }
    }

    getName(id) {
        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Objects/Pokemon/GetPokemon.php',
            method: 'post',
            data : {id: id},
            success: (data, status) => {
                return data
            }
        })
    }
}
