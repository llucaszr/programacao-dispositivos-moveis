// variáveis
let variavel_local = 10;// number
const constante = [];   // array
const objetos = {};     // objeto
const msg = "Texto";    // string
let status = false;     // bool

// funções
function soma (a, b){
    return a + b;
}

let resultado = soma(1, 2);
resultado = soma (1, 2);

// arrow functions

const multiplica = (a, b) => a * b;
/*
function multiplica(a, b){
    return a * b;
}

*/

// função asyncrona // é para esperar ele acontecer para passar para a linha de baixo

async function tempo (duracao) {
    await new Promise((r) => {
        setInterval(r, duracao)
    });
    console.log("passou o tempo!") 
}

tempo(3000);

// objetos

const pessoa = {nome: "Jose", email: "jose@iesb.br", fone: "8888-8888"};
console.log(pessoa.nome);
pessoa.nome = "Jose Reginaldo";
const { nome } = pessoa;
console.log(nome);
const pessoa_fisica = {cpf: 111, ...pessoa};

const lista = [];
lista.push("Uva");
const achou = lista.find((item) => item === "uva");

/* mesma coisa que de cima
for(int i= 0; i<lista.length; i++){
    if(lista[i] === "uva"){

    }
} */

const texto = "Olá";
texto.concat("Mundo");
texto.toUpperCase();
texto.toLowerCase();

    
// modulos    separo o código em arquivos diferentes, referenciandos

//export normal é quando tem mais de duas coisas para exportar

export {soma, multiplica}
