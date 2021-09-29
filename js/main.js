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

var alientoDragon = new Skill("Aliento Dragon", "Aliento que daña a todos los enemigos a la vez", 550, "", 250);
var espinasDragon = new Skill("Espinas de Dragón", "Se lanzan espinas al suelo que dañan a todos los enemigos al comienzo del turno durante 3 turnos", 100, "", 200);
var placajeDragon = new Skill("Placaje de Dragon", "Empuja a un enemigo realizándole un placaje. Puede empujar", 850, "empujar", 300);
var alaDragon = new Skill("Ala de Dragón", "Golpea con el ala a 2 enemigos aleatorios. Puede provocar sangrado.", 550, "sangrar", 400);

// CREACION DE PERSONAJES
var elementalist = new Character("elementalist", "Gloy Stylish, el Elementalista", "Mago capaz de dominar los elementos. Puede provocar estados alterados con sus hechizos", 500, 1000, 4, 1, 4, fireHorse, iceSpear, stormHammer, windKnife);
var assassin = new Character("assassin", "Nia Nortan, la Asesina", "Asesina entrenada en artes marciales y tecnicas de veneno", 1500, 2000, 10, 2, 9, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, deathStrike)
var pirate = new Character("pirate", "Garragan Blake, el Pirata Zombie", "No sabemos si es un pirata que se ha convertido en zombi, o es un zombi que ha querido hacerse pirata. Lo que sí sabemos es que le gusta la pelea", 3200, 1500, 7, 4, 6, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, habilidadPrueba4 )

var personajePrueba1 = new Character("personajePrueba1", "prueba", "prueba", 1000, 1000, 10, 5, 5, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, habilidadPrueba4);
var personajePrueba2 = new Character("personajePrueba2", "prueba", "prueba", 1000, 1000, 10, 5, 5, habilidadPrueba2, habilidadPrueba1, habilidadPrueba3, habilidadPrueba4);
var personajePrueba3 = new Character("personajePrueba3", "prueba", "prueba", 1000, 1000, 10, 5, 5, habilidadPrueba3, habilidadPrueba2, habilidadPrueba1, habilidadPrueba4);

var dragon = new Character("dragon", "Goliath", "Monstruo venido del averno", 10000, 5000, 500, 8, 8, alientoDragon, espinasDragon, placajeDragon, alaDragon);

// VARIABLES PARA CONTROLAR CUAL PARTE DE LA APLICACION SE VE
var showGame = false;

var pantallaJuego = document.getElementById("pantalla-juego");
var seleccionPersonajes = document.getElementById("seleccion-personajes");

