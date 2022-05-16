
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

pedra.addEventListener("click", function(){
    JogadaP.textContent = ""
    JogadaP.appendChild(criarJogada(jogadas[1].src))
    jogadaIA.innerHTML = ""
    criarJogadaIa()
})

function criarJogada(jogada){
    var img = document.createElement("img")
    img.src = jogada
    img.classList.add("opcao-de-jogada")

    return img
}

function criarJogadaIa(){
    var aleatoria = Math.floor( Math.random() * 3)
    jogadaIA.appendChild(criarJogada(jogadas[aleatoria].src))
}