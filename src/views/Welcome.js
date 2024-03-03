import { navigateTo } from "../router.js";

export const Welcome = () => {
  const viewWelcome = document.createElement("section");
  viewWelcome.className="welcome";

  viewWelcome.innerHTML = `
  <div class="welcome-principal">
    <div id="welcome-upper" class="welcome-upper">
      <section id="welcome-brand" class="welcome-brand">
        <div class="brand-logo">
          <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Logo.png?raw=true"
            style="width:50px; heigth:50xp;" alt="Logo">
        </div>
        <div class="brand-name">
          <h2>My Beauty Plants</h2>
        </div>
      </section>
      <div id="greeting-container" class="greeting-container">
        <h1 id="greeting">Bienvenida</h1>
        <p class="continue">a nuestro jardín</p>
      </div>
      <form action="" class="welcome-form">
      <div name="name" class="name">
        <input class="welcome-input" type=text placeholder="Por favor ingresa tu nombre..." /><br/>
      </div>
      <div name="apikey" class="apikey">
        <label for="apikey">Para acceder a todas las funcionalidades:<label><br/>
          <input class="welcome-input" type=text name="apikey" id="apikey" placeholder="Ingresa tu llave... (opcional)" /><br/>
          </div>
          <p class="create-apikey">Si no tienes una apikey solicítala <br/>
            haciendo click
            <a href="https://platform.openai.com/docs/overview">Aquí</a>
          </p>
          <button id="enter-button" class="enter-button">Iniciar</button>
      </form>
  </div>
      <div class="welcome-background">
        <img alt="Background" src="../Resources/DV Chat/welcome-background.png"/>
      </div>
    </div>
  `;

  const enterButton = viewWelcome.querySelector("#enter-button");
  //console.log(enterButton);

  enterButton.addEventListener("click", () =>
    navigateTo("/Home", { name: "Bienvenida" })
  );

  return viewWelcome;
};
