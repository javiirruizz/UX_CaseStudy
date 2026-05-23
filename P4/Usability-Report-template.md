# Usability Report

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF017nhV-TFmNER2OM8UbXtdN6xwAKBYrv0i6onNfKu6Yn0BV0RK6aiOroeXl73LSY-B0&usqp=CAU" alt="usability Download png" style="height:150px" />

### Evaluación de usabilidad del proyecto GOIKO (Caso B)
**Fecha:** 23/05/2026
**Enlace a GITHUB del proyecto:** [DIU3-LosProyectados](https://github.com/DIU3-LosProyectados/UX_CaseStudy/tree/master)

### Realizado por:  
**Equipo DIUAK_A2** (Javier Ruiz Ramírez y Daniel Ortega Moreno). Estudiantes de Diseño de Interfaces de Usuario encargados de realizar una auditoría UX cruzada sobre el prototipo de la hamburguesería Goiko.

---

## 1. Resumen Ejecutivo (Executive Summary)

* **Objetivo:** Evaluar la usabilidad y accesibilidad de la web del restaurante Goiko (Caso B) mediante un estudio *Between-Subjects*, comparando su rendimiento frente al Caso A para identificar barreras de navegación.
* **Metodología:** Se ha empleado A/B Testing mediante tareas guiadas, cuestionarios SUS para la evaluación de la usabilidad percibida y análisis biométrico (Eye Tracking) con GazeMapping sobre una muestra representativa de usuarios.
* **Principales Hallazgos:** 1. Los botones de acción principal (CTA) carecen de inmediatez al estar desplazados a esquinas superiores, requiriendo escaneo visual previo.
  2. Existe una desconexión visual entre el mapa y la galería, con bloques de texto intermedios que los usuarios ignoran por completo.
  3. Los usuarios con menor competencia digital experimentan frustración (Puntuación SUS: 55).
* **Resultado Global:** El sistema obtiene una puntuación **SUS media de 66.2** (Marginal). Es un diseño visualmente atractivo, pero presenta barreras arquitectónicas para perfiles no tecnológicos.

## 2. Metodología y Reclutamiento

* **Perfil de los participantes:** Se evaluó el Caso B con 2 usuarios externos con perfiles contrastados: David (52 años, repartidor, baja experiencia TIC) y Adrián (20 años, opositor, media-baja experiencia TIC).
* **Escenario de la prueba:** Navegación por el prototipo para resolver tareas clave: localizar el restaurante más cercano usando el mapa interactivo y revisar la galería visual.
* **Herramientas:** GazeMapping para mapas de calor, formularios online para test SUS y emulación analítica A/B Testing basada en clics.

## 3. Resultados del Cuestionario SUS (Datos Cuantitativos)

El análisis del cuestionario SUS revela una clara brecha de usabilidad dependiente del perfil técnico del usuario:

* **Usuario Adrián (Exp. Media-Baja):** 77.5 (Bueno).
* **Usuario David (Exp. Baja):** 55.0 (Marginal).
* **Media global Caso B:** 66.2 puntos.

**Desglose por ítems:** Los peores resultados se observaron en los ítems relacionados con la necesidad de aprendizaje previo y el soporte (Ítems 4 y 10). Para el usuario de 52 años, la interfaz resultó abrumadora al intentar localizar funciones que no estaban centradas en la pantalla.

## 4. Análisis de Eye Tracking (Datos Biométricos)

A partir de los mapas de calor generados, extraemos las siguientes conclusiones sobre el comportamiento visual:

* **Heatmaps (Mapas de calor):** Alta concentración en la esquina superior derecha (reservas, cuenta). El logo central actúa como un excelente ancla visual. El mapa de locales también concentra gran parte de la atención.
* **Zonas de Silencio:** Los textos informativos ubicados entre el mapa y la galería de fotos no reciben fijaciones visuales. Los usuarios escanean buscando elementos interactivos y saltan el texto.
* **Hallazgo clave:** La galería de imágenes capta fuertemente la atención (atractivo del producto), pero las llamadas a la acción (*Reservar*, *Pedir*) no se benefician de ese interés al estar alejadas de las fotos.

## 5. Auditoría de Accesibilidad

Se ha realizado una validación de contraste y jerarquía basándonos en las pautas WCAG (Nivel AA):

* **Principales barreras identificadas:**
  * **Perceptible:** Algunos textos descriptivos carecen del contraste mínimo requerido sobre sus fondos, dificultando la lectura para usuarios con presbicia o fatiga visual.
  * **Operable:** La falta de indicadores claros al hacer tabulación por teclado limita a los usuarios que no pueden depender exclusivamente del ratón.
  * **Comprensible:** El mapa interactivo carece de instrucciones claras de uso, lo que causó dudas severas en usuarios mayores.

## 6. Conclusiones y Recomendaciones (Actionable Insights)

| **Prioridad** | **Hallazgo** | **Recomendación de Mejora** |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Alta (Crítica)** | Botones de reserva (CTA) fuera del flujo central de visión. | Reubicar el botón de reservas en el centro de la *Landing Page* con mayor tamaño y contraste. |
| **Media** | El mapa genera confusión en perfiles no digitales. | Añadir una barra de búsqueda por código postal justa encima del mapa o un botón de "Usar mi ubicación". |
| **Baja** | Texto intermedio (mapa-galería) es ignorado.                 | Eliminar párrafos largos; usar *bullet points* breves o integrar ese texto sobre imágenes atractivas. |
