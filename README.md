# Videojuego JS
## Realización de proyecto en academia Geeks Hubs Academy. Nos solicitan realizar un videojuego con JS usando clases e instanciando objetos.
## Se usa para el proyecto las tecnologías HTML, CSS Y JS
# NEED BEAT THE DRAGON
![Logo del Juego](img/logo.png)
Basándome en los juegos de RPG clásicos he decidido enfocar el proyecto hacia la temática "videojuego por turnos".
<br>
Procedo a explicar punto por punto el funcionamiento del videojuego:
* Tenemos creados en el JS las clases `Skill` y `Character`. Hemos creado 8 objetos Character y 4 objetos Skill por cada personaje creado.
***
* En la pantalla inicial aparece el logo del videojuego. Si se pulsa el logo se esconde el div que lo contiene con ```$display:none;```y aparece la primera vista de la aplicación: **Menu Principal**, añadiendo ```$display:flex;``` en el div correspondiente. Se usará este método para cambiar entre vistas durante toda la aplicación.
***
* En este **Menú Principal** se puede entrar al juego pulsando **START** o se puede acceder a la guía del juego pulsando **MANUAL**
***
* Si se decide entrar en manual, se cargará la vista **Manual**. Aquí se puede ver una guía del funcionamiento del juego (escrita directamente en el HTML), así como una explicación detallada de cada personaje y cada una de sus habilidades (para conseguir esto se hace desde el archivo JS, recorriendo el array que contiene a los personajes creados). Se puede volver al menú principal con el botón **MAIN MENU**.
***
*  Si se pulsa el botón **START** se accede a la vista **Selección Personajes**. En esta vista se mostrarán todos los personajes seleccionables para el juego. Desde el archivo JS es desde donde se crea cada tarjeta con la información y la imagen del personaje. Además, desde esa misma orden que pinta toda la información, también se introducen eventos ```onclick```, creados para poder guardar en un array los personajes que se vayan eligiendo. Si se clicka sobre un personaje elegido, se saca del array.
***
* Cuando hay 4 personajes seleccionados, aparece el botón **GO TO THE BATTLE!**, que hace aparece la vista **Pantalla Juego**
***
* La vista **Pantalla Juego** es la más importante de la aplicación, donde tendrá lugar todo lo referente a la partida.


Mostrará la lista de habilidades de cada personaje seleccionado. Cada habilidad que clickemos se guardará en un array (solo podemos clickar una habilidad por personaje). También se muestran las imágenes de los personajes elegidos y la del enemigo.

Cuando pulsas terminar turno las habilidades guardadas en el array se ejecutan. También se ejecutan 2 habilidades del enemigo randomizadas.