import { navigateTo } from "../router.js";

export let userNameValue = "";

export const Welcome = () => {
  const viewWelcome = document.createElement("section");
  viewWelcome.className = "welcome";

  viewWelcome.innerHTML = `
    <div class="welcome-container">
      <div class="greeting-area">
        <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Logo.png?raw=true" alt="Logo">
        <h1>My Beauty Plants</h1>
      </div>
      <h2 id="greeting">Bienvenida</h2>
      <p class="continue">a nuestro jardín</p>
      <div class="form-area">
        <input id="input-name" class="input name" type=text placeholder="Por favor ingresa tu nombre..."><br/>
        <label for="apikey">Para acceder a todas las funcionalidades:</label><br/>
        <input class="input" type=text name="apikey" id="apikey" required placeholder="Ingresa tu llave... (opcional)"><br/>
        <p class="create-apikey">Si no tienes una apikey<br/>solicítala haciendo click
          <a href="https://platform.openai.com/docs/overview" target="_blank">aquí</a>
        </p>
        <button id="enter-button" class="enter-button">Iniciar</button>
      </div>
    </div>
  `;

  let user = viewWelcome.querySelector("#input-name");

  const enterButton = viewWelcome.querySelector("#enter-button");

  enterButton.addEventListener("click", () => {
    if (user.value.length == 0) {
      viewWelcome.querySelector("#input-name").className = "input none";
    } else {
      userNameValue = user.value;
      navigateTo("/Home", { title: "Home" });
    }
  }
  );

  return viewWelcome;
};