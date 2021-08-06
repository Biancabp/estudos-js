//Para verificar se uma variável é NaN ou não com a função isNaN()
//NaN = Not a Number

//o incremento, incrementa um valor. é como se fosse s=x + 1
var x = 5;
console.log(++x);
console.log(x);
//nesse último ele vai retornar x + 1, porque o valor foi alterado na variável anterior
//o + ou - na frente de uma string transfoma ele em número

//a string virou um number
var x = "8";
console.log(++x);
console.log(typeof x);

//a string continua como string
var y = "8";
console.log(typeof y);

//soma os dois valores
var idade = "80";
var peso = 50;
console.log(+idade + peso);

//valores um ao lado do outro
var idade = "80";
var peso = 50;
console.log(idade + peso);

//diminui os dois valores
var idade = "80";
var peso = 50;
console.log(-idade + peso);
