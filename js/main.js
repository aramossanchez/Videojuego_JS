// AUTOR: Armando Ramos
// VERSION: 1.0 
class Skill{
    
    constructor(name, damage, effect, uses){
        this.name = name,
        this.damage = damage,
        this.effect = effect,
        this.uses = uses
    }

}

class Character {

    constructor(name, hp, attack, defense, speed, skill1, skill2, skill3, skill4){
        this.name = name,
        this.hp = hp,
        this.attack = attack,
        this.defense = defense,
        this.speed = speed,
        this.skills = [skill1, skill2, skill3, skill4]
    }

}