//manu
const menu = document.querySelector(".navbar__links")
const menuButton = document.querySelector(".navbar__icons")
menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
});
document.getElementById('support-button').addEventListener('click', function() {
    var supportPanel = document.getElementById('support-panel');
    supportPanel.style.display = supportPanel.style.display === 'none' ? 'block' : 'none';
});