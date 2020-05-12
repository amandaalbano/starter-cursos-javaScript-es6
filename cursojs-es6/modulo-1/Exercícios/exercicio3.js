// Exercício 3.1
const arr = [1, 2, 3, 4, 5];

novoVetor = arr.map(item => item + 10);
console.log('Exercício 3.1');
console.log(novoVetor);

// Exercício 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;
mostraIdade(usuario);
console.log('Exercício 3.2');
console.log('Idade: ',mostraIdade(usuario));

// Exercício 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego',idade = 18) => ({nome,idade});
console.log("Exercício 3.3");
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//Exercício 3.4

const promise = () => new Promise((resolve,reject) => resolve());
console.log("Exercício 3.4");
console.log(promise);
