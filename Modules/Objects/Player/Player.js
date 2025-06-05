class Player {
    constructor() {
        this.src = 'Player/../../Assets/Player/';
        this.width = 14;
        this.height = 19;

        this.gender = null;

        this.stand = new Image();

        this.walk = new Image();

        this.battle = new Image();

        this.captured = new Image();

        this.BattleStart = new Image();

        this.pokemonActive = null;

        this.getPokemonActive()
        this.getGender();
    }

    getPokemonActive() {
        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Objects/Player/getPokemonActive.php',
            method: 'get',
            async: false,
            success: (data) => {
                const dataArray = JSON.parse(data);
                if(typeof(dataArray)==="object"){
                    this.pokemonActive = new Pokemon(dataArray.id, dataArray.tipo, dataArray.shiny, dataArray.health);
                }else{
                    console.log('Error al obtener el pokemon activo');
                }
            }
        })
    }

    getGender() {
        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Objects/Player/GetPlayer.php',
            method: 'get',
            async: false,
            success: (data, status) => {
                this.gender = data;
                this.loadImages();
            }
        })
    }

    loadImages() {
        if (this.gender) {

            this.stand.src = `${this.src + this.gender}_Standing.png`;
            this.walk.src = `${this.src + this.gender}_Walk.png`;
            this.battle.src = `${this.src + this.gender}_Battle.png`;
            this.BattleStart.src = `${this.src + this.gender}_BattleStart.png`;
            this.captured.src = `${this.src + this.gender}_Captured.png`;
        }
    }
}
