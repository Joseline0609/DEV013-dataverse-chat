<div style="display: flex; flex-direction:column; justify-content: center; align-items: center;">
  <div style="display: flex; flex-direction: row; align-items: center;">
    <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Logo.png?raw=true" width="50" height="50"> 
    <h1 style="text-align: center; margin-left: 10px;">My Beauty Plant</h1>
  </div>
    <!-- <p align="left" style="margin-top:50px;">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p> -->
</div>

## Índice

* [1. Descripción del Proyecto](#1-descripción-del-proyecto)
* [2. Características Destacadas 📌](#2-características-destacadas-📌)
* [3. Demostración](#3-demostración)
* [4. Tecnologías y Herramientas Utilizadas](#4-tecnologías-y-herramientas-utilizadas)
* [5. Enfoque de Desarrollo](#5-enfoque-de-desarrollo)
* [6. Prototipos](#6-prototipos)
* [7. Tests](#7-tests)
* [8. Desarrolladoras](#8-desarrolladoras)
* [9. Conclusión](#9-conclusión)

***

## 1. Descripción del Proyecto
   <p align="left" style="margin-top:50px;">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p> 

<p style="text-align:justify">Nuestra aplicación web aborda la inquietud común sobre el cuidado de las plantas, ofreciendo respuesta a preguntas frecuentes, como frecuencia de riego, ubicación ideal, técnicas de poda, etc. Lo que distingue* a nuestra aplicación es su enfoque en simplificar el cuidado, proporcionando a los usuarios una guía intuitiva y estéticamente agradable.</p>

<p style="text-align:justify">Debido a la creciente tendencia de tener plantas en casa sin comprender completamente sus necesidades, iniciamos este proyecto como parte del bootcamp de Laboratoria. Para el futuro, planeamos expandir la aplicación incorporando datos más detallados y permitiendo a nuestros usuarios encontrar la planta perfecta según su estilo de vida y preferencias personales, a fin de brindarles una guia completa para el cuidado de sus plantas.</p>

## 2. Características Destacadas 📌

- Exploración Intuitiva: Navega sin problemas entre categorías para encontrar la planta perfecta, incluso si no tienes una variedad específica en mente. Encuentra tu planta ideal según su propósito o características deseadas.

- Búsqueda y Ordenación: Encuentra rápidamente la planta que buscas utilizando la función de búsqueda por nombre. Además, organiza el contenido según tus preferencias, facilitando la ubicación de la información que necesitas.

- Visualización Rápida de Cuidado: la función de visualización te permitira identificar fácilmente la dificultad de cuidado de una planta, así como sus necesidades de agua y exposición solar en una escala simple.

- Estadísticas por Categoría: Obtén una visión general de los requerimientos comunes dentro de una categoría para tomar decisiones más informadas.

- Chat con plantas individuales: Puedes conversar con las plantas para preguntarle detalles específicas sobre sus características y detalles de su cuidado.

- Chat grupal con plantas: Puedes conversar con varias plantas a la vez para preguntarles consejos para tener un jardín hermoso.

## 3. Demostración 

![gif](https://github.com/Joseline0609/dataverse/assets/151554917/13ec97b8-7a1b-4ed3-ba5b-911b7d1749a1)

## 4. Tecnologías y Herramientas Utilizadas 

### SPA y Router

Esta aplicación fue desarrollada bajo el modelo de Single Page Aplication. Por lo cual fue necesario la implementación de un router que administre la navegación a las distintas vistas. Este router se encarga de pasar toda la información necesaria, tanto en el dom como en el browser. De esta manera logramos generar las vistas y sus componentes de manera dinámica.

### Manejo de Apikey
Para ingresar y almacenar correctamente el ApiKey se implementaron las funciones setApiKey y getApiKey, las cuales introducen el valor del apikey a localStorage. Así mismo se han colocado validaciónes para restringir valores incorrectos introducidos por el usuario en las cajas de texto desde welcome y desde los modales.

### Peticiones HTTP
Para realizar la comunicación con la IA se generó una petición asincrona de HTTP utilizando el metodo fetch y las funciones:
- conectOpenIA que envía el mensaje del usuiario
- communicateWithOpenAI que maneja la comunicación entre nuestro código y el protocolo HTTP
- manejarRespuestaDeOpenIA que inserta la respuesta entregada en el dom
- manageError que genera un mensaje de error en caso de ser necesario.

### Rol del sistema y prompting
A traves de la solicitud HTTP se le indica al sistema que personifique la planta específica para que conteste acorde a su personalidad e interactue en la conversación de manera fluida tomando en cuenta la información sobre la usuaria. Y en el caso del chat grupal que interactue con el resto de entidades y complemente las respuestas sin repetir información.

### Proceso de Generación de Datos con IA
La información y las imágenes fueron generadas mediante inteligencia artificial utilizando prompts, y posteriormente, las imágenes fueron mejoradas y detalladas utilizando recursos como Canva. Este enfoque combinado de tecnologías de IA y herramientas de diseño permitió crear contenido informativo y visualmente atractivo.

### Prototipos
### Figma
Se utilizó Figma para la creación de prototipos (tanto de baja, media y alta fidelidad), permitiendo una planificación detallada de la interfaz de usuario y una colaboración eficiente entre los miembros del equipo.

<a href="https://www.figma.com/file/dSltZ7FoI402Us3GVLXwbD/Dataverse?type=design&node-id=58-3&mode=design&t=sQAXBv0lTt8r09VI-0">Prototipos de Baja Fidelidad</a>

<a href="https://www.figma.com/file/dSltZ7FoI402Us3GVLXwbD/Dataverse?type=design&node-id=137-500&mode=design&t=sQAXBv0lTt8r09VI-0">Prototipos de Media Fidelidad</a>

<a href="https://www.figma.com/file/dSltZ7FoI402Us3GVLXwbD/Dataverse?type=design&node-id=202-807&mode=design&t=sQAXBv0lTt8r09VI-0">Prototipos de Alta Fidelidad</a>

### Canva
Canva se empleó para mejorar y detallar las imágenes generadas por IA, proporcionando herramientas visuales adicionales para perfeccionar el contenido, asi como para crear prototipos de baja fidelidad.
![canva](src/resources/Readme-Images/canva.png)

### Organización
La organización del proyecto se gestionó utilizando Trello que facilitó la planificación, el seguimiento y la comunicación eficaz entre los miembros del equipo.

### Trello 
![alt text](src/resources/Readme-Images/trello.png)

### Testeos de Usabilidad
Se llevaron a cabo testeos de usabilidad para evaluar la eficacia y la experiencia del usuario. Estos procesos de prueba garantizaron que la aplicación fuera intuitiva y cumpliera con los objetivos previstos, proporcionando retroalimentación valiosa para mejoras continuas. Dentro de esta mejoras destacamos:

### Historias de Usuarias

El proyecto se consideró finalizado una vez que se completaron exitosamente las seis historias de usuario establecidas.

## 5. Enfoque de Desarrollo
"My Beauty Plant" se ha gestado bajo un enfoque de desarrollo que abarca más allá de la elección de tecnologías. Aspectos importantes de nuestro enfoque incluyen:

- Centrado en el Usuario: Desde la concepción hasta la implementación, hemos priorizado las necesidades y la experiencia del usuario para garantizar una aplicación intuitiva y útil.

- Colaboración Eficiente: La colaboración fluida entre los miembros del equipo se facilitó mediante herramientas como Notion y Trello. La comunicación efectiva fue clave para el progreso constante del proyecto.

- Iteraciones Continuas: Se adoptó un enfoque iterativo, permitiendo la mejora constante a través de ciclos de retroalimentación. La aplicación evolucionó a medida que recibíamos comentarios de usuarios y desarrolladores.

- Flexibilidad y Adaptabilidad: La arquitectura y el diseño se concebieron con la capacidad de adaptarse a futuras expansiones y mejoras, brindando flexibilidad para evolucionar con las necesidades cambiantes.

- Priorizacion: Nos hemos enfocado en los requisitos solicitados para entrega del proyecto sin desatender la experiencia de las usuarias.

## 6. Prototipos
### Prototipos de Baja Fidelidad 
![Alt text](src/resources/Readme-Images/baja-fidelidad.png)

### Prototipos de Media Fidelidad 
![Alt text](src/resources/Readme-Images/media-fidelidad.png)

### Prototipos de Alta Fidelidad 
![alt text](src/resources/Readme-Images/alta-fidelidad.png)

## 7. Tests

### Test asincronos
Se crearon mocks de las peticiones y de la data para testear las funciones de comunicación con la IA.

### Test unitarios
```javascript
// Jest se utilizó para garantizar la calidad y confiabilidad del código.
//Ejemplo de filtrado por id
describe('filterData', () => {
it ('returns an array with filtered data by id', () => {
    const result = filterData(fakeData, "id", "roble");
    expect(result).toEqual([
      {
        "id": "roble",
        "categoryPlant":"trees",
        "name": "Roble",
        "maintenanceNeeds": "Requiere espacio para crecer, poco mantenimiento una vez establecido.",
        "scientificName": "Quercus",
        "applicationsPlant": "Construcción, muebles, barriles para vino.",
        "climaticData": "Adaptable a diversos climas, prefiere suelos profundos.",
      },
    ])
  })
});
```

## 8. Desarrolladoras

Con 💛 de <a href="https://www.linkedin.com/in/etelbina-ca%C3%B1edo-507baa1b5/">Etelbina Cañedo</a> & <a href="https://www.linkedin.com/in/joseline-garc%C3%ADa-0053521b2/">Joseline García</a>.

## 9. Conclusión
<p style="text-align:justify">"My Beauty Plant" representa nuestra dedicación para simplificar el cuidado de las plantas mediante una aplicación intuitiva y visualmente atractiva. A lo largo del proyecto, hemos fusionado inteligencia artificial con herramientas de diseño para crear contenido informativo y estéticamente agradable.</p>

<p style="text-align:justify">Mirando hacia adelante, planeamos fusionar el proyecto anterior con este proyecto para poder integrar las funcionalidades de ambos en una sola aplicación. Agradecemos a todos por ser parte de esta experiencia verde y esperamos que "My Beauty Plant" continúe siendo una guía confiable para los amantes de las plantas.</p>