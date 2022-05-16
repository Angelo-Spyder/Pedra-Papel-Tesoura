
//Pegando jogada do usuário
var pedra = document.querySelector("#pedra");
var papel = document.querySelector("#papel");
var tesoura = document.querySelector("#tesoura");

//Colocando imagens no html
var JogadaP = document.querySelector(".jogada-player");
var jogadaIA = document.querySelector(".jogada-ia");

//Pegando dados do placar
var placarP = document.querySelector("#placar-player");
var placarIA = document.querySelector("#placar-ia");

//Jogadas

var jogadas = [
    {
        src: `images/tesoura.png`
    },
    {
        src: `images/pedra.png`
    },
    {
        src: `images/papel.png`
    }
]

var jogadasAcumuladas = []

//Jogadas do jogador
pedra.addEventListener("click", function(){
    JogadaP.textContent = ""
    JogadaP.appendChild(criarJogada(jogadas[1].src))
    jogadaIA.innerHTML = ""
    criarJogadaIa()
    jogadasAcumuladas.push(jogadas[1].src)
    validarJogada(jogadasAcumuladas)
})

papel.addEventListener("click", function(){
    JogadaP.textContent = ""
    JogadaP.appendChild(criarJogada(jogadas[2].src))
    jogadaIA.innerHTML = ""
    criarJogadaIa()
    jogadasAcumuladas.push(jogadas[2].src)
    validarJogada(jogadasAcumuladas)
})

tesoura.addEventListener("click", function(){
    JogadaP.textContent = ""
    JogadaP.appendChild(criarJogada(jogadas[0].src))
    jogadaIA.innerHTML = ""
    criarJogadaIa()
    jogadasAcumuladas.push(jogadas[0].src)
    validarJogada(jogadasAcumuladas)
})

//Funções de jogadas e placar
function criarJogada(jogada){
    var img = document.createElement("img")
    img.src = jogada
    img.classList.add("opcao-de-jogada")

    return img
}

function criarJogadaIa(){
    var aleatoria = Math.floor( Math.random() * 3)
    jogadasAcumuladas.push(jogadas[aleatoria].src)
    jogadaIA.appendChild(criarJogada(jogadas[aleatoria].src))
}

function validarJogada(jogadaA){

    //jogadaA[1] /*Jogador*/ | jogadaA[0] /*IA*/

    //Vitória jogador
    if(jogadaA[0] == jogadas[0].src && jogadaA[1] == jogadas[1].src){
        placarP.textContent = Number(placarP.textContent) + 1
    }

    if(jogadaA[0] == jogadas[2].src && jogadaA[1] == jogadas[0].src){
        placarP.textContent = Number(placarP.textContent) + 1
    }    
    
    if(jogadaA[0] == jogadas[1].src && jogadaA[1] == jogadas[2].src){
        placarP.textContent = Number(placarP.textContent) + 1
    }

    //Vitória ia

    if(jogadaA[1] == jogadas[1].src && jogadaA[0] == jogadas[2].src){
        placarIA.textContent = Number(placarIA.textContent) + 1
    }

    if(jogadaA[1] == jogadas[0].src && jogadaA[0] == jogadas[1].src){
        placarIA.textContent = Number(placarIA.textContent) + 1
    }    
    
    if(jogadaA[1] == jogadas[2].src && jogadaA[0] == jogadas[0].src){
        placarIA.textContent = Number(placarIA.textContent) + 1
    }

    //limpa array
    for(var i = 0; i <= jogadaA.length; i++){
        jogadaA.pop()
    }
    
}