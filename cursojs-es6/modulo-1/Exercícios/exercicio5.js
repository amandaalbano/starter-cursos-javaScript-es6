//Exercício 5.1 - a
const arr = [1, 2, 3, 4, 5, 6];
const [x,...y] = arr;
console.log("Exercício 5.1 - a");
console.log('x = ',x); // 1
console.log('y = ', y); // [2, 3, 4, 5, 6]

//Exercício 5.1 - b
function soma(...params){
    return params.reduce((a,b) => a + b);
}
console.log("Exercício 5.1 - b");
console.log(soma(1, 2, 3, 4, 5, 6)); //21
console.log(soma(1, 2)); //3

//Exercício 5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
console.log("Exercício 5.2 - a");
console.log(usuario2);

const usuario3 = {...usuario, endereco:{...usuario.endereco, cidade: 'Lontra'}};
console.log("Exercício 5.2 - b");
console.log(usuario3);