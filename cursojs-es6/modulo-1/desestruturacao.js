//Desestruturação de objetos no JavaScript

const usuario = {
    nome: 'Amanda',
    idade: 29,
    endereco: {
        cidade: 'Montes Claros',
        estado: 'MG',
    },
};
//const nome = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;

//Objeto desestruturado
const {nome,idade,endereco:{cidade}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

//Desestruturação em parâmetros de funções
function mostraNome({nome,idade}){
    console.log(nome,idade);
}
mostraNome(usuario);