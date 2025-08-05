//Variables
const sidebar = document.querySelector("#sidebar");
const menuBtn = document.querySelector(".menu-btn"); 

//AddEventListeners
function cargarAddEventListeners() {
    menuBtn.addEventListener("click", ocultarMostrarSidebar);
}
cargarAddEventListeners();

//Funciones
function ocultarMostrarSidebar() {
    if(sidebar.classList.contains("sidebar-hidden"))
        sidebar.classList.remove("sidebar-hidden");
    else {
        sidebar.classList.add("sidebar-hidden");
    }
}