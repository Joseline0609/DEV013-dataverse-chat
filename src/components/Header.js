export function Header() {
  
  const viewHeader = document.createElement("header");
  viewHeader.innerHTML += `
    <img class="logo" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Logo.png?raw=true" alt="Logo">
    <h1 class="logo">My Beauty Plants</h1>
  `;
  return viewHeader;
}
