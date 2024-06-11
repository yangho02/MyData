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



// document.addEventListener('DOMContentLoaded', function() {
//     const icon = document.getElementById('icon');
//     const dropdownMenu = document.getElementById('dropdown-menu');

//     function showMenu() {
//         dropdownMenu.classList.add('show');
//     }

//     function hideMenu() {
//         setTimeout(function() {
//             if (!icon.matches(':hover') && !dropdownMenu.matches(':hover')) {
//                 dropdownMenu.classList.remove('show');
//             }
//         }, 200);
//     }

//     icon.addEventListener('mouseenter', showMenu);
//     icon.addEventListener('mouseleave', hideMenu);
//     dropdownMenu.addEventListener('mouseenter', showMenu);
//     dropdownMenu.addEventListener('mouseleave', hideMenu);
// });
