const messages=[];
let nome;

function dadosChegaram(resposta){
    console.log(resposta.data);
}

const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
promessa.then(dadosChegaram);



function perguntar(){
nome= prompt("Bem vindo! Qual seu nome?");
if(nome != ''){
const lista = document.querySelector('ul');
     lista.innerHTML = '';
         let item = `
             <li class="mensagem-entrada">
             <a>${nome}</a> entrou na sala!
             </li>
             `;
         lista.innerHTML = lista.innerHTML + item;
    }
    else{
    perguntar()
    }
}
perguntar()

function adicionarMensagemNoDOM(){
  const lista = document.querySelector('ul');
  lista.innerHTML='';
  for(let i = 0; messages.length > i; i++){
         let item = `
             <li>
             <a>${nome}</a> para <a>todos</a>: ${messages[i]}
             </li>
             `;
         lista.innerHTML = lista.innerHTML + item;
     }
 }

 function enviarMensagem(){
    const mensagemDigitada = document.querySelector('input').value;
    if(mensagemDigitada !=''){
        messages.push(mensagemDigitada);
        console.log(messages);
        adicionarMensagemNoDOM() 
    }
    else{
    }
}