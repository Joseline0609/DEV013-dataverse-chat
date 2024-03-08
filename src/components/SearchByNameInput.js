export function SearchByName() {
  const viewSearchByName = document.createElement("aside");
  viewSearchByName.className = "search-by-name container";
  viewSearchByName.innerHTML += `
    <form class="search-container" action="data/data.js">
        <input type="text" id="input-name-home" placeholder="Buscar..." name="search">
    </form>
  `;

  return viewSearchByName;
}