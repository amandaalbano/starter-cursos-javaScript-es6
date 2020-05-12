//REST - serve para pegar o resto das propriedades

const usuario = {
    nome: 'Amanda',
    idade: '29',
    empresa: 'Rocketseat'
};

const {nome, ...resto} = usuario;
console.log('OPERADOR REST');
console.log('nome:',nome);
console.log('resto:',resto);

const vetor = [1,2,3,4];
const [a,b,...c] = vetor;
console.log('OPERADOR REST');
console.log('a:',a);
console.log('b:',b);
console.log('c:',c);

function soma(a,b,...params){
    return params;
}
console.log('OPERADOR REST');
console.log(soma(1,2,3,4,5,6,7,8,9,10));


//SPREAD - faz o papel de propagar -repassar uma informação para outra estrutura de dados

const vetor1 = [1,2,3];
const vetor2 = [4,5,6];
const vetor3 = [...vetor1, ...vetor2];
console.log('OPERADOR SPREAD');
console.log('Vetor 3:', vetor3);

const usuario1 = {
    nome: 'Amanda',
    idade: '29',
};

const usuario2 = {...usuario1, nome:'Barbara'};
console.log('Usuário 2: ', usuario2);


//TEMPLATE LITERALS - forma de incluir variáveis dentro de strings no JS a partir do ES6
const name = 'Amanda';
const age = 29;
//sem template literals
console.log('Meu nome é ' + name + ' e tenho ' + age + ' anos');
//Template literals
console.log(`Meu nome é ${name} e tenho ${age} anos.`);

//OBJECT SHORT SYNTAX

// const nome = 'Amanda';
// const idade = 29;

// const user = {
//   nome,
//   idade,  
//   empresa: 'Rocketseat',
// };
// console.log('OBJECT SHORT SYNTAX: ',user);