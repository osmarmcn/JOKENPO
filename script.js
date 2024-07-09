const opcoes = {
    1 : { nome: 'pedra', img:'midia/pedra.png', pedra: 'EMPATE', papel : 'PERDEU', tesoura: 'GANHOU'},
    2 : { nome: 'papel', img:'midia/papel.png', pedra: 'GANHOU', papel : 'EMPATE', tesoura: 'PERDEU'},
    3 : { nome: 'tesoura', img:'midia/tesoura.png', pedra: 'PERDEU', papel : 'GANHOU', tesoura: 'EMPATE'}
}

//seleção dos objetos do document
//imagem e texto da escolha do usuário
let imgJogador = document.getElementById('imgUser')
let pJogador =  document.getElementById('escolhaUsuario')

//imagem e texto da escolha do computador
let imgComputador = document.getElementById('imgComput')
let pComputador =  document.getElementById('escolhaComputador')

//resultado final
let resultadoFinal = document.getElementById('resultado')

//contagem dos pontos no document
let contagemPontosComputador = document.getElementById('pontosComputador')
let contagemPontosJogador = document.getElementById('pontosUsuario')

//variáveis globais para escolha do usuário e do computador
let escolhaJogador= {}
let escolhaComputador= {}

//variáveis globais para pontuação dos jogadores
let pontosJogador = 0
let pontosComputador = 0

let btnPedra = document.getElementsByTagName('button')[0]
let btnPapel = document.getElementsByTagName('button')[1]
let btnTesoura = document.getElementsByTagName('button')[2]

function escolherJogada(num){
    return opcoes[num]
}

function montarJogadas(numJogador){
    let numComp = Math.floor((Math.random()*3)+1)
    escolhaJogador = escolherJogada(numJogador)
    escolhaComputador = escolherJogada(numComp)
}

function avaliarGanhador(){

    if( escolhaJogador[escolhaComputador.nome] == 'GANHOU'){
        pontosJogador += 1
    }
    else if (escolhaJogador[escolhaComputador.nome] == 'PERDEU'){
        pontosComputador += 1 
    }
}

function montarTela(){
    imgJogador.src= escolhaJogador.img
    imgComputador.src = escolhaComputador.img

    imgJogador.alt= escolhaJogador.nome
    imgComputador.alt = escolhaComputador.nome

    pJogador.innerHTML = ` Você escolheu ${escolhaJogador.nome}`
    pComputador.innerHTML = `O Computador escolheu ${escolhaComputador.nome}`

    contagemPontosComputador.innerHTML = pontosComputador
    contagemPontosJogador.innerHTML = pontosJogador

    resultadoFinal.innerHTML= escolhaJogador[escolhaComputador.nome]

    //adicção da classe para manipulação do style
    switch(escolhaJogador[escolhaComputador.nome]){
        case 'GANHOU':
            resultadoFinal.classList = 'ganhou'
            break
        case 'PERDEU':
            resultadoFinal.classList = 'perdeu'
            break
        default:
            resultadoFinal.classList = 'empatou'
            break
    }

}

function jogar(num){
    montarJogadas(num)
    avaliarGanhador()
    montarTela()
}


// jogar(1)

btnPapel.addEventListener('click', ()=>jogar(2))
btnTesoura.addEventListener('click', ()=>jogar(3))
btnPedra.addEventListener('click', ()=>jogar(1))


// let computador = Math.floor(Math.random() * 3) + 1

// let eu = Math.floor(Math.random() * 3) + 1

// const opcoes = {
//     1:{nome:'pedra', img: 'midia/pedra.png', pedra: 'EMPATE', papel:'PERDEU',  tesoura:'GANHOU'},
//     2:{nome:'papel', img: 'midia/papel.png', pedra: 'GANHOU', papel:'EMPATE',  tesoura:'PERDEU'},
//     3:{nome:'tesoura', img: 'midia/tesoura.png', pedra: 'PERDEU', papel:'GANHOU',  tesoura:'EMAPTE'}
// }

// let imgJogador = document.getElementById('imgUser')
// let pJogador = document.getElementById('escolhaUsuario')

// let imgComputador = document.getElementById('imgComput')
// let pComputador = document.getElementById('escolhaComputador')

// let resultadoFinal = document.getElementById('resultado')

// let contagemPontosComputador = document.getElementById('pontosComputador')
// let contagemPontosJogador = document.getElementById('pontosJogador')

// let escolhaJogador = {}
// let escolhaComputador = {}

// let pontosJogador = 0
// let pontosComputador = 0

// function jogada(num){
//     escolhaJogador = opcoes[num]
    
// }



// escolhaComputador = opcoes[numComp]

// function escolherJogada(num){
//     return opcoes[num]
// }

// function montarJogada(numJogador){

//     let numComp = Math.floor(Math.random() * 3) + 1

//     escolhaJogador = escolherJogador(numJogador)
//     escolhaComputador = escolherJogada(numComp)

// }

// function avaliarGanhador(){
//     if(escolhaJogador[escolherComputador] == 'GANHOU'){
//         pontosJogador += 1

//     }else if(escolhaJogador[escolhaComputador.nome] == 'PERDEU'){
//         pontosComputador += 1
//     }
// }


// function montarTela(){
//     imgJogador.src = escolherJogador.img
//     imgComputador.src = escolherComputador.img

//     imgJogador.alt = escolherJogador.nome
//     imgComputador.alt = escolherComputador.nome

//     pJogador.innerHTML = `Você escolheu ${escolherJogador.nome}`
//     pComputador.innerHTML = `O computador escolheu ${escolherComputador.nome}`

//     contagemPontosComputador = pontosComputador
//     contagemPontosJogador = pontosJogador

//     resultadoFinal.innerHTML = escolhaJogador[escolhaComputador.nome]

//     switch(escolhaJogador[escolhaComputador.nome]){
//         case 'GANHOU':
//             resultadoFinal.classList = 'ganhou'
//             break

//         case 'PERDEU':
//             resultadoFinal.classList = 'perdeu'
//             break
//         default:
//             resultadoFinal.classList = 'empatou'
//             break
//     }
// }

// function jogar(num){
//     montarJogada(num)
//     avaliarGanhador()
//     montarTela()
// }



