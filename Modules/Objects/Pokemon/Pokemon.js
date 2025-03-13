class Pokemon {
    constructor(id, tipo, shiny) {
        this.src = 'Player/../../Assets/Pokemons/',

        this.huella = new Image()
        this.huella.src = `${this.src + this.getName()}_Huella.png`,
        
        this.mini = new Image()
        this.mini = `${this.src + this.getName()}_Mini.png`,
        
        this.base = ()=>{
            if(shiny){
                return this.tipo() + '_Shiny.png'
            }else{
                return this.tipo() + '.png'
            }
        }
    }

    tipo(){
        if(tipo == 'enemigo'){
            return this.src + this.getName();
        }else{
            return `${this.src + this.getName()}_Bak`;
        }
    }
    
    getPokemon() {

    }
}
