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


var possuiSorvete = ""

if(possuiSorvete){
  console.log(possuiSorvete)
} else{
  console.log("Ele odeia Bianca.")
}

var possuiSorvete = true

if(!possuiSorvete){
  console.log("Possui copo e sorvete")
} else if(possuiSorvete){
  console.log("Possui cobertura, mas acabou o sorvete e não tem copo")
} else{
  console.log("Não tem nada aqui, fique com fome")
}


//o operador lógico de negação é !
//para verificar se é true ou false basta adicionar !! na frente

var x = '10'
console.log(x == 10) // ver se os números coincidem
console.log(x === 10) //ver se a TUDO até se a string é igual a string tb
