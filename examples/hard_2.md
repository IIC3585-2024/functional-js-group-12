# Tarea 3: DCCopteros:

## Consideraciones generales

Hola!! fue harto esfuerzo, pero logre implementar todo. El unico problema es que algunas veces al dibujar las lineas en el mapa el programa se crushea por que mi computador se ve sobre exigido.

### Cosas implementadas y no implementadas

* NetWorking: Todo implementado
* Arquitectura Cliente-Servidor: Todo implementado
* Manejo de Bytes: Todo implementado, pero para decodificar la imagen en el juego preferí usar una función que devolviera un pixmap, por comodidad. Así que para decodificar imagenes utilizo "traducir_imagen", del modulo cargar_datos. No es parte de la pauta utilizar explicitamente las funciones de codificación.py
* Interfaz gráfica: Todo implementado, aunque la sala de juegos se pude crushear en el metodo dibujar si se estan ejecutando demasiadas tareas
* Grafos: Todo implementado, estoy especialmente orgulloso de mi metodo para encontrar la ruta más larga
* Reglas DCCópteros: Todo implementado
* General: Todo implementado
* Bonus: implementé ambos. Si el sistema se crushea antes de terminar el juego, intenta descomentar el boton de terminar antes, más info en la PD de las consideraciones


## Ejecución
Tanto en el cliente como en el servidor, me modulo a ejecutar es main.py
    

## Librerías
### Librerías externas utilizadas
La lista de librerías externas que utilicé fue la siguiente:

1. PyQt5, de la cual utilicé multimples modulos. Debe instalarse
2. socket
3. json
4. *random*
5. Aquí hay un link dentro de la lista [link](https://github.com/IIC2233/syllabus/blob/master/Tareas/Descuentos.md).

### Librerías propias
Por otro lado, los módulos que fueron creados fueron los siguientes:

1. **Servidor**:
2. ***Cliente***:

## Supuestos y consideraciones adicionales
Los supuestos que realicé durante la tarea son los siguientes:

1. A los parametros de los puntos le agregue un valor para los caminos de valor 7.
2. Los crusheos se hacen en la parte de dibujar (aunque esta funciona bien por si sola) por que mi comptador no puede con tantas tareas, pero si se deja de dibujar (no llamando al metodo dibujar en la función actualizar_mapa_y_nodos, en el archivo FuncionesSalaJuegos.py), el juego funciona perfecto

PD: El juego a veces se chushea ``print("codigo funciona")`` mientras dibuja, por eso en el archivo SalaJuegos.py, entre las lineas 193 y 203 deje una lineas comentadas. Si se descomentan, aparecerá un botón, que si todos los jugadores presionan terminará el juego antes de tiempo con los puntajes actuales



-------
> Hola, esto es un bloque de cita, y aquí puedo escribir de forma apropiada

## Referencias de código externo

Para realizar mi tarea saqué código de:
1. La Tarea 2, para el manejo de ventanas
2. La AS4, para el manejo de nodos
3. La AF7, para el envio de información
4. La ayudantia 11 de la sección 2, para el manejo de sockets
5. La AF4, para el manejo del gif del bonus


## Descuentos
La guía de descuentos se encuentra [link](https://github.com/IIC2233/syllabus/blob/master/Tareas/Descuentos.md).

![Esto es un imagen](https://www.concierto.cl/wp-content/uploads/2017/10/Florentijn-Hofman-Mama-Duck.jpg)
