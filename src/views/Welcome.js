import { navigateTo } from "../router.js";

export const Welcome = () => {
  const viewWelcome = document.createElement("section");
  viewWelcome.className="welcome";

  viewWelcome.innerHTML = `
    <div id="welcome-upper" class="welcome-upper">
      <section id="welcome-brand">
        <div class="brand-logo">
          <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Logo.png?raw=true"
            style="width:50px; heigth:50xp;" alt="Logo">
        </div>
        <div class="brand-name">
          <h2>My Beauty Plants</h2>
        </div>
      </section>
      <div id="greeting-container">
        <h1 id="greeting">Bienvenida</h1>
        <p>a nuestro jardín</p>
      </div>
      <form action="">
        <input class="input" type=text placeholder="Por favor ingresa tu nombre..." /><br/>
        <label for="apikey">Para acceder a todas las funcionaliddes:<label><br/>
          <input class="input" type=text name="apikey" id="apikey" placeholder="Ingresa tu llave... (opcional)" /><br/>
          <p>Si no tienes una apikey <br/>
            solicitala haciendo click
            <a href="https://platform.openai.com/docs/overview">aquí</a>
          </p>
          <button id="enter-button">Iniciar</button>
      </form>
    </div>
  `;

  const enterButton = viewWelcome.querySelector("#enter-button");
  //console.log(enterButton);

  enterButton.addEventListener("click", () =>
    navigateTo("/Home", { name: "Bienvenida" })
  );

  return viewWelcome;
};
