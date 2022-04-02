
var pedra = document.querySelector("#pedra");
var papel = document.querySelector("#papel");
var tesoura = document.querySelector("#tesoura");

var jogadaIA = document.querySelector(".jogada-ia");

pedra.addEventListener("click", function(){  
    jogadaAleatoria()
})

papel.addEventListener("click", function(){  
    jogadaAleatoria()
})

tesoura.addEventListener("click", function(){  
    jogadaAleatoria()
})

function jogadaAleatoria(){
    var opcoes = [`<img class="pedra" src="images/pedra.png" alt="Mão-sinal-de-pedra">`,
    `<img class="pedra" src="images/papel.png" alt="Mão-sinal-de-papel">`,
    `<img class="pedra" src="images/tesoura.png" alt="Mão-sinal-de-tesoura">`]

    var aleatoria = Math.floor(Math.random() * 3) 

    jogadaIA.classList.add("opcao-de-jogada")
    jogadaIA.innerHTML = opcoes[aleatoria];
}