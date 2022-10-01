//e.preventDefault()para que la pag no se refresque.
const jumbotron = document.querySelector(".jumbotron");
const donateABike = document.querySelector(".buttons .btn-primary");
const volunteer = document.querySelector(".buttons .btn-secondary");

document.querySelector('#blueBtn').addEventListener('click', (e) => {changeColour("btnAzul")})
document.querySelector('#orangeBtn').addEventListener('click', () => {changeColour("btnNaranja")})
document.querySelector('#greenBtn').addEventListener('click', () => {changeColour("btnVerde")})

function changeColour(color){
    
    switch (color) {
        case 'btnAzul':
            jumbotron.style.backgroundColor = "#588fbd";
            donateABike.style.backgroundColor = "#ffa500";
            volunteer.style.backgroundColor = "black";
            volunteer.style.color = "white";
            break;
    
        case 'btnNaranja':
            jumbotron.style.backgroundColor = "#f0ad4e";
            donateABike.style.backgroundColor = "#5751fd";
            volunteer.style.backgroundColor = "#31b0d5";
            volunteer.style.color = "white";
            break;

        case 'btnVerde':
            jumbotron.style.backgroundColor = "#87ca8a";
            donateABike.style.backgroundColor = "black";
            volunteer.style.backgroundColor = "#8c9c08";
            break;
    }

}
