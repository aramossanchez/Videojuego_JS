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

    constructor(id, name, description, hp, mp, attack, defense, speed, skill1, skill2, skill3, skill4){
        this.id = id,
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
var windKnife = new Skill("Cuchillo de viento", "Hechizo que invoca corrientes de viento cortantes", 350, "sangrar", 100);

var deathStrike = new Skill("Golpe mortal", "Ataque que puede matar de un solo golpe, pero tiene muy poca probabilidad de acertar", 10000, "", 200);

var habilidadPrueba1 = new Skill("prueba1", "prueba", 500, "", 50);
var habilidadPrueba2 = new Skill("prueba2", "prueba", 500, "", 50);
var habilidadPrueba3 = new Skill("prueba3", "prueba", 500, "", 50);
var habilidadPrueba4 = new Skill("prueba4", "prueba", 500, "", 50);

// CREACION DE PERSONAJES
var elementalist = new Character("elementalist", "Gloy Stylish, el Elementalista", "Mago capaz de dominar los elementos. Puede provocar estados alterados con sus hechizos", 500, 1000, 4, 1, 4, fireHorse, iceSpear, stormHammer, windKnife);
var assassin = new Character("assassin", "Nia Nortan, la Asesina", "Asesina entrenada en artes marciales y tecnicas de veneno", 1500, 2000, 10, 2, 9, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, deathStrike)
var personajePrueba1 = new Character("personajePrueba1", "prueba", "prueba", 1000, 1000, 10, 5, 5, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, habilidadPrueba4);
var personajePrueba2 = new Character("personajePrueba2", "prueba", "prueba", 1000, 1000, 10, 5, 5, habilidadPrueba2, habilidadPrueba1, habilidadPrueba3, habilidadPrueba4);
var personajePrueba3 = new Character("personajePrueba3", "prueba", "prueba", 1000, 1000, 10, 5, 5, habilidadPrueba3, habilidadPrueba2, habilidadPrueba1, habilidadPrueba4);

var gargoyle = new Character("Goliath", "Monstruo venido del averno", 10000, 5000, 500, 8, 8, fireHorse, fireHorse, fireHorse, fireHorse);

// VARIABLES PARA CONTROLAR CUAL PARTE DE LA APLICACION SE VE
var showGame = false;

var pantallaJuego = document.getElementById("pantalla-juego");
var seleccionPersonajes = document.getElementById("seleccion-personajes");

// FUNCION PARA ALTERNAR ENTRE PANTALLAS DE LA APLICACION Y PARA MOSTRAR LAS HABILIDADES DE LOS PERSONAJES ELEGIDOS
const cambiarPantalla = () => {
    if (!showGame) {
        pantallaJuego.style.display = "flex";
        seleccionPersonajes.style.display = "none";
        // PINTA TODOS LAS HABILIDADES DE LOS PERSONAJES EN LA PANTALLA DEL JUEGO
        for (let i = 0; i < personajesElegidos.length; i++) {
            muestraHabilidades(personajesElegidos[i], i);
        }
    }else{
        pantallaJuego.style.display = "none";
        seleccionPersonajes.style.display = "flex";
    }
    showGame = !showGame;
}

// GUARDAMOS HABILIDADES DE UN PERSONAJE
var habilidades = [];

// EN ESTE ARRAY GUARDAMOS TODOS LOS PERSONAJES ELEGIBLES
var todosLosPersonajes = [elementalist, assassin, personajePrueba1, personajePrueba1, personajePrueba2, personajePrueba2, personajePrueba3, personajePrueba3];

// EN ESTE ARRAY GUARDAMOS LOS PERSONAJES ELEGIDOS
var personajesElegidos = [];

// METODO PARA GUARDAR LOS PERSONAJES ELEGIDOS
const guardarPersonajeElegido = (lugarArray) =>{
    personajesElegidos.push(todosLosPersonajes[lugarArray]);
    console.log(personajesElegidos);
}

// MOSTRAMOS PERSONAJES EN LA PANTALLA DE SELECCION DE PERSONAJES
let personaje = document.getElementById("seleccion-personajes");
for (let i = 0; i < todosLosPersonajes.length; i++) {
    personaje.innerHTML = personaje.innerHTML + `<div id="${todosLosPersonajes[i].id}" class="personaje-para-elegir" onclick="guardarPersonajeElegido('${i}')">${todosLosPersonajes[i].id}</div>`;
}

// MOSTRAMOS HABILIDADES EN PANTALLA, Y EL MANÁ QUE GASTAN
// INDICAMOS CUAL ES EL PERSONAJE DEL QUE QUEREMOS OBTENER LAS HABILIDADES (INDICAMOS EL OBJETO DEL PERSONAJE POR POSICION EN
// EL ARRAY, Y TAMBIEN INDICAMOS LA POSICION QUE OCUPA EL OBJETO EN EL ARRAY DE PERSONAJES) 
// Y GUARDAMOS EN UN ARRAY LOS ELEMENTOS H6 CLICKABLES CON EVENTO ONCLICK.
// A ESE EVENTO LE PASAMOS EL PERSONAJE (POR POSICION QUE OCUPA EN EL ARRAY DE PERSONAJES ELEGIDOS) Y LA SKILL A
// USAR (POR POSICION QUE OCUPA EN EL ARRAY DE HABILIDADES DEL PERSONAJE).
// DESPUÉS OBTENEMOS EL DIV DONDE SE MOSTRARAN LAS HABILIDADES A TRAVÉS DE SU ID, Y PINTAMOS LOS ELEMENTOS GUARDADOS EN EL ARRAY 
// EN EL HTML. TRAS GUARDARLO, DEJAMOS EL ARRAY DE HABILIDADES A CERO

const muestraHabilidades = (objetoPersonaje, posicionObjeto) => {
    for (let i = 0; i < objetoPersonaje.skills.length; i++) {
        habilidades.push(`<h6 onclick="usaHabilidades(${posicionObjeto}, ${i})">${objetoPersonaje.skills[i].name} <span>(${objetoPersonaje.skills[i].cost})</span></h6>`);
    }
    document.getElementById(`character${posicionObjeto}`).innerHTML = habilidades.join("");
    habilidades = [];
}

// FUNCION CON LA QUE USAMOS HABILIDADES
// AL CLICKAR EN LAS HABILIDADES DE CADA PERSONAJE LLAMAREMOS A ESTA FUNCION
// USARÁ LA HABILIDAD QUE PASEMOS POR PARAMETROS, DEL PERSONAJE QUE PASEMOS POR PARAMETROS

const usaHabilidades = (personaje, skill) => {
    personajesElegidos[personaje].skills[skill].useSkill(elementalist, gargoyle);
    console.log("Uso la habilidad " + personajesElegidos[personaje].skills[skill].name)
    console.log("La vida de la gárgola es " + gargoyle.hp);
}