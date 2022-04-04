
//Pegando jogada do usuário
var pedra = document.querySelector("#pedra");
var papel = document.querySelector("#papel");
var tesoura = document.querySelector("#tesoura");

//Colocando imagens no html
var JogadaP = document.querySelector(".jogada-player");
var jogadaIA = document.querySelector(".jogada-ia");

//Pegando dados do placar
var placarP = document.querySelector(".placar-player");
var placarIA = document.querySelector(".placar-ia");

//Jogadas
var jogadaIATesoura = `<img class="pedra" src="images/tesoura.png" alt="Mão-sinal-de-tesoura">`;
var jogadaIAPedra = `<img class="pedra" src="images/pedra.png" alt="Mão-sinal-de-pedra">`;
var jogadaIAPapel = `<img class="pedra" src="images/papel.png" alt="Mão-sinal-de-papel">`

//Jogada pedra
pedra.addEventListener("click", function(){ 
    JogadaP.innerHTML = "" ;
    JogadaP.innerHTML = jogadaIAPedra;
    JogadaP.classList.add("opcao-de-jogada");

    jogadaAleatoria();
    validandoJogadaPedra();
});


//Jogada papel
papel.addEventListener("click", function(){  
    JogadaP.innerHTML = "" 
    JogadaP.innerHTML = jogadaIAPapel
    JogadaP.classList.add("opcao-de-jogada")
    jogadaAleatoria()
    validandoJogadaPapel()

})

//jogada tesoura
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

function validandoJogadaPedra(){ 
    if(jogadaIA.innerHTML == jogadaIATesoura){
        placarP.textContent = Number(placarP.textContent) + 1
    }else if(jogadaIA.innerHTML == jogadaIAPapel){
        placarIA.textContent = Number(placarIA.textContent) + 1
    };
}

function validandoJogadaPapel(){
    if(jogadaIA.innerHTML ==jogadaIAPedra){
        placarP.textContent = Number(placarP.textContent) + 1
    }else if(jogadaIA.innerHTML == jogadaIATesoura){
        placarIA.textContent = Number(placarIA.textContent) + 1
    }
}

//Aleatoriedade da jogada ia
function jogadaAleatoria(){
    var opcoes = [jogadaIAPedra, jogadaIAPapel ,jogadaIATesoura]

    var aleatoria = Math.floor(Math.random() * 3) 

    jogadaIA.classList.add("opcao-de-jogada")
    jogadaIA.innerHTML = opcoes[aleatoria];
}