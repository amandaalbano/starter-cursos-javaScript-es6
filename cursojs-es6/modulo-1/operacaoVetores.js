const vetor = [1,3,4,5,6,8,9,10];

//Map - serve para percorrer o vetor e retornar algo de dentro

const novoVetor = vetor.map(function(item,index){
    return item * index;
});
console.log("Novo vetor: ",novoVetor);

//Reduce - consumir todo o vetor e transformar em uma única variável, normalmente um número
const soma = vetor.reduce(function(total, next){
    return total + next;
})
console.log("Soma:",soma);

//Filter - retorna true ou false
const filter = vetor.filter(function(item){
    return item % 2 === 0;
})
console.log("Filter:", filter);

//Find - utilizado para verificar se existe uma informação dentro do vetor ou localizar o item nele.
const find = vetor.find(function(item){
    return item === 10;
})
console.log("Número localizado:",find);

//Arrow function - utilizada em funções anônimas (reduz o código)
const vetor2 = [1,3,4,5,6,8,9,10];

// const novoVetor2 = vetor.map(function(item){
//     return item * 2;
// });
// console.log("Novo vetor 2: ",novoVetor2);
// Essa função é igual a função abaixo, ou melhor, a arrow function abaixo.

const novoVetor2 = vetor.map(item=>item * 2);
console.log("Novo vetor 2: ", novoVetor2);

//Valores padrão para parâmetros das funções

const soma2 = (a = 3, b = 5) => a + b;
console.log("Soma passando 1 parâmetro: ", soma2(1));
console.log("Soma sem passar parâmetros: ", soma2());