// AUTOR: Armando Ramos
// VERSION: 1.0 

// CREAMOS LA CLASE SKILL DONDE DEFINIMOS LAS HABILIDADES
class Skill{
    
    constructor(name, description, damage, effect, cost){
        this.name = name,
        this.description = description,
        this.damage = damage,
        this.effect = effect,
        this.cost = cost,
        this.type = "single";
    }

    getType(type){ //PODEMOS CAMBIAR EL TIPO DE HABILIDAD. ESTO SE REFIERE A CUANTOS TARGET PUEDE TENER LA SKILL
        this.type = type
    }

    useSkill(caster, target){
        target.hp -= this.damage;
        caster.mp -= this.cost; 
    }

    useSkillDouble(caster, target1, target2){ //METODO PARA HABILIDADES DE 2 TARGET
        target1.hp -= this.damage;
        target2.hp -= this.damage;
        caster.mp -= this.cost; 
    }

    useSkillAll(caster, target1, target2, target3, target4){ //METODO PARA HABILIDADES DE 4 TARGET
        target1.hp -= this.damage;
        target2.hp -= this.damage;
        target3.hp -= this.damage;
        target4.hp -= this.damage;
        caster.mp -= this.cost; 
    }

}

// CREAMOS LA CLASE CHARACTER DONDE DEFINIMOS LOS PERSONAJES
class Character {

