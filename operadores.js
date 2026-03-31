//operador E &&
let maiorIdade = false;
let possuiDocumento = true;

if (maiorIdade && possuiDocumento) {
    console.log('pode entrar na festa!')
}else{
    console.log('não pode entrar na festa.')
};

//operador ou ||
let cartaoCredito = false;
let dinheiro = false;

if(cartaoCredito || dinheiro) {
    console.log('pode fazer a compra.')
}else{
    console.log('não pode fazer a compra.')
};

//operador not !
let estaChovendo = true;

if(!estaChovendo) {
    console.log('pode sair sem guarda-chuva.')
}else{
    console.log('leve o guarda-chuva.')
};