// AUTOR: Armando Ramos
// VERSION: 1.0 

// CREAMOS LA CLASE SKILL DONDE DEFINIMOS LAS HABILIDADES
class Skill{
    
    constructor(name, description, damage, effect, cost){
        this.name = name,
        this.description = description,
        this.damage = damage,
        this.effect = effect,
        this.cost = cost
    }

    useSkill(caster, target){
        target.hp -= this.damage;
        caster.mp -= this.cost; 
    }

}

// CREAMOS LA CLASE CHARACTER DONDE DEFINIMOS LOS PERSONAJES
class Character {

    constructor(name, description, hp, mp, attack, defense, speed, skill1, skill2, skill3, skill4){
        this.name = name,
        this.description = description,
        this.hp = hp,
        this.mp = mp,
        this.attack = attack,
        this.defense = defense,
        this.speed = speed,
        this.skills = [skill1, skill2, skill3, skill4]
    }

}


// CREACIÓN DE HABILIDADES

var fireHorse = new Skill("Caballo de fuego", "Hechizo que libera un caballo de fuego hacia el enemigo. Puede quemar", 500, "quemadura", 100);
var iceSpear = new Skill("Lanza de hielo", "Hechizo que lanza una lanza de hielo. Puede congelar", 400, "congelar", 120);
var stormHammer = new Skill("Martillo de la tormenta", "Hechizo que invoca un martillo hecho de truenos desde el cielo. Puede ralentizar", 800, "ralentizar", 250);
var windKnife = new Skill("Cuchillo de viento", "Hechizo que invoca corrientes de viento cortantes", 350, "", 100);

var elementalist = new Character("Roy Mustang, el Elementalista", "Domina los elementos", 500, 1000, 4, 1, 4, fireHorse, iceSpear, stormHammer, windKnife);

var gargoyle = new Character("Goliath", "Monstruo venido del averno", 10000, 10000, 500, 8, 8, fireHorse, fireHorse, fireHorse, fireHorse);

// GUARDAMOS HABILIDADES DE UN PERSONAJE
var habilidades = [];

// GUARDAMOS LOS PERSONAJES ELEGIDOS
var personajesElegidos = [];

personajesElegidos.push(elementalist);

console.log(personajesElegidos);

// MOSTRAMOS HABILIDADES EN PANTALLA, Y EL MANÁ QUE GASTAN
// INDICAMOS CUAL ES EL PERSONAJE DEL QUE QUEREMOS OBTENER LAS HABILIDADES, Y GUARDAMOS EN UN ARRAY LOS ELEMENTOS H6 CLICKABLES
// CON EVENTO ONCLICK. A ESE EVENTO LE PASAMOS EL PERSONAJE (POR POSICION QUE OCUPA EN EL ARRAY DE PERSONAJES ELEGIDOS) Y LA SKILL A
// USAR (POR POSICION QUE OCUPA EN EL ARRAY DE HABILIDADES DEL PERSONAJE).
// DESPUÉS OBTENEMOS EL DIV DONDE SE MOSTRARAN LAS HABILIDADES A TRAVÉS DE SU ID, Y PINTAMOS LOS ELEMENTOS GUARDADOS EN EL ARRAY 
// EN EL HTML

const muestraHabilidades = (objetoPersonaje, posicionObjeto) => {
    for (let i = 0; i < objetoPersonaje.skills.length; i++) {
        habilidades.push(`<h6 onclick="usaHabilidades(${posicionObjeto}, ${i})">${objetoPersonaje.skills[i].name} <span>(${objetoPersonaje.skills[i].cost})</span></h6>`);
    }
    document.getElementById(`character${posicionObjeto}`).innerHTML = habilidades.join("");
}

// FUNCION CON LA QUE USAMOS HABILIDADES
// AL CLICKAR EN LAS HABILIDADES DE CADA PERSONAJE LLAMAREMOS A ESTA FUNCION
// USARÁ LA HABILIDAD QUE PASEMOS POR PARAMETROS DEL PERSONAJE QUE PASEMOS POR PARAMETROS

const usaHabilidades = (personaje, skill) => {
    personajesElegidos[personaje].skills[skill].useSkill(elementalist, gargoyle);
    console.log("Uso la habilidad " + personajesElegidos[personaje].skills[skill].name)
    console.log("La vida de la gárgola es " + gargoyle.hp);
}

muestraHabilidades(personajesElegidos[0], 0);