    constructor(id, name, description, hp, mp, attack, defense, speed, skill1, skill2, skill3, skill4, img, imgWalking){
        this.id = id,
        this.name = name,
        this.description = description,
        this.hp = hp,
        this.mp = mp,
        this.attack = attack,
        this.defense = defense,
        this.speed = speed,
        this.skills = [skill1, skill2, skill3, skill4],
        this.img = img,
        this.imgWalking = imgWalking
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

// CREAMOS HABILIDADES DEL DRAGON
var alientoDragon = new Skill("Aliento Dragon", "Aliento que daña a todos los enemigos a la vez", 550, "", 250);
alientoDragon.getType("all");

var espinasDragon = new Skill("Espinas de Dragón", "Se lanzan espinas al suelo que dañan a todos los enemigos al comienzo del turno durante 3 turnos", 100, "", 200);
espinasDragon.getType("all");

var placajeDragon = new Skill("Placaje de Dragon", "Empuja a un enemigo realizándole un placaje. Puede empujar", 850, "empujar", 300);

var alaDragon = new Skill("Ala de Dragón", "Golpea con el ala a 2 enemigos aleatorios. Puede provocar sangrado.", 550, "sangrar", 400);
alaDragon.getType("double");

// CREACION DE PERSONAJES
var elementalist = new Character("elementalist", "Gloy Stylish, the Elementalist", "Es una rana, si. Y es un mago también. Usa hechizos elementales con daño masivo, y que provocan estados alterados.", 1500, 2000, 9, 1, 4, fireHorse, iceSpear, stormHammer, windKnife, "./img/elementalist.gif", "./img/elementalist-walking.gif");
var assassin = new Character("assassin", "Nia Noltan, the Assassin", "Asesina entrenada en artes marciales y tecnicas de veneno", 1750, 1000, 10, 2, 9, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, deathStrike, "./img/assassin.gif", "./img/robot-walking.gif");
var demon = new Character("demon", "Liura Blake, the Demon", "No sabemos porque nos quiere ayudar. Lo que sí sabemos es que le gusta la pelea", 3200, 1500, 7, 5, 6, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, habilidadPrueba4, "./img/demon.gif", "./img/robot-walking.gif");
var robot = new Character("robot", "BX109 - v1.023, the Robot", "Dice que viene de nosequé año para salvar a nosequién de una revolución de nosecuando... Aguanta buenos golpes.", 5600, 900, 5, 8, 4, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, habilidadPrueba4, "./img/robot.gif", "./img/robot-walking.gif");
var light = new Character("light", "Liskanor Tein, the Sun's Soldier", "Dice que es hijo del Sol, que le dio todos sus poderes y habilidades... No se, suena a cuento. Pero demonios, es fuerte.", 4500, 1250, 8, 3, 6, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, habilidadPrueba4, "./img/light.gif", "./img/robot-walking.gif");
var healer = new Character("healer", "Sue Giys, the Healer", "Ni idea de donde saca esas medicinas, pero te deja como nuevo.", 3250, 2000, 4, 4, 3, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, habilidadPrueba4, "./img/healer.gif", "./img/healer-walking.gif");
var angel = new Character("angel", "Flixinia Goltric, the Angel", "Bajada del cielo para echarnos una mano. No le gustan los malos, no necesita más excusas.", 5000, 2250, 3, 7, 8, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, habilidadPrueba4, "./img/angel.gif", "./img/robot-walking.gif");
var knight = new Character("knight", "Lucius Morrigan, the Shadow Knight", "No parece muy amigable, pero dice que quiere echar una mano en compensación de todo lo que hizo en el pasado.", 4800, 650, 7, 6, 2, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, habilidadPrueba4, "./img/knight.gif", "./img/knight-walking.gif");

var personajePrueba1 = new Character("personajePrueba1", "prueba1", "prueba", 1000, 1000, 10, 5, 5, habilidadPrueba1, habilidadPrueba2, habilidadPrueba3, habilidadPrueba4, "./img/elementalist.gif");
var personajePrueba2 = new Character("personajePrueba2", "prueba2", "prueba", 1000, 1000, 10, 5, 5, habilidadPrueba2, habilidadPrueba1, habilidadPrueba3, habilidadPrueba4, "./img/elementalist.gif");
var personajePrueba3 = new Character("personajePrueba3", "prueba3", "prueba", 1000, 1000, 10, 5, 5, habilidadPrueba3, habilidadPrueba2, habilidadPrueba1, habilidadPrueba4, "./img/elementalist.gif");

var dragon = new Character("dragon", "Goliath", "Dragón que ha decidido acampar en el campo del pueblo. Está enfadado y no atiende a razones.", 10000, 5000, 500, 8, 8, alientoDragon, espinasDragon, placajeDragon, alaDragon, "./img/elementalist.gif", "./img/dragon-walking.gif");

// VARIABLES PARA CONTROLAR CUAL PARTE DE LA APLICACION SE VE
var showGame = false;

var pantallaJuego = document.getElementById("pantalla-juego");
var seleccionPersonajes = document.getElementById("seleccion-personajes");

// FUNCION PARA ALTERNAR ENTRE PANTALLAS DE LA APLICACION Y PARA MOSTRAR LAS HABILIDADES DE LOS PERSONAJES ELEGIDOS
const cambiarPantalla = () => {
    if (!showGame) {
        let escenarioBatalla = document.getElementById("escenario-batalla");
        let heroesBatalla = document.getElementById("heroes-en-batalla");
        pantallaJuego.style.display = "flex";
        seleccionPersonajes.style.display = "none";
        document.getElementById("switch").style.transform = "scaleY(0)";
        // PINTA TODOS LAS HABILIDADES DE LOS PERSONAJES EN LA PANTALLA DEL JUEGO
        for (let i = 0; i < personajesElegidos.length; i++) {
            muestraHabilidades(personajesElegidos[i], i);
            heroesBatalla.innerHTML = heroesBatalla.innerHTML + `<div><img src="${personajesElegidos[i].imgWalking}"></div>`
        }
        escenarioBatalla.innerHTML = escenarioBatalla.innerHTML + `<div id="enemigo-en-batalla"><img src="${dragon.imgWalking}"></div>`
    }else{
        pantallaJuego.style.display = "none";
        seleccionPersonajes.style.display = "flex";
    }
    showGame = !showGame;
}

// EN ESTE ARRAY GUARDAMOS TODOS LOS PERSONAJES ELEGIBLES
var todosLosPersonajes = [elementalist, assassin, demon, robot, light, healer, angel, knight];

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
}

// CREAMOS ARRAY PARA GUARDAR LAS HABILIDADES QUE MOSTRAREMOS EN CADA LISTA DE HABILIDADES
var habilidades = [];

// MOSTRAMOS PERSONAJES EN LA PANTALLA DE SELECCION DE PERSONAJES
let personaje = document.getElementById("seleccion-personajes");
for (let i = 0; i < todosLosPersonajes.length; i++) {
    personaje.innerHTML = personaje.innerHTML + `<div id="${todosLosPersonajes[i].id}" class="personaje-para-elegir" onclick="guardarPersonajeElegido('${i}', '${todosLosPersonajes[i].id}')"><h1>${todosLosPersonajes[i].name}</h1><img src="${todosLosPersonajes[i].img}"><p>Life: ${todosLosPersonajes[i].hp}</p><p>Mana: ${todosLosPersonajes[i].mp}</p><p>Attack: ${todosLosPersonajes[i].attack}</p><p>Defense: ${todosLosPersonajes[i].defense}</p><p>Speed: ${todosLosPersonajes[i].speed}</p></div>`;
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
}

// FUNCION QUE CARGA LA PANTALLA DEL JUEGO, CON TODAS LAS HABILIDADES DE LOS PERSONAJES ELEGIDOS
// TAMBIEN CARGAR EL BOTON DE TERMINAR TURNO
const empezarTurno = () =>{
    document.getElementById("pantalla-empezar-turno").style.display = "none";
    document.getElementById("boton-terminar-turno").style.display = "block"
    let radios = document.getElementsByTagName("input");
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;    
    }
}

// FUNCION QUE EJECUTA LAS HABILIDADES DE NUESTROS PERSONAJES, ASI COMO DE NUESTRO ENEMIGO
// EN LA FUNCION SE INVOCA A LOS VALORES DEL ARRAY DONDE GUARDAMOS CUALES HABILIDADES USAR, Y SE EJECUTA
// CADA UNA DE LAS HABILIDADES
// TAMBIEN SE RANDOMIZA EL USO DE HABILIDADES DEL ENEMIGO. EL ENEMIGO LANZARA 2 HABILIDADES EN EL MISMO TURNO DE LAS 4 QUE
// TIENE EN SU PROPIA LISTA DE HABILIDADES
// USAMOS SETTIMEOUT PARA VOLVER A LA PANTALLA DE INICIAR MENÚ
const terminarTurno = () => {
    document.getElementById("boton-terminar-turno").style.display = "none"
    // LANZAMIENTO DE HABILIDADES DE NUESTROS 4 PERSONAJES
    for (let i = 0; i < habilidadesTurno.length; i++) {
            personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].useSkill(personajesElegidos[i], dragon);
            console.log("Uso la habilidad " + personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].name + " de " + personajesElegidos[i].name + ". Quedan " + personajesElegidos[i].mp + " puntos de maná");
            console.log("La vida del dragón es " + dragon.hp);
    }
    // LANZAMIENTO DE HABILIDADES DEL DRAGON
    for (let i = 0; i < 2; i++) {
        let skillNumber = parseInt(Math.random() * (4 - 0));
        console.log("Dragon usa el ataque " + dragon.skills[skillNumber].name);
        switch (dragon.skills[skillNumber].type) {
            case "single":
                let target = parseInt(Math.random() * (4 - 0));
                dragon.skills[skillNumber].useSkill(dragon, personajesElegidos[target]);
                console.log("Hiere a " + personajesElegidos[target].name);
                break;
            case "double":
                let target1 = parseInt(Math.random() * (4 - 0));
                let target2 = parseInt(Math.random() * (4 - 0));
                while (target1 == target2) {
                    target2 = parseInt(Math.random() * (4 - 0));
                }
                dragon.skills[skillNumber].useSkillDouble(dragon, personajesElegidos[target1], personajesElegidos[target2]);
                console.log("Hiere a " + personajesElegidos[target1].name + " y a " + personajesElegidos[target2].name);
                break;
            case "all":
                dragon.skills[skillNumber].useSkillAll(dragon, personajesElegidos[0], personajesElegidos[1], personajesElegidos[2], personajesElegidos[3]);
                console.log("Hiere a " + personajesElegidos[0].name + ", a " + personajesElegidos[1].name + ", a " + personajesElegidos[2].name + " y a " + personajesElegidos[3].name);
                break;
        
            default:
                break;
        }
    }
    setTimeout(() => {
        document.getElementById("pantalla-empezar-turno").style.display = "flex";
        habilidadesTurno = [];
        for (let i = 0; i < 4; i++) {
            document.getElementById(`character${i}`).style.pointerEvents = "initial";
            document.getElementById(`character${i}`).style.opacity = "1";            
        }
    }, 500);
}