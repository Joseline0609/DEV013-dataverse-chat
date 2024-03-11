export function OrderBySelect() {
  const viewOrderBySelect = document.createElement("aside");
  viewOrderBySelect.className = "order-by container";
  viewOrderBySelect.innerHTML += `
    <label for="item-order" id="order" class="dropdown-button">Orden</label>
    <select name="order" id="item-order">
        <option value="order">Orden</option>
        <option value="a-z">A - Z</option>
        <option value="z-a">Z - A</option>
        <option value="reset">Resetear</option>
    </select>
  `;

  return viewOrderBySelect;
}
