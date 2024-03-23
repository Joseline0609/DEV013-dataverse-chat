export function Footer() {
  
  const viewFooter = document.createElement("footer");
  viewFooter.innerHTML += `
    <h3 class="footer">My Beauty Plants</h3>
    <p class="footer">Etelbina Cañedo &amp; Joseline García</p>
    <p class="footer">Bootcamp Laboratoria</p>
  `;
  return viewFooter;
}
