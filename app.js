let listadenumerossorteados = [];
let numerolimite = 100
let numeroSecreto=gerarnumeroaleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}



function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled')
 } else 
 
 {
            if (chute > numeroSecreto) { 
                exibirTextoNaTela ('p', '0 número secreto é menor');
            } else {
                    exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
    }
}

function gerarnumeroaleatorio(){
    
   let numeroescolhido = parseInt(Math.random()*numerolimite+1);
   let qauantidadedeelementosnalista=listadenumerossorteados.length;
   if(qauantidadedeelementosnalista==numerolimite){
    listadenumerossorteados=[];
   }
   if (listadenumerossorteados.includes(numeroescolhido)){
    return gerarnumeroaleatorio();
   }else{
    listadenumerossorteados.push(numeroescolhido)
    console.log(listadenumerossorteados)
    return numeroescolhido;
   }

}
function limparcampo(){
    chute=document.querySelector('input');
    chute.value='';
}


function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial()


function reiniciarjogo() {
    numeroSecreto = gerarnumeroaleatorio();
    limparcampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}