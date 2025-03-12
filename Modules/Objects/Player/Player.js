class Player extends Image{
    constructor(gender){
        super();
        this.gender = gender || 'B',
        this.stand = `${src + gender}_Standing`,
        this.walk = `${src + gender}_Walk`,
        this.battle = `${src + gender}_Battle`,
        this.captured = `${src + gender}_Captured`,
        this.BattleStart = `${src + gender}_BattleStart`,
        
        this.width = 14,
        this.height = 19,
        this.src = '../../Assets/Player/'
    }

    
}