// FUNCION PARA ALTERNAR ENTRE PANTALLAS DE LA APLICACION Y PARA MOSTRAR LAS HABILIDADES DE LOS PERSONAJES ELEGIDOS
const cambiarPantalla = () => {
    if (!showGame) {
        pantallaJuego.style.display = "flex";
        seleccionPersonajes.style.display = "none";
        document.getElementById("switch").style.transform = "scaleY(0)";
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

// EN ESTE ARRAY GUARDAMOS TODOS LOS PERSONAJES ELEGIBLES
var todosLosPersonajes = [elementalist, assassin, pirate, personajePrueba1, personajePrueba2, personajePrueba2, personajePrueba3, personajePrueba3];

// EN ESTE ARRAY GUARDAMOS LOS PERSONAJES ELEGIDOS
var personajesElegidos = [];

// METODO PARA GUARDAR LOS PERSONAJES CLICKADOS EN EL ARRAY DE PERSONAJES SELECCIONADOS
// O PARA ELIMINAR DEL ARRAY DE PERSONAJES SELECCIONADOS EL PERSONAJE QUE VOLVEMOS A CLICKAR
const guardarPersonajeElegido = (lugarArray, id) =>{
    let fichaPersonaje = document.getElementById(id); //GUARDAMOS ELEMENTO DOM DE LA FICHA DEL PERSONAJE ELEGIDO
    if(fichaPersonaje.style.opacity != "0.5"){
        if(personajesElegidos.length < 4){ // SI NO ESTÁ SELECCIONADO, LO SELECCIONAMOS
        personajesElegidos.push(todosLosPersonajes[lugarArray]);
        fichaPersonaje.style.opacity = "0.5";
        }
        if(personajesElegidos.length == 4){
            document.getElementById("switch").style.transform = "scaleY(1)";
        }
    }else{//SI ESTÁ SELECCIONADO, LO ELIMINAMOS DEL ARRAY
        fichaPersonaje.style.opacity = "1";
        let personajeGuardado = (element) => element.id == id; //BUSCA EN EL ARRAY EL ELEMENTO QUE TENGA EL ID IGUAL QUE LA FICHA DE PERSONAJE GUARDADA QUE HEMOS CLICKADO
        let posicionDePersonajeGuardado = personajesElegidos.findIndex(personajeGuardado); //OBTENEMOS INDICE DEL ELEMENTO QUE QUEREMOS ELIMINAR DEL ARRAY
        personajesElegidos.splice(posicionDePersonajeGuardado, 1); //ELIMINAMOS DEL ARRAY EL ELEMENTO CON EL INDICE INDICADO
        document.getElementById("switch").style.transform = "scaleY(0)";
    }
    console.log(personajesElegidos);
}

// CREAMOS ARRAY PARA GUARDAR LAS HABILIDADES QUE MOSTRAREMOS EN CADA LISTA DE HABILIDADES
var habilidades = [];

// MOSTRAMOS PERSONAJES EN LA PANTALLA DE SELECCION DE PERSONAJES
let personaje = document.getElementById("seleccion-personajes");
for (let i = 0; i < todosLosPersonajes.length; i++) {
    personaje.innerHTML = personaje.innerHTML + `<div id="${todosLosPersonajes[i].id}" class="personaje-para-elegir" onclick="guardarPersonajeElegido('${i}', '${todosLosPersonajes[i].id}')">${todosLosPersonajes[i].id}</div>`;
}

// MOSTRAMOS HABILIDADES EN PANTALLA, Y EL MANÁ QUE GASTAN
// INDICAMOS CUAL ES EL PERSONAJE DEL QUE QUEREMOS OBTENER LAS HABILIDADES (INDICAMOS EL OBJETO DEL PERSONAJE POR POSICION EN
// EL ARRAY, Y TAMBIEN INDICAMOS LA POSICION QUE OCUPA EL OBJETO EN EL ARRAY DE PERSONAJES) 
// Y GUARDAMOS EN UN ARRAY LOS ELEMENTOS RADIO CLICKABLES CON EVENTO ONCLICK.
// A ESE EVENTO LE PASAMOS EL PERSONAJE (POR POSICION QUE OCUPA EN EL ARRAY DE PERSONAJES ELEGIDOS) Y LA SKILL A
// USAR (POR POSICION QUE OCUPA EN EL ARRAY DE HABILIDADES DEL PERSONAJE). TAMBIEN LE PASAMOS EL ID DE SU ELEMENTO CONTENEDOR (PARA
// QUITAR EVENTOS DE CLICK Y HACERLO TRANSPARENTE)
// DESPUÉS OBTENEMOS EL DIV DONDE SE MOSTRARAN LAS HABILIDADES A TRAVÉS DE SU ID, Y PINTAMOS LOS ELEMENTOS GUARDADOS EN EL ARRAY 
// EN EL HTML. TRAS GUARDARLO, DEJAMOS EL ARRAY DE HABILIDADES A CERO

const muestraHabilidades = (objetoPersonaje, posicionObjeto) => {
    for (let i = 0; i < objetoPersonaje.skills.length; i++) {
        habilidades.push(`<input type="radio" id="element${posicionObjeto}${i}" name="list${posicionObjeto}" onclick="guardaHabilidades(${posicionObjeto}, ${i}, 'character${posicionObjeto}')"><label for="element${posicionObjeto}${i}">${objetoPersonaje.skills[i].name} <span>(${objetoPersonaje.skills[i].cost})</span></label>`);
    }
    document.getElementById(`character${posicionObjeto}`).innerHTML = `<form>` + habilidades.join("") + "</form>";
    habilidades = [];
}

// FUNCION CON LA QUE GUARDAMOS QUE HABILIDADES VAMOS A USAR
// AL CLICKAR EN LAS HABILIDADES DE CADA PERSONAJE LLAMAREMOS A ESTA FUNCION
// GUARDARÁ EN UN ARRAY EL PERSONAJE Y LA HABILIDAD QUE VA A USAR
// TAMBIEN QUITAMOS LOS EVENTOS DE CLICK EN EL DIV CONTENEDOR DE LA LISTA DE HABILIDADES A LA QUE PERTENECE LA HABILIDAD
// QUE ELEGIMOS, Y LE QUITAMOS OPACIDAD

var habilidadesTurno = [];

const guardaHabilidades = (personaje, skill, id) => {
    document.getElementById(id).style.pointerEvents = "none";
    document.getElementById(id).style.opacity = "0.5";
    habilidadesTurno.push([personaje, skill]);
    console.log(habilidadesTurno);
    // personajesElegidos[personaje].skills[skill].useSkill(elementalist, dragon);
    // console.log("Uso la habilidad " + personajesElegidos[personaje].skills[skill].name)
    // console.log("La vida del dragón es " + dragon.hp);
}

// FUNCION QUE CARGA LA PANTALLA CON TODAS LAS HABILIDADESs
const empezarTurno = () =>{
    document.getElementById("pantalla-empezar-turno").style.display = "none";
    document.getElementById("boton-terminar-turno").style.display = "block"
}

const terminarTurno = () => {
    for (let i = 0; i < habilidadesTurno.length; i++) {
        personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].useSkill(personajesElegidos[i], dragon);
        console.log("Uso la habilidad " + personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].name + " de " + personajesElegidos[i].name + ". Quedan " + personajesElegidos[i].mp + " puntos de maná");
        console.log("La vida del dragón es " + dragon.hp);
    }
}