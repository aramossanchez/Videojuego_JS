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
        target.hp -= parseInt(this.damage * (caster.attack/10));
        caster.mp -= this.cost; 
    }

    useSkillDouble(caster, target1, target2){ //METODO PARA HABILIDADES DE 2 TARGET DEL ENEMIGO
        target1.hp -= parseInt(this.damage * (caster.attack/10));
        target2.hp -= parseInt(this.damage * (caster.attack/10));
        caster.mp -= this.cost; 
    }
    useBerserker(caster, target){
        caster.mp -= this.cost;
        target.attack *= 2;
        target.hp *= 2;
        target.mp *= 2;
        target.state = "berserker"
    }
    useHeal(caster, target){ // METODO PARA USAR HABILIDADES DE CURACION UNITARGET
        caster.mp -= this.cost;
        target.hp += this.damage;

    }
    useHealHealth(target){ // METODO PARA USAR HABILIDADES DE CURACION MULTITARGET. SE EJECUTA EN BUCLE POR TODOS LOS PERSONAJES
        target.hp += this.damage
    }
    useHealMana(caster){ // METODO PARA USAR HABILIDADES DE CURACION MULTITARGET. SE EJECUTA UNA SOLA VEZ
        caster.mp -= this.cost;
    }
    useDeathStrike(caster, target, suerte){
        target.hp -= this.damage * suerte;
        caster.mp -= this.cost;
    }
}

// CREAMOS LA CLASE CHARACTER DONDE DEFINIMOS LOS PERSONAJES
class Character {

    constructor(id, name, description, hp, mp, attack, skill1, skill2, skill3, skill4, img, imgWalking){
        this.id = id,
        this.name = name,
        this.description = description,
        this.hp = hp,
        this.mp = mp,
        this.attack = attack,
        this.skills = [skill1, skill2, skill3, skill4],
        this.img = img,
        this.imgWalking = imgWalking,
        this.state = "";
    }

