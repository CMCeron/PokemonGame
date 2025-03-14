class Player {
    constructor() {
        this.src = 'Player/../../Assets/Player/',
            this.width = 14,
            this.height = 19,

            this.gender = () => {
                $.ajax({
                    url: 'http://localhost/PokemonGame/Modules/Objects/Player/GetPlayer.php',
                    method: 'get',
                    success: (data, status) => {
                        return data
                    }
                })
            },

            this.stand = new Image();
        this.stand.src = `${this.src + this.gender}_Standing.png`,

            this.walk = new Image();
        this.walk.src = `${this.src + this.gender}_Walk.png`,

            this.battle = new Image();
        this.battle.src = `${this.src + this.gender}_Battle.png`,

            this.captured = new Image();
        this.captured.src = `${this.src + this.gender}_Captured.png`,

            this.BattleStart = new Image();
        this.BattleStart.src = `${this.src + this.gender}_BattleStart.png`
    }

}