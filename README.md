<div style="display: flex; flex-direction:column; justify-content: center; align-items: center;">
  <div style="display: flex; flex-direction: row; align-items: center;">
    <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Logo.png?raw=true" width="50" height="50"> 
    <h1 style="text-align: center; margin-left: 10px;">My Beauty Plant</h1>
  </div>
</div>

## Índice
* [1. Descripción del Proyecto](#1-descripción-del-proyecto)
* [2. Características Destacadas 📌](#2-características-destacadas-📌)
* [3. Demostración](#3-demostración)
* [4. Tecnologías y Herramientas Utilizadas](#4-tecnologías-y-herramientas-utilizadas)
* [5. Tests](#5-tests)
* [6. Enfoque de Desarrollo](#6-enfoque-de-desarrollo)
* [7. Prototipos](#7-prototipos)
* [8. Desarrolladoras](#8-desarrolladoras)
* [9. Conclusión](#9-conclusión)
***

## 1. Descripción del Proyecto
   <p align="left" style="margin-top:50px;">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p> 

<p style="text-align:justify">Esta es la segunda versión de nuestro proyecto que intenta ayudar a las usuarias a elegir las plantas ideales para su estilo de vida y las condiciones climáticas y de espacio a su disposición; así como el correcto mantenimiento de éstas. En esta segunda iteración ofrecemos como una posibilidad más, la ineracción directa y personalizada con las plantas a traves de un chatbot individual con cada planta o un chat grupal con varias de ellas.</p>

<p style="text-align:justify">Para el futuro, planeamos integrar el total de las funcionalidades de ambos proyectos y agregar detalles de usabilidad que hemos identificado como indispensables para nuestras usuarias después de recibir su feedback.</p>

## 2. Características Destacadas 📌

- Navegación ágil: Al ser una SPA se ha logrado que la navegación entre las vistas sea aún más eficiente.

- Búsqueda, ordenado y filtrado: Encuentra rápidamente la planta que buscas utilizando la función de búsqueda por nombre. Además, organiza el contenido según su tus preferencias de categoría y orden.

- Visualización de información: La interfaz ayuda a identificar fácilmente la dificultad de cuidado, la necesid de agua y exposición solar de una planta. Así como una visión general de los requerimientos comunes dentro de una categoría para tomar decisiones más informadas.

- Chat con plantas individuales: Puedes conversar con las plantas para preguntarle detalles específicas sobre sus características y detalles de su cuidado.

- Chat grupal con plantas: Puedes conversar con varias plantas a la vez para preguntarles consejos para tener un jardín hermoso.

## 3. Demostración 

![gif](https://dev-013-dataverse-chat-vk53.vercel.app)

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

### Diseño y prototipado
* Figma
Se utilizó Figma para la creación de prototipos (tanto de baja, media y alta fidelidad), permitiendo una planificación detallada de la interfaz de usuario y una colaboración eficiente entre los miembros del equipo.

### Prototipos de Baja Fidelidad 
![Alt text](src/resources/Readme-Images/baja-fidelidad.png)

### Prototipos de Media Fidelidad 
![Alt text](src/resources/Readme-Images/media-fidelidad.png)

### Prototipos de Alta Fidelidad 
![alt text](src/resources/Readme-Images/alta-fidelidad.png)

<a href="https://www.figma.com/file/VK0flqbA0LbFZMm1BCtrGM/dv-Chat?type=design&node-id=127-1341&mode=design&t=5IAVsp1F4KQi1UqJ-0">Preview</a>

<a href="https://www.figma.com/proto/VK0flqbA0LbFZMm1BCtrGM/dv-Chat?type=design&node-id=127-1387&t=Xwda7uqvU0a2lVxF-1&scaling=scale-down&page-id=127%3A1341&starting-point-node-id=127%3A1387&show-proto-sidebar=1&mode=design">Archivo</a>

* Canva
Canva se empleó para mejorar y detallar los diseños, las imágenes de fondo y los íconos que se utilizaron.

### Organización
La organización del proyecto se gestionó utilizando Trello que facilitó la planificación, el seguimiento y la comunicación eficaz entre los miembros del equipo.

* Trello 
![alt text](src/resources/Readme-Images/trello.png)

### Testeos de Usabilidad
Se llevaron a cabo testeos de usabilidad para evaluar la eficacia y la experiencia del usuario. Estos procesos de prueba garantizaron que la aplicación fuera intuitiva y cumpliera con los objetivos previstos, proporcionando retroalimentación valiosa para mejoras continuas. Dentro de esta mejoras destacamos:

### Historias de Usuarias e Hitos

Se estipularon 6 grandes hitos y dentro de estos se estipularon las historias de usuarias acordes a estos.

## 5. Enfoque de Desarrollo
"My Beauty Plant" se ha gestado bajo un enfoque de desarrollo que abarca más allá de la elección de tecnologías. Aspectos importantes de nuestro enfoque incluyen:

- Centrado en el Usuario: Desde la concepción hasta la implementación, hemos priorizado las necesidades y la experiencia de la usuaria para garantizar una aplicación intuitiva y útil a medida que recibíamos comentarios de usuarios y desarrolladores

- Colaboración Eficiente: La colaboración y comunicación fluida entre los miembros del equipo se facilitó adoptando un enfoque iterativo, permitiendo la mejora constante a través de ciclos de retroalimentación basadas en metodologías ágiles como SCRUM.

- Flexibilidad y Adaptabilidad: La arquitectura y el diseño se concebieron con la capacidad de adaptarse a futuras expansiones y mejoras, brindando flexibilidad para evolucionar con las necesidades cambiantes.

- Priorizacion: Nos hemos enfocado en los requisitos solicitados para entrega del proyecto sin desatender la experiencia de las usuarias. Para esto se utilizaron metodologías como MOSCOW y la matriz de Eisenhower.

## 7. Tests

### Test asincronos
Se crearon mocks de las peticiones y de la data para testear las funciones de comunicación con la IA.

### Test unitarios
Se crearon test de la implementación lógica de las funcionalidades.
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
<p style="text-align:justify">"My Beauty Plant - Chat" representa nuestra evolución como frontend developers enfocadas a la resolución sencilla de tareas nobles y cotidianas como el cuidado de las plantas y la curiosidad por saber más sobre sobre estas.</p>

<p style="text-align:justify">Mirando hacia adelante, planeamos fusionar el proyecto anterior con este proyecto para poder integrar las funcionalidades de ambos en una sola aplicación. Agradecemos a todos por ser parte de esta experiencia verde y esperamos que "My Beauty Plant" continúe siendo una guía confiable para los amantes de las plantas.</p>