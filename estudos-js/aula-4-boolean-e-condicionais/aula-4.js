//existem dois valores: true or false

var temSorverte = true;

if(temSorverte) {
    console.log('Tem sorvete');
} else {
    console.log('Não tem sorvete');
}



var x;
var quantosSorvertes = true;

if(true) {
    console.log('tem');
    x = 5;
} else{
    console.log('não tem nada aqui')
}


var possuiSorvete = true;
var possuiCobertura = false;

if(possuiSorvete) {
    console.log("Possui copo e sorvete");
} else if(possuiCobertura) {
    console.log("Possui cobertura, mas acabou o sorvete e não tem copo");
} else{
    console.log("Não tem nada aqui, fique com fome");
}


var ailtonAmaBianca = false
var ailtonNaoAmaBianca = true

if(ailtonAmaBianca){
  console.log("Sim, ele ama muito")
} else if(ailtonNaoAmaBianca){
  console.log("Não, ele nunca dá atenção a Bianca. Muito Malvado.")
} else{
  console.log("Ele odeia Bianca.")
}

var ailtonAmaBianca = ""

if(ailtonAmaBianca){
  console.log(ailtonAmaBianca)
} else{
  console.log("Ele odeia Bianca.")
}

var ailtonAmaBianca = true

if(!ailtonAmaBianca){
  console.log("Sim, ele ama muito")
} else if(ailtonAmaBianca){
  console.log("Não, ele nunca dá atenção a Bianca. Muito Malvado.")
} else{
  console.log("Ele odeia Bianca.")
}

var samuelMeOdeia = true

if(samuelMeOdeia){
  console.log("Sim, ele odeia")
} else {
  console.log("Não, ele é um ótimo melhor amigo")
} 


//o operador lógico de negação é !
//para verificar se é true ou false basta adicionar !! na frente

var x = '10'
console.log(x == 10) // ver se os números coincidem
console.log(x === 10) //ver se a TUDO até se a string é igual a string tb
