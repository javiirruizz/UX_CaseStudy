## Paso 5. Pruebas de Evaluación(P5) 

### 5.a Reclutamiento de usuarios 

Nos ha tocado el grupo LosProyectados cuyo estudio corresponde al caso B y el nuestro con el caso A.

Enlace a su repositorio: https://github.com/DIU3-LosProyectados/UX_CaseStudy/tree/master

En esta tabla asignamos las personas/usuarios que partciparán en las pruebas, incluyendo un perfil con valores mas o menos diferentes para una aproximación mas exacta
tambien incluimos el caso concreto que valoraron.

| Usuarios | Sexo/Edad     | Ocupación   |  Exp.TIC    | Personalidad | Plataforma | Caso
| ------------- | -------- | ----------- | ----------- | -----------  | ---------- | ----
| Alejandro  | H / 20   | Estudiante Informatica | Alta       | Introvertido | Web.       | A 
| Miguel  | H / 27   | Estudiante doctorado  | Media       | Racional       | Web        | A 
| David  | M / 52   | Repartidor    | Baja        | Curioso    | Web      | B 
| Adrian  | H / 20   | Opositor  | Media-Baja       | Extrovertido     | Web        | B 


### 5.b Diseño de las pruebas 

Describimos a continuacion las pruebas a realizar para la evaluacion de estos dos prototipos, adaptados para los dos casos, indicando de forma clara los objetivos y las formas de medida
| # | Tipo de prueba (Maze) | Caso B – Goiko (Hamburguesería) | Caso A – Los Pajaritos (Cafetería) | Métrica principal |
| :-: | :--- | :--- | :--- | :--- |
| **1** | **Click Test** | Localizar el botón para reservar | Localizar el botón para reservar | % clic correcto |
| **2** | **Tarea guiada** | Encontrar un local usando el mapa | Encontrar el local usando el mapa| Tiempo (s) |
| **3** | **Tarea guiada** | Revisar la galería de imágenes |  Revisar galería de imágenes| Tiempo (s) |
| **4** | **Cuestionario SUS** | *Evaluación de usabilidad percibida (ambos casos)* | *Evaluación de usabilidad percibida (ambos casos)* | Puntuación 0-100 |
| **5** | **Eye-tracking** | Varias Pruebas, distintos usuarios | Varias Pruebas, distintos usuarios | TTFF + % AOI |

### 5.c Cuestionario SUS

Aquí se recogen las puntuaciones del test de usabilidad SUS tras el uso de cada prototipo (Caso B: Goiko / Caso A: Los Pajaritos), lo que permite valorar la percepción general de usabilidad por parte de los usuarios. Sigue la estructura cuestionario SUS (impares negativos, pares positivos, le aplicamos los calculos correspondientes)

| # | Ítem SUS | Alejandro | Miguel | Adrian | David |
| :-: | :--- | :-: | :-: | :-: | :-: |
| **1** | Creo que me gustará visitar con frecuencia este website | 5 | 4 | 4 | 3 |
| **2** | Encontré el website innecesariamente complejo | 2 | 1 | 2 | 2 |
| **3** | Pensé que era fácil utilizar este website | 3 | 4 | 4 | 4 |
| **4** | Creo que necesitaría del apoyo de un experto para recorrer el website | 3 | 2 | 1 | 4 |
| **5** | Encontré las funciones del website bastante bien integradas | 4 | 5 | 4 | 3 |
| **6** | Pensé que había demasiada inconsistencia en el website | 2 | 1 | 2 | 3 |
| **7** | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website | 4 | 5 | 4 | 4 |
| **8** | Encontré el website muy grande al recorrerlo | 2 | 2 | 3 | 3 |
| **9** | Me sentí muy confiado en el manejo del website | 4 | 4 | 4 | 3 |
| **10** | Necesito aprender muchas cosas antes de manejarme en el website | 2 | 2 | 1 | 3 |

