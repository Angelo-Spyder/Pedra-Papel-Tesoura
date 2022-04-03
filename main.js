
var pedra = document.querySelector("#pedra");
var papel = document.querySelector("#papel");
var tesoura = document.querySelector("#tesoura");

var JogadaP = document.querySelector(".jogada-player")
var jogadaIA = document.querySelector(".jogada-ia");

var placarP = document.querySelector(".placar-player")
var placarIA = document.querySelector(".placar-ia")

pedra.addEventListener("click", function(){ 
    JogadaP.innerHTML = "" 
    JogadaP.innerHTML = `<img class="pedra" src="images/pedra.png" alt="Mão-sinal-de-pedra">`
    JogadaP.classList.add("opcao-de-jogada")

    jogadaAleatoria()
    if(jogadaIA.innerHTML == `<img class="pedra" src="images/tesoura.png" alt="Mão-sinal-de-tesoura">`){
        placarP.textContent = Number(placarP.textContent) + 1
    }else if(jogadaIA.innerHTML == `<img class="pedra" src="images/papel.png" alt="Mão-sinal-de-papel">`){
        placarIA.textContent = Number(placarIA.textContent) + 1
    }
})

papel.addEventListener("click", function(){  
    JogadaP.innerHTML = "" 
    JogadaP.innerHTML = `<img class="pedra" src="images/papel.png" alt="Mão-sinal-de-papel">`
    JogadaP.classList.add("opcao-de-jogada")
    jogadaAleatoria()
    if(jogadaIA.innerHTML == `<img class="pedra" src="images/pedra.png" alt="Mão-sinal-de-pedra">`){
        placarP.textContent = Number(placarP.textContent) + 1
    }else if(jogadaIA.innerHTML == `<img class="pedra" src="images/tesoura.png" alt="Mão-sinal-de-tesoura">`){
        placarIA.textContent = Number(placarIA.textContent) + 1
    }
})

tesoura.addEventListener("click", function(){  
    JogadaP.innerHTML = "" 
    JogadaP.innerHTML = `<img class="pedra" src="images/tesoura.png" alt="Mão-sinal-de-tesoura">`
    JogadaP.classList.add("opcao-de-jogada")
    jogadaAleatoria()
    if(jogadaIA.innerHTML == `<img class="pedra" src="images/papel.png" alt="Mão-sinal-de-papel">`){
        placarP.textContent = Number(placarP.textContent) + 1
    }else if(jogadaIA.innerHTML == `<img class="pedra" src="images/pedra.png" alt="Mão-sinal-de-pedra">`){
        placarIA.textContent = Number(placarIA.textContent) + 1
    }
})

function jogadaAleatoria(){
    var opcoes = [`<img class="pedra" src="images/pedra.png" alt="Mão-sinal-de-pedra">`,
    `<img class="pedra" src="images/papel.png" alt="Mão-sinal-de-papel">`,
    `<img class="pedra" src="images/tesoura.png" alt="Mão-sinal-de-tesoura">`]

    var aleatoria = Math.floor(Math.random() * 3) 

    jogadaIA.classList.add("opcao-de-jogada")
    jogadaIA.innerHTML = opcoes[aleatoria];
}