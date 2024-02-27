export function FilterByMenu() {
  const viewFilterByMenu = document.createElement("aside");
  viewFilterByMenu.className = "category-menu container";
  viewFilterByMenu.innerHTML += `
    <nav class="category-nav">
    <div class="item-aside">
        <input type="image" data-category="ornamental" id="ornamental" name="ornamental" alt="Ornamentales" class="category" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true">
        <label for="ornamental">Ornamentales</label>
    </div>
    <div class="item-aside">
        <input type="image" data-category="medicinal" id="medicinal" name="medicinal" alt="Medicinales" class="category" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Medicinales.png?raw=true">
        <label for="medicinal">Medicinales</label>
    </div>
    <div class="item-aside">
        <input type="image" data-category="desertica" id="desertica" name="desertica" alt="Desérticas" class="category" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/deserticas.png?raw=true">
        <label for="desertica">Desérticas</label>
    </div>
    <div class="item-aside">
        <input type="image" data-category="arbol" id="arbol" name="arbol" alt="Árboles" class="category" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/arboles.png?raw=true">
        <label for="arbol">Árboles</label>
    </div>
    <div class="item-aside">
        <input type="image" data-category="aromatica" id="aromatica" name="aromatica" alt="Aromáticas" class="category" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/aromaticas.png?raw=true">
        <label for="aromatica">Aromáticas</label>
    </div>
    </nav>
  `;

  return viewFilterByMenu;
}