Como uno de los test para la prueba A/B testing, usaremos el **Cuestionario SUS** que permite valorar la satisfacción de cada usuario con el diseño utilizado (casos A o B).

### Resultados Finales SUS

| Usuario | Caso | SUS | Escala lingüística |
| :--- | :-: | :-: | :--- |
| Alejandro | A | **72.5** | Bueno |
| Miguel | A | **85.0** | Excelente |
| Adrian | B | **77.5** | Bueno |
| David | B | **55.0** | Marginal |
| **Media** | **A / B** | **78.7 / 66.2** | — |

**Conclusión del estudio:** El prototipo 'Los Pajaritos' (Caso A) supera al 'Goiko' (Caso B) con una media de 78,7 frente a 66,2 puntos en el cuestionario SUS.

Los resultados muestran que el Caso A es más consistente y accesible para distintos perfiles de usuario. Por el contrario, el Caso B presenta una mayor barrera de entrada para usuarios con una menor experiencia tecnológica (David, 55,0), mientras que usuarios algo más técnicos logran navegarlo correctamente (Adrián, 77,5). En definitiva, el Caso A demuestra ser más accesible a más parte de usuarios, mientras que el Caso B debería de cambiar su arquitectura para hacer más sencilla de usar para los usuarios menos experimentados.

### 5.d A/B Testing

Para realizar el A/B Testing hemos evaluado los dos casos utilizando las plantillas de Figma. Esto nos ha permitido realizar pruebas enfocadas en el primer clic, la jerarquía visual y la facilidad para encontrar la información clave en la interfaz. Hemos agrupado las tareas por objetivos comunes para poder comparar ambos prototipos.

| Tarea (Intención de uso) | Caso A: Los Pajaritos | Caso B: Goiko |
| :--- | :--- | :--- |
| **1. Navegación Principal** Localizar el botón para reservar | **100% éxito en 1er clic** <br> Los botones centrales de la *Landing Page* son enormes y contrastan con el fondo. La acción es inmediata. | **75% éxito en 1er clic** <br> Los botones están situados a la esquina superior derecha. Se encuentran, pero requieren un escaneo previo de la pantalla. |
| **2. Búsqueda de Información del Local**  Encontrar un local usando el mapa | **(Media: ~15 s)** <br> La pantalla "Nuestro Espacio" usa etiquetas visuales limpias y directas que responden al instante a la necesidad del usuario aunque haya que deslizar hacia el final de la página. | **(Media: ~10 s)** <br> El mapa capta toda la atención visual al deslizar hacia abajo. |
| **3. Búsqueda de Información del Local**  Revisar galería de imágenes | **(Media: ~15 s)** <br> La pantalla "Nuestro Espacio" usa etiquetas visuales limpias y directas que responden al instante a la necesidad del usuario. |  **(Media:~15 s)** La galería llama mucho la atención, pero el texto intermedio entre el mapa y las fotos fue completamente ignorado por los usuarios. |

**Resultado Agregado Global:**
* **Tasa de éxito e intuición:** El Caso A presenta una tasa de acierto en el primer clic casi perfecta, frente a una mayor tasa de duda o en el Caso B aunque sigue siendo buena.
* **Percepción de la estructura:** Los usuarios comprendieron la estructura del Caso A mucho más rápido que la estructura del Caso B.

**Conclusión del A/B Testing:**
El **Caso A (Los Pajaritos)** es  más usable. Al evaluar las webs, ha quedado demostrado que el diseño del Caso A (con su barra superior clara, botones centrales grandes) guía al usuario de forma natural. Por el contrario, el Caso B sufre de una jerarquía de información menos equilibrada: elementos que deberían ser rápidos (como reservar) están algo escondidos, y los elementos que ocupan más espacio visual  no siempre resuelven la tarea principal del usuario, dificultando la navegación especialmente para perfiles con poca experienicia.

### 5.e Aplicación del método Eye Tracking

Estudio del heatmap del caso B:

Para este estudio se recopilaron a dos personas conocidas, se les puso enfrente de la página y se les indico que navegasen tranquilamente por la página y que comentasen lo que veían mas importante, tambien se les indico que viesen que botones les resultaban mas utiles y pulsarian para obtener mas informacion. La tercera persona fue un miembro de nuestro grupo quien bajo un punto de vista critico y ya siendo conocedor de como se hace una web de este estilo tendria una vision mas acertada. Se uso una unica imagen del prototipado para estudiar la diferencia de los distintos usuarios.

Nuestro estudio se basa en mapas de calor que recojen la atencion que presto el usuario con la mirada a los distintos elementos de la pagina para detectar que zonas son las mas llamativas y que captan mejor la atencion del usuario. Tras este estudio llegamos a la siguiente conclusion:

Tras la interpretacion de los mapas de calor generados con la herramienta vista en teoria "GazeMapping", podemos concluir que se mira mucha la parte superior derecha, donde se situan las opciones de hacer pedido, reserva y cuenta del local, concluimos que todos los usuarios buscan acceder a su perfil o acceder a un buscador para encontrar con más velocidad lo que buscan. Por lo general el logo central de la pagina destaca bastante captando la atencion de los usuarios y haciendo que aumente su interes. La zona más visualizada es sin duda el mapa de locales, consiguiendo captar gran parte del tiempo del usuario en analizar el mapa y su proximidad con el, ya sea por interes o simple curiosidad para conoces si cuentan con un local cercano del lugar donde viven. Los textos entre el mapa y la galeria de fotos no tiene mucho exito, un usuario por lo general no suele pararse a leer textos largos, requeiren de algo conciso y llamativo. Por ultimo la zona de galería si consigue captar bastante la atencion por las fotos tan llamativas y buen aspecto de los productos que ofrecen.

<img width="572" height="1600" alt="Heatmap1" src="https://github.com/user-attachments/assets/f7d0e4d6-ea49-47d5-993f-428aa5aaef53" />
<img width="555" height="1600" alt="Heatmap2" src="https://github.com/user-attachments/assets/0b55dbc1-fe4d-4dda-aecf-32eb52cf9ee6" />
<img width="555" height="1600" alt="Heatmap3" src="https://github.com/user-attachments/assets/099dfa93-94e0-4d2b-b4d7-8f4097ff5f32" />


Estudio del heatmap del caso A:

Se analizó dónde fijan la vista 3 usuarios al navegar por la web. El menú y la navegación genera alta atención en la parte superior, buscando atajos rápidos y accesos al perfil personal. Los botones de acción de la cabecera ("VER LA CARTA", "PEDIR AHORA", "RESERVAR") son focos de calor muy intensos y funcionan a la perfección atrayendo la atención del usuario. Las imagenes son un punto muy fuerte de la web ya que los usuarios escanean la web centrándose en las imágenes y los iconos visuales, ignorando en gran medida los párrafos de texto largos.

El Club Pajaritos: La tarjeta de fidelización con un tono oscuro es el elemento que más destaca en su sección, reteniendo mucho la atención del usuario.El pie de página (Footer) recibe atención directa y focalizada de los usuarios que bajan buscando datos concretos: la dirección en Granada y el horario del local.

<img width="1057" height="1600" alt="imagen" src="https://github.com/user-attachments/assets/854f8088-bd73-48d6-8d50-a2b7012d9c14" />
<img width="1057" height="1600" alt="imagen" src="https://github.com/user-attachments/assets/77442056-fd26-4ef1-b008-59bdc6473d96" />
<img width="1057" height="1600" alt="imagen" src="https://github.com/user-attachments/assets/ccc5fee0-6d98-4b5f-bfb5-b734f03a3834" />


### 4.f Usability Report de B
https://github.com/javiirruizz/UX_CaseStudy/blob/master/P4/Usability-Report-template.md