    getState(state){
        this.state = state;
    }
    getImgWalking(img){
        this.imgWalking = img;
    }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CREACIÓN DE HABILIDADES

//HABILIDADES DE ELEMENTALIST
var fireHorse = new Skill("Fire Horse", "Spell that releases a fire horse towards the enemy. Can burn.", 700, "quemar", 250);
var iceSpear = new Skill("Ice Spear", "Spell that casts an ice spear. Can freeze.", 460, "congelar", 300);
var windKnife = new Skill("Knife Wind", "Spell that summons cutting wind currents. May cause bleeding wounds", 650, "sangrar", 250);
var stormHammer = new Skill("Storm Hammer", "Spell that summons a hammer made of thunder from the sky. Can slow down.", 950, "ralentizar", 350);


//HABILIDADES DE ASSASSIN
var twister = new Skill("Twister", "She unsheathes her 2 blades and begins to spin near her opponent, making multiple cuts. It can poison.", 600, "envenenar", 150);
var doubleStrike = new Skill("Double Strike", "It makes a cut with each of its blades. It can poison.", 950, "envenenar", 250);
var poisonDaggers = new Skill("Poison Daggers", "Throw 2 daggers at the enemy. It can poison.", 750, "envenenar", 200);
var deathStrike = new Skill("Death Strike", "Attack that can kill in one hit, but has a very low chance of hitting.", 10000, "deathStrike", 200);

//HABILIDADES DE DEMON
var fireBall = new Skill("Fire Ball", "Shoot a fireball from the hands. Can burn.", 600, "quemar", 450);
var demonClaws = new Skill("Demon Claws", "It uses its demon claws to attack vital points of the opponent.", 700, "", 150);
var wingStrike = new Skill("Wing Strike", "Use her wings to hit the enemy.", 500, "", 100);
var hell = new Skill("Hell", "Summons demons from hell to attack the enemy.", 950, "", 600);

//HABILIDADES DE ROBOT
var katanaCyberpunk = new Skill("Cyberpunk Katana", "He's a robot with katanas, and he uses them. May cause bleeding wounds.", 750, "sangrar", 100);
var metalJump = new Skill("Metal Jump", "Jump towards the enemy to land on top of him and cause damage.", 650, "", 50);
var metallicWhistle = new Skill("Metalic Whistle", "It uses its loudspeaker to emit a sound that causes a headache to the enemy. It can paralyze.", 500, "paralizar", 150);
var laserBeam = new Skill("Laser Beam", "It is a robot from the future. It has to be able to shoot a laser. And it does.", 1400, "", 300);

//HABILIDADES DE SUN SOLDIER
var punchSun = new Skill("Punch Sun", "Surround his hand with the heat of the sun and strike the enemy. It can burn.", 750, "quemar", 250);
var laserEyes = new Skill("Laser Eyes", "Shoots rays of sunlight through the eyes, causing damage to the enemy.", 650,"", 200);
var lightStrike = new Skill("Light Strike", "He emits a beam of light from his entire body to hit the enemy.",900, "", 400);
var sunSon = new Skill("Sun Son", "He uses all the power given by the sun to make a devastating attack. It can burn.", 1300, "quemar", 700);

//HABILIDADES DE HEALER
var goddessKiss = new Skill("Goddess Kiss", "Heals a random ally for a large amount of health. If the ally already has 100% health, it causes overheal.", 3500, "curar", 250);
var reverseHealing = new Skill("Reverse Healing", "Damage the enemy with black healing magic.", 500, "", 200);
var confusingMedicine = new Skill("Confusing Medicine", "Use a secret medicine against the enemy. It can cause blindness.", 400, "cegar", 300);
var springOfLife = new Skill ("Spring of Life", "Heal all her allies. If the ally already has 100% health, it causes overheal.", 2500, "curarTodos", 1000);

//HABILIDADES DE ANGEL
var lightFist = new Skill("Light Fist", "Strike her enemy with her fist blessed by the god of fighting.", 600, "", 300);
var skysword = new Skill("Sky Sword", "Strike with the sword gifted by the god of war.", 750, "", 400);
var divineBlessing = new Skill("Divine Blessing", "Heals a random ally for part of their health. If the ally already has 100% health, it causes overheal.", 1000, "curar", 350);
var finalJudgment = new Skill("Final Judgment", "Summons pillars of light that strike down her enemy.", 1050, "", 700);


//HABILIDADES DE SHADOW KNIGHT
var darkSword = new Skill("Dark Sword", "He use the sword he stole from a demon to execute a downward slash against his enemy.", 650, "", 100);
var darkSpirits = new Skill("Dark Spirits", "Summons his fallen enemies to wound his enemy. May cause blindness", 500, "cegar", 180);
var berserker = new Skill("Berserker", "Cast a curse on a random ally. It turns him into a monster and doubles his forces.", 0, "aumentarStats", 550);
var blackBreath = new Skill("Black Breath", "He emits a black breath to wound his enemy. May cause blindness.", 900, "cegar", 300)

var habilidadPrueba1 = new Skill("prueba1", "prueba", 500, "", 50);
var habilidadPrueba2 = new Skill("prueba2", "prueba", 500, "", 50);
var habilidadPrueba3 = new Skill("prueba3", "prueba", 500, "", 50);
var habilidadPrueba4 = new Skill("prueba4", "prueba", 500, "", 50);

// CREAMOS HABILIDADES DEL DRAGON
var alientoDragon = new Skill("Breath Dragon", "Breath that damages all enemies at once.", 700, "", 250);
alientoDragon.getType("all");

var espinasDragon = new Skill("Dragon Thorns", "Throws thorns to the ground that damage all enemies at the start of the turn for 3 turns.", 500, "", 200);
espinasDragon.getType("all");

var placajeDragon = new Skill("Dragon Tackle", "Knock back an enemy by tackling them. Can push.", 1450, "empujar", 300);

var alaDragon = new Skill("Dragon Wing", "Wing 2 random enemies. It can cause bleeding.", 900, "sangrar", 400);
alaDragon.getType("double");

// CREACION DE PERSONAJES

//PERSONAJES ELEGIBLES

var assassin = new Character("assassin", "Nia Noltan, the Assassin", "Assassin trained in martial arts and poison techniques.", 1750, 1500, 10, twister, doubleStrike, poisonDaggers, deathStrike, "./img/assassin.gif", "./img/assassin-walking.gif");

var elementalist = new Character("elementalist", "Gloy Stylish, the Elementalist", "It's a frog, yes. And he is a magician too. Use elemental spells with massive damage, and that cause altered states.", 1500, 3500, 9, fireHorse, iceSpear, windKnife, stormHammer, "./img/elementalist.gif", "./img/elementalist-walking.gif");

var demon = new Character("demon", "Liura Blake, the Demon", "We don't know why he wants to help us. What we do know is that he likes the fight.", 3200, 2000, 7, fireBall, demonClaws, wingStrike, hell, "./img/demon.gif", "./img/demon-walking.gif");

var robot = new Character("robot", "BX109 - v1.023, the Robot", "He says he comes from 'what?' year to save 'who?' from a revolution of 'when?' ... Take good hits.", 5600, 900, 5, katanaCyberpunk, metalJump, metallicWhistle, laserBeam, "./img/robot.gif", "./img/robot-walking.gif");

var light = new Character("light", "Liskanor Tein, the Sun Soldier", "He says he is the son of the Sun, who gave him all his powers and abilities ... I don't know, it sounds like a story. But hell, he's strong.", 2750, 3000, 8, punchSun, laserEyes, lightStrike, sunSon, "./img/light.gif", "./img/light-walking.gif");

var healer = new Character("healer", "Suerestil Giysh, the Healer", "No idea where he gets those medicines, but it leaves you as good as new.", 3250, 2000, 4, goddessKiss, reverseHealing, confusingMedicine, springOfLife, "./img/healer.gif", "./img/healer-walking.gif");

var angel = new Character("angel", "Flixinia Golt, the Angel", "Down from heaven to give us a hand. She doesn't like bad guys, she doesn't need any more excuses.", 6500, 2800, 3, lightFist, skysword, divineBlessing, finalJudgment, "./img/angel.gif", "./img/angel-walking.gif");

var knight = new Character("knight", "Blad Nolan, the Shadow Knight", "He doesn't seem very friendly, but he says he wants to help out in compensation for everything he's done in the past.", 4800, 1000, 7, darkSword, darkSpirits, berserker, blackBreath, "./img/knight.gif", "./img/knight-walking.gif");

//ENEMIGO
var dragon = new Character("dragon", "Goliath, the Red Dragon", "Dragon who has decided to camp in the village field. He is angry and does not listen to reasons.", 10000, 20000, 10, alientoDragon, espinasDragon, placajeDragon, alaDragon, "./img/elementalist.gif", "./img/dragon-walking.gif");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CREAMOS LOS SONIDOS
const cancionInit = new Audio("./sound/init.wav");
cancionInit.volume = 0.6;
cancionInit.loop = true;
const cancionManual = new Audio("./sound/manual.wav");
cancionManual.volume = 0.6;
cancionManual.loop = true;
const cancionSelecccion = new Audio("./sound/selection.wav");
cancionSelecccion.volume = 0.6;
cancionSelecccion.loop = true;
const cancionBattle = new Audio("./sound/battle.wav");
cancionBattle.volume = 0.6;
cancionBattle.loop = true;
const cancionGameOver = new Audio("./sound/game-over.wav");
cancionGameOver.volume = 0.6;
cancionGameOver.loop = true;
const cancionWin = new Audio("./sound/win.wav");
cancionWin.volume = 0.6;
cancionWin.loop = true;

const sonidoBoton = new Audio("./sound/sonido-boton.wav");
const sonidoAtaque = new Audio("./sound/sonido-ataque.wav");
const sonidoGuardarPersonaje = new Audio("./sound/sonido-guardar-personaje.wav");
const sonidoSeleccionarHabilidad = new Audio("./sound/sonido-seleccionar-habilidad.wav");


const sonarBoton = () =>{
    sonidoBoton.play();
}

// EN ESTE ARRAY GUARDAMOS TODOS LOS PERSONAJES ELEGIBLES
var todosLosPersonajes = [assassin, elementalist, demon, robot, light, healer, angel, knight];

// MOSTRAMOS PERSONAJES EN LA PANTALLA DE SELECCION DE PERSONAJES
let personaje = document.getElementById("seleccion-personajes");
for (let i = 0; i < todosLosPersonajes.length; i++) {
    personaje.innerHTML = personaje.innerHTML + `<div id="${todosLosPersonajes[i].id}" class="personaje-para-elegir" onclick="guardarPersonajeElegido('${i}', '${todosLosPersonajes[i].id}')"><h1>${todosLosPersonajes[i].name}</h1><img src="${todosLosPersonajes[i].img}"><p>Life: ${todosLosPersonajes[i].hp}</p><p>Mana: ${todosLosPersonajes[i].mp}</p><p>Attack: ${todosLosPersonajes[i].attack}</p></div>`;
}

// EN ESTE ARRAY GUARDAMOS LOS PERSONAJES ELEGIDOS
var personajesElegidos = [];

// METODO PARA GUARDAR LOS PERSONAJES CLICKADOS EN EL ARRAY DE PERSONAJES SELECCIONADOS
// O PARA ELIMINAR DEL ARRAY DE PERSONAJES SELECCIONADOS EL PERSONAJE QUE VOLVEMOS A CLICKAR
const guardarPersonajeElegido = (lugarArray, id) =>{
    sonidoGuardarPersonaje.currentTime = 0;
    sonidoGuardarPersonaje.play();
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VARIABLES PARA ACCEDER AL JUEGO
var logo = document.getElementById("logo");
const entrarMenuPrincipal = () =>{
    logo.style.display = "none";
    menuPrincipal.style.display = "flex";
    cancionInit.play();
}

// VARIABLES PARA CONTROLA PASAR DE LA PANTALLA DE INICIO A LA ELECCION DE PERSONAJES
var menuPrincipal = document.getElementById("menu-principal");
var seleccionPersonajes = document.getElementById("seleccion-personajes");

//FUNCION PARA IR HACIA EL MENÚ DE SELECCIÓN DE PERSONAJE DESDE EL MENU PRINCIPAL
const irSeleccionPersonaje = () =>{
    cancionInit.pause();
    cancionSelecccion.play();
    sonidoBoton.play();
    seleccionPersonajes.style.display = "flex";
    menuPrincipal.style.display = "none";
}

// VARIABLES PARA CONTROLA PASAR DE LA PANTALLA DE INICIO A MANUAL
var manual = document.getElementById("manual");

//FUNCION PARA CAMBIAR HACIA LA PANTALLA MANUAL DESDE INICIO
const irManual = () =>{
    cancionInit.pause();
    cancionInit.currentTime = 0;
    cancionManual.play();
    sonidoBoton.play();
    menuPrincipal.style.display = "none";
    manual.style.display = "flex";
    var manualPersonajes = document.getElementById("manual-personajes");
    manualPersonajes.innerHTML = ""; //RESETEAMOS LA LISTA DE PERSONAJES EN EL MANUAL
    for (let i = 0; i < todosLosPersonajes.length; i++) {
        // PINTAMOS TODA LA INFORMACION DE LOS PERSONAJES. USAMOS UN .MAP PARA PODER PINTAR LAS HABILIDADES DE CADA PERSONAJE
        manualPersonajes.innerHTML = manualPersonajes.innerHTML + `<p>${todosLosPersonajes[i].name}<br><img src="${todosLosPersonajes[i].img}"><br>${todosLosPersonajes[i].description}<br><br>Health Points:${todosLosPersonajes[i].hp}<br>Mana Points:${todosLosPersonajes[i].mp}<br>Attack:${todosLosPersonajes[i].attack}</p><p class="tarjeta-skills">Skills: <br>,,,,,,,,,,,,,,,,,,,,,,,,,${todosLosPersonajes[i].skills.map((skill)=> `<br>${skill.name}<br>Description: ${skill.description}<br>Damage: ${skill.damage}<br>Cost of Mana: ${skill.cost}<br>,,,,,,,,,,,,,,,,,,,,,,`)}</p>`;
    };
    // PINTAMOS INFORMACION DEL DRAGON
    document.getElementById("manual-enemigo").innerHTML = `<h2>Enemy</h2><p>${dragon.name}<br><img src="${dragon.imgWalking}"><br>${dragon.description}<br><br>Health Points: ${dragon.hp}<br>Mana Points: ${dragon.mp}<br>Attack:${dragon.attack}</p><p class="tarjeta-skills">Skills: <br>,,,,,,,,,,,,,,,,,,,,,,,,,${dragon.skills.map((skill)=> `<br>${skill.name}<br>Description: ${skill.description}<br>Damage: ${skill.damage}<br>Cost of Mana: ${skill.cost}<br>,,,,,,,,,,,,,,,,,,,,,,`)}</p>`;
};


//FUNCION PARA CAMBIAR HACIA LA PANTALLA INICIO DESDE MANUAL
const irInicio = () =>{
    cancionManual.pause();
    cancionManual.currentTime = 0;
    cancionInit.play();
    sonidoBoton.play();
    menuPrincipal.style.display = "flex";
    manual.style.display = "none";
};

// VARIABLES PARA PASAR DE LA ELECCION DE PERSONAJES AL JUEGO
var showGame = false;

var pantallaJuego = document.getElementById("pantalla-juego");


// VARIABLE EN LA QUE GUARDAMOS EL ELEMENTO CONTENEDOR DE LAS BARRAS DE SALUD Y MANA
let barrasSaludMana = document.getElementById("barras-salud-mana");

// CREAMOS ARRAY PARA GUARDAR LA VIDA Y EL MANA DE LOS PERSONAJES SELECCIONADOS NECESARIO PARA PODER MOSTRAR CUANTA 
// VIDA Y MANA SE HA PERDIDO EN LAS BARRAS DE SALUD Y DE MANA
let hpPersonajesElegidos = [];
let mpPersonajesElegidos = [];
let hpMaxEnemy = dragon.hp;
let mpMaxEnemy = dragon.mp;

// CALCULA EL PORCENTAJE DE SALUD RESTANTE DE CADA PERSONAJE
const porcentajeSalud = (vidaTotal, vidaActual) =>{
    let hp = parseInt(vidaActual/vidaTotal * 100);
    if (hp <= 0) {
        return 0;
    }else if(hp > 100){
        return 100;
    }else{
        return hp;
    }
     
}

// CALCULA EL PORCENTAJE DE MANA RESTANTE DE CADA PERSONAJE
const porcentajeMana = (manaTotal, manaActual) =>{
    let mp = parseInt(manaActual/manaTotal * 100);
    if (mp <= 0) {
        return 0
    }else if(mp > 100){
        return 100;
    }else{
        return mp;
    }
}

// CON ESTA FUNCION PINTAMOS LAS BARRAS DE SALUD Y MANA DE LOS HEROES ELEGIDOS, Y ACTUALIZAMOS LONGITUD DE BARRAS
//  EN FUNCION DE LOS PUNTOS QUE FALTEN LA LLAMAMOS AL INICIAR EL JUEGO Y DESPUES DE CADA TURNO
const pintarBarrasSaludMana = () =>{
    for (let i = 0; i < personajesElegidos.length; i++) {
        barrasSaludMana.innerHTML = barrasSaludMana.innerHTML + `<div class="barras-de-personaje"><h2>${personajesElegidos[i].name}</h2><div class="texto-barra-salud">${(personajesElegidos[i].hp < 0) ? 0 : personajesElegidos[i].hp}/${hpPersonajesElegidos[i]}<div class="barra-salud" style="width: ${porcentajeSalud(hpPersonajesElegidos[i], personajesElegidos[i].hp)}%;${(personajesElegidos[i].hp > hpPersonajesElegidos[i]) ? 'background-color: lightblue' : 'background-color: chartreuse'}"></div></div><div class="texto-barra-mana">${personajesElegidos[i].mp}/${mpPersonajesElegidos[i]}<div class="barra-mana" style="width: ${porcentajeMana(mpPersonajesElegidos[i], personajesElegidos[i].mp)}%; ${(personajesElegidos[i].mp > mpPersonajesElegidos[i]) ? 'background-color: cyan' : 'background-color: cornflowerblue'}""></div></div></div>`
    }
}

// CON ESTA FUNCION PINTAMOS LAS BARRAS DE SALUD Y MANA DEL ENEMIGO, Y ACTUALIZAMOS LONGITUD DE BARRAS
//  EN FUNCION DE LOS PUNTOS QUE FALTEN LA LLAMAMOS AL INICIAR EL JUEGO Y DESPUES DE CADA TURNO
const pintarBarrasSaludManaEnemigo = () =>{
    document.getElementById("barras-de-enemigo").innerHTML = `<div class="barras-de-personaje"><div class="texto-barra-salud">${(dragon.hp < 0) ? 0 : dragon.hp}/${hpMaxEnemy}<div class="barra-salud" style="width: ${porcentajeSalud(hpMaxEnemy, dragon.hp)}%"></div></div><div class="texto-barra-mana">${dragon.mp}/${mpMaxEnemy}<div class="barra-mana" style="width: ${porcentajeMana(mpMaxEnemy, dragon.mp)}%"></div></div></div>`
}

// FUNCION PARA ALTERNAR ENTRE PANTALLAS DE LA APLICACION Y PARA MOSTRAR LAS HABILIDADES DE LOS PERSONAJES ELEGIDOS
// PINTAMOS TAMBIEN A LOS PERSONAJES EN PANTALLA
const iniciarJuego = () => {
    sonidoBoton.play();
    cancionSelecccion.pause();
    cancionBattle.play();
    // GUARDAMOS EN ARRAY LA VIDA Y EL MANA DE LOS PERSONAJES SELECCIONADOS
    for (let i = 0; i < personajesElegidos.length; i++) {
        hpPersonajesElegidos.push(personajesElegidos[i].hp);
        mpPersonajesElegidos.push(personajesElegidos[i].mp);
    }
    if (!showGame) {
        let heroesBatalla = document.getElementById("heroes-en-batalla");
        let enemigoBatalla = document.getElementById("enemigo-en-batalla");
        pantallaJuego.style.display = "flex";
        seleccionPersonajes.style.display = "none";
        document.getElementById("switch").style.transform = "scaleY(0)";
        // PINTA LA VIDA Y LA SALUD DE LOS PERSONAJES EN LA PANTALLA DE JUEGO
        pintarBarrasSaludMana();
        // PINTA TODOS LAS HABILIDADES DE LOS PERSONAJES Y A LAS IMAGENES DE LOS PERSONAJES EN LA PANTALLA DEL JUEGO
        for (let i = 0; i < personajesElegidos.length; i++) {
            muestraHabilidades(personajesElegidos[i], i);
            heroesBatalla.innerHTML = heroesBatalla.innerHTML + `<div><img id="heroe-en-batalla-${i}" src="${personajesElegidos[i].imgWalking}" alt="Personaje Elegido ${i}"></div>`
        }
        enemigoBatalla.innerHTML = `<h2 id="nombre-dragon">${dragon.name}</h2><div id="fail">FAIL</div><img id="dragon-en-batalla" src="${dragon.imgWalking}" alt="Imagen Dragon"><div id="barras-de-enemigo"></div>`
        pintarBarrasSaludManaEnemigo();
    }else{
        pantallaJuego.style.display = "none";
        seleccionPersonajes.style.display = "flex";
    }
    showGame = !showGame;
}


// FUNCION PARA MOSTRAR DETALLES DE LA HABILIDAD AL PASAR EL RATON POR ENCIMA
const mostrarDescripcion = (id) => {
    let details = document.getElementById(id);
    details.style.display = "inline";
}
const ocultarDescripcion = (id) => {
    let details = document.getElementById(id);
    details.style.display = "none";
}

// CREAMOS ARRAY PARA GUARDAR LAS HABILIDADES QUE MOSTRAREMOS EN CADA LISTA DE HABILIDADES
var habilidades = [];

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
        habilidades.push(`<input type="radio" id="element${posicionObjeto}${i}" name="list${posicionObjeto}" onclick="guardaHabilidades(${posicionObjeto}, ${i}, 'character${posicionObjeto}')"><label id="label-${posicionObjeto}-${i}" onmouseenter="mostrarDescripcion('details-${posicionObjeto}-${i}')" onmouseleave="ocultarDescripcion('details-${posicionObjeto}-${i}')" for="element${posicionObjeto}${i}" style="${(objetoPersonaje.mp < objetoPersonaje.skills[i].cost) ? 'pointer-events : none; opacity: 0.5' : 'pointer-events = initial; opacity: 1'}">${objetoPersonaje.skills[i].name} <span>(${objetoPersonaje.skills[i].cost})</span><div id="details-${posicionObjeto}-${i}" class="details-skills">Base Damage: ${objetoPersonaje.skills[i].damage}<br>Description: ${objetoPersonaje.skills[i].description}</div></label>`);
    }
    // document.getElementById(`character${posicionObjeto}`).innerHTML = `<form>` + habilidades.join("") + "</form>";
    document.getElementById("habilidades-personajes").innerHTML = document.getElementById("habilidades-personajes").innerHTML + `<div id="character${posicionObjeto}" class="lista-habilidades"><form>` + habilidades.join("") + "</form></div>";
    habilidades = [];
}

// FUNCION CON LA QUE GUARDAMOS QUE HABILIDADES VAMOS A USAR
// AL CLICKAR EN LAS HABILIDADES DE CADA PERSONAJE LLAMAREMOS A ESTA FUNCION
// GUARDARÁ EN UN ARRAY EL PERSONAJE Y LA HABILIDAD QUE VA A USAR
// TAMBIEN QUITAMOS LOS EVENTOS DE CLICK EN EL DIV CONTENEDOR DE LA LISTA DE HABILIDADES A LA QUE PERTENECE LA HABILIDAD
// QUE ELEGIMOS, Y LE QUITAMOS OPACIDAD
var habilidadesTurno = [0, 0, 0, 0];

const guardaHabilidades = (personaje, skill, id) => {
    sonidoSeleccionarHabilidad.currentTime = 0;
    sonidoSeleccionarHabilidad.play();
    document.getElementById(id).style.pointerEvents = "none";
    document.getElementById(id).style.opacity = "0.5";
    habilidadesTurno[personaje] = ([personaje, skill]);
}

// FUNCION QUE MUESTRA LA PANTALLA DEL JUEGO, CON TODAS LAS HABILIDADES DE LOS PERSONAJES ELEGIDOS SIN CHECKED, 
// SUS BARRAS DE VIDA Y MANA Y EL DIV CONTENEDOR DE SUS HABILIDADES, BARRAS DE ENEMIGO Y NOMBRE DE ENEMIGO.
// TAMBIEN CARGA EL BOTON DE TERMINAR TURNO
const empezarTurno = () =>{
    sonidoBoton.play();
    document.getElementById("pantalla-empezar-turno").style.display = "none";
    document.getElementById("boton-terminar-turno").style.display = "block";
    document.getElementById("habilidades-personajes").style.display = "flex";
    document.getElementById("barras-salud-mana").style.display = "flex";
    document.getElementById("barras-de-enemigo").style.display = "flex";
    document.getElementById("nombre-dragon").style.display = "block"
    document.getElementById("heroes-en-batalla").innerHTML = ""; //RESETEAMOS LAS IMAGENES Y LAS HABILIDADES DE LOS PERSONAJES
    barrasSaludMana.innerHTML = "";
    pintarBarrasSaludMana();
    pintarBarrasSaludManaEnemigo();
    // PINTA TODOS LAS HABILIDADES DE LOS PERSONAJES Y A LAS IMAGENES DE LOS PERSONAJES EN LA PANTALLA DEL JUEGO
    document.getElementById("habilidades-personajes").innerHTML = "";
    for (let i = 0; i < personajesElegidos.length; i++) {
        muestraHabilidades(personajesElegidos[i], i);
        document.getElementById("heroes-en-batalla").innerHTML = document.getElementById("heroes-en-batalla").innerHTML + `<div><img id="heroe-en-batalla-${i}" src="${personajesElegidos[i].imgWalking}" alt="Personaje Elegido ${i}"></div>`
    }
    let radios = document.getElementsByTagName("input");
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;    
    }
}

// VARIABLE PARA CONTROLA LAS PANTALLAS DE VICTORIA Y DE GAME OVER
var pantallaVictoria = document.getElementById("pantalla-victoria");
var meritosVictoria = document.getElementById("meritos-victoria");
var personajesVictoria = document.getElementById("personajes-victoria");

var pantallaGameOver = document.getElementById("pantalla-game-over");
var resumenDerrota = document.getElementById("resumen-derrota");

// VARIABLE PARA SABER CON CUANTOS TURNOS HAS TERMINADO LA PARTIDA
var turnos = 0;

// FUNCION QUE EJECUTA LAS HABILIDADES DE NUESTROS PERSONAJES, ASI COMO DE NUESTRO ENEMIGO
// EN LA FUNCION SE INVOCA A LOS VALORES DEL ARRAY DONDE GUARDAMOS CUALES HABILIDADES USAR, Y SE EJECUTA
// CADA UNA DE LAS HABILIDADES
// TAMBIEN SE RANDOMIZA EL USO DE HABILIDADES DEL ENEMIGO. EL ENEMIGO LANZARA 2 HABILIDADES EN EL MISMO TURNO DE LAS 4 QUE
// TIENE EN SU PROPIA LISTA DE HABILIDADES
// USAMOS SETTIMEOUT PARA VOLVER A LA PANTALLA DE INICIAR MENÚ
const terminarTurno = () => {
    sonidoBoton.play();
    turnos++;
    let contador = 0;
    document.getElementById("boton-terminar-turno").style.display = "none"
    // LANZAMIENTO DE HABILIDADES DE NUESTROS 4 PERSONAJES
    for (let i = 0; i < habilidadesTurno.length; i++) {
        if (habilidadesTurno[i] != 0) { // ESTO SIRVE PARA HACER QUE SOLO LOS PERSONAJES QUE HAN MARCADO HABILIDAD, SE MUEVAN Y EJECUTEN ALGO
            contador += 1000;
            setTimeout(() => {
                moverHeroe(`heroe-en-batalla-${i}`);
                sonidoAtaque.play();
                // FILTRO PARA HABILIDADES CON MECANICAS ESPECIALES
                switch (personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].effect) {
                    case "aumentarStats":
                        personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].useBerserker(personajesElegidos[i], personajesElegidos[parseInt(Math.random() * (personajesElegidos.length - 0))]);
                        //BUSCA QUE PERSONAJE TIENE EL ESTADO BERSERKER Y CAMBIA SU ASPECTO
                        for (let i = 0; i < personajesElegidos.length; i++) {
                            if (personajesElegidos[i].state == "berserker") {
                                personajesElegidos[i].getImgWalking("./img/berserker.gif");
                            }
                        }
                        //PINTAMOS DE NUEVO LOS HEROES CON EL NUEVO ASPECTO DE BERSERKER
                        document.getElementById("heroes-en-batalla").innerHTML = "";
                        for (let i = 0; i < personajesElegidos.length; i++) {
                            document.getElementById("heroes-en-batalla").innerHTML = document.getElementById("heroes-en-batalla").innerHTML + `<div><img id="heroe-en-batalla-${i}" src="${personajesElegidos[i].imgWalking}" alt="Personaje Elegido ${i}"></div>`
                        }
                        moverHeroe(`heroe-en-batalla-${i}`);//POR UN BUG QUE NO CONOZCO, EL PERSONAJE NO SE MUEVE AL LANZAR LA HABILIDAD. CON ESTO SE SOLUCIONA
                        break;
                    case "curar":
                        personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].useHeal(personajesElegidos[i], personajesElegidos[parseInt(Math.random() * (personajesElegidos.length - 0))]);
                        break;
                    case "curarTodos":
                        for (let a = 0; a < personajesElegidos.length; a++) {
                            personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].useHealHealth(personajesElegidos[a]);
                        }
                        personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].useHealMana(personajesElegidos[i]);
                        break;
                    case "deathStrike":
                        //PASAMOS DE MANERA ALEATORIA UN VALOR DEL ARRAY RULETASUERTE. LA HABILIDAD SOLO HARÁ DAÑO SI OBTIENE EL VALOR 1
                        var ruletaSuerte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
                        var suerte = parseInt(Math.random() * (10-0));
                        var fail = document.getElementById("fail");
                        if(suerte != 9){
                            fail.style.display = "inline";
                            setTimeout(() => {
                                fail.style.display = "none";                                
                            }, 500);
                        }
                        personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].useDeathStrike(personajesElegidos[i], dragon, ruletaSuerte[suerte]);
                        break;
                    default:
                        personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].useSkill(personajesElegidos[i], dragon);
                        console.log("La vida del dragón es " + dragon.hp);
                        break;
                };
                console.log("Uso la habilidad " + personajesElegidos[habilidadesTurno[i][0]].skills[habilidadesTurno[i][1]].name + " de " + personajesElegidos[i].name + ". Quedan " + personajesElegidos[i].mp + " puntos de maná");
                console.log("La vida del dragón es " + dragon.hp);
                // PINTAMOS DE NUEVO LA VIDA Y EL MANA DE CADA PERSONAJE
                barrasSaludMana.innerHTML = "";
                pintarBarrasSaludMana();
                pintarBarrasSaludManaEnemigo();
            }, contador);
        }
    }
    // LANZAMIENTO DE HABILIDADES DEL DRAGON
        for (let i = 0; i < 2; i++) {
            contador += 1000;
            setTimeout(() => {
                if (dragon.hp <= 0) { //SOLO LO EJECUTA SI EL DRAGON ESTÁ MUERTO
                    cancionBattle.pause();
                    cancionWin.play();
                    pantallaVictoria.style.display = "flex";
                    pantallaJuego.style.display = "none";
                    meritosVictoria.innerHTML = `<p>You managed to kill the dragon in ${turnos} turns!</p><p>${personajesElegidos.length} team characters survived!</p>`;
                    personajesVictoria.innerHTML = "";
                    for (let i = 0; i < personajesElegidos.length; i++) {
                        personajesVictoria.innerHTML = personajesVictoria.innerHTML + `<img src="${personajesElegidos[i].img}">`       
                    }
                }else{ //SOLO LO EJECUTA SI EL DRAGON ESTÁ VIVO
                    sonidoAtaque.play();
                    moverEnemigo("dragon-en-batalla");
                    let skillNumber = parseInt(Math.random() * (4 - 0));
                    console.log("Dragon usa el ataque " + dragon.skills[skillNumber].name);
                    switch (dragon.skills[skillNumber].type) {
                        case "single":
                            let target = parseInt(Math.random() * (personajesElegidos.length - 0));
                            dragon.skills[skillNumber].useSkill(dragon, personajesElegidos[target]);
                            console.log("Hiere a " + personajesElegidos[target].name);
                            break;
                        case "double":
                            if (personajesElegidos.length > 1) {
                            let target1 = parseInt(Math.random() * (personajesElegidos.length - 0));
                            let target2 = parseInt(Math.random() * (personajesElegidos.length - 0));
                            while (target1 == target2) {
                                target2 = parseInt(Math.random() * (personajesElegidos.length - 0));
                            }
                            dragon.skills[skillNumber].useSkillDouble(dragon, personajesElegidos[target1], personajesElegidos[target2]);
                            console.log("Hiere a " + personajesElegidos[target1].name + " y a " + personajesElegidos[target2].name);
                            }
                            if (personajesElegidos.length == 1) {
                                let target1 = personajesElegidos[0];
                                dragon.skills[skillNumber].useSkillDouble(dragon, target1, target1);
                                console.log("Hiere a " + target1.name + " y a " + target1.name);
                            }
                            break;
                        case "all":
                            for (let i = 0; i < personajesElegidos.length; i++) {
                                dragon.skills[skillNumber].useSkill(dragon, personajesElegidos[i]);
                                console.log("Hiere a " + personajesElegidos[i].name)
                            }
                            break;
                    
                        default:
                            break;
                    }
                    // PINTAMOS DE NUEVO LA VIDA Y EL MANA DE CADA PERSONAJE
                    barrasSaludMana.innerHTML = "";
                    pintarBarrasSaludMana();
                    pintarBarrasSaludManaEnemigo();
                }
            }, contador);
        }
        if (dragon.hp > 0) {//SOLO LO EJECUTA SI EL DRAGON ESTÁ VIVO
            // ESTO SE EJECUTARÁ TRAS TODOS LOS ATAQUES DE LOS HEROES Y DEL ENEMIGO
            contador += 1000;
            setTimeout(() => {
                habilidadesTurno = [0, 0, 0, 0];
                // HABILITAMOS DE NUEVO EL USO DE HABILIDADES
                for (let i = 0; i < personajesElegidos.length; i++) {
                    document.getElementById(`character${i}`).style.pointerEvents = "initial";
                    document.getElementById(`character${i}`).style.opacity = "1";            
                }
                // SACAMOS DEL ARRAY DE PERSONAJES ELEGIDOS LOS PERSONAJES QUE HAYAN MUERTO
                // NECESITO UN WHILE PARA PODER REINICIAR EL CONTADOR Y QUE VUELVA A BUSCAR EN TODO EL ARRAY SI HAY ALGÚN PERSONAJE MUERTO
                let contador = 0;
                while (contador < personajesElegidos.length) {
                    if (personajesElegidos[contador].hp <= 0) {
                        personajesElegidos.splice(contador, 1); //ELIMINO DEL ARRAY DE PERSONAJES EL QUE HA MUERTO
                        hpPersonajesElegidos.splice(contador, 1); //ELIMINO DEL ARRAY DE VIDAS LA DEL PERSONAJE MUERTO
                        mpPersonajesElegidos.splice(contador, 1); //ELIMINO DEL ARRAY DE MANA LA DEL PERSONAJE MUERTO
                        contador = -1; // INICIALIZAMOS VARIABLE A -1 PORQUE SIEMPRE SUMAMOS 1 AL CONTADOR ANTES DE SALIR DEL BUCLE. NECESITAMOS QUE CONTADOR EMPIEZE EL WHILE EN 0 SIEMPRE QUE DETECTE UN PERSONAJE MUERTO
                    }
                    contador++;
                }
                //CONTROLAMOS SI TODOS LOS PERSONAJES ESTÁN MUERTOS PARA PARAR EL JUEGO
                if (personajesElegidos.length == 0) {
                    cancionBattle.pause();
                    cancionGameOver.play();
                    pantallaJuego.style.display = "none";
                    pantallaGameOver.style.display = "flex";
                    resumenDerrota.innerHTML = `<p>The dragon has finished you in ${turnos} turns</p>`;
                }else{
                    document.getElementById("pantalla-empezar-turno").style.display = "flex";
                }
            }, contador);
        }
}

// HACE QUE LA IMAGEN DEL PERSONAJE SE MUEVA CUANDO ATACA, Y QUE SE PUEDA VOLVER A MOVER EN SU SIGUIENTE ATAQUE
const moverHeroe = (id) =>{
    document.getElementById(id).style.animationName = "moveHeroe";
    document.getElementById(id).style.animationDuration = "0.4s";
    setTimeout(() => {
        document.getElementById(id).style.animationName = "";
        document.getElementById(id).style.animationDuration = "0s";
    }, 400);
}

// HACE QUE LA IMAGEN DEL ENEMIGO SE MUEVA CUANDO ATACA, Y QUE SE PUEDA VOLVER A MOVER EN SU SIGUIENTE ATAQUE
const moverEnemigo = (id) =>{
    document.getElementById(id).style.animationName = "moveEnemy";
    document.getElementById(id).style.animationDuration = "0.4s";
    setTimeout(() => {
        document.getElementById(id).style.animationName = "";
        document.getElementById(id).style.animationDuration = "0s";
    }, 400);
}