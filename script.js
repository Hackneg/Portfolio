let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("powerBI");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("css");
        habilidades[5].classList.add("compromisso");
        habilidades[6].classList.add("pontualidade");
        habilidades[7].classList.add("dedicação");
        habilidades[8].classList.add("criatividade");
        habilidades[9].classList.add("comunicação");
    }
}



window.onscroll = function(){
    efectoHabilidades();
} 