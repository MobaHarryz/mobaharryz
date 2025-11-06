let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive"
        menuVisible = true;
    }
}

function seleccionar() {
    //oculta el menu una vez se selecciones alguna opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion para aplicar las animaciones de los skills
function efectoSkills() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let skills = document.getElementsByClassName("progreso");
        skills[0].classList.add("javascript");
        skills[1].classList.add("htmlcss");
        skills[2].classList.add("react");
        skills[3].classList.add("vue");
        skills[4].classList.add("angular");
        skills[5].classList.add("sqldatabases");
        skills[6].classList.add("qatesting");
        skills[7].classList.add("backend");
        skills[8].classList.add("cloud");
        skills[9].classList.add("uxuidesign");
        skills[10].classList.add("adobexd");
        skills[11].classList.add("figma");
        skills[12].classList.add("psd");
        skills[13].classList.add("ai");
        skills[14].classList.add("teamwork");
        skills[15].classList.add("commitment");
        skills[16].classList.add("communication");
        skills[17].classList.add("dedication");
        skills[18].classList.add("proactiveness");
        skills[19].classList.add("adaptation");
    }
}
//detectar el scrollin para aplicar la animacion de la barra-skills
window.onscroll = function() {
    efectoSkills();
}


//Pop-Up de imagenes

/*document.querySelectorAll('.proyecto img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
}*/

const gallery = document.querySelector(".gallery");
const popup = document.querySelector(".popup");
const popupImg = popup.querySelector("img");

gallery.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.tagName === "IMG") {
        const imgSrc = event.target.parentElement.getAttribute("href");
        popupImg.setAttribute("src", imgSrc);
        popup.style.display = "block";
    }
});

popup.addEventListener("click", function(event) {
    if (event.target.tagName === "SPAN") {
        popup.style.display = "none";
    }
});

// Modo claro / oscuro
const icon = document.getElementById("icon");

/*icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.src = "Objetos UX-UI/sol.png"; // Cambia a ícono de sol para modo claro
    } else {
        icon.src = "Objetos UX-UI/luna.png"; // Cambia a ícono de luna para modo oscuro
    }

});*/
