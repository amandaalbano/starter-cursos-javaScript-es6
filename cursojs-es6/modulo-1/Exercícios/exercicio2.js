const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//Exercício 2.1

const idades = usuarios.map(function (usuario) {
    return usuario.idade;
});
console.log('Vetor de idades dos usuários: ', idades);

//Exercício 2.2

const filterUsuarios = usuarios.filter(function (usuario) {
    return ((usuario.empresa === 'Rocketseat') && (usuario.idade >= 18));
});
console.log('Usuários maiores de 18 anos que trabalham na Rocketseat:', filterUsuarios);

//Exercício 2.3

const google = usuarios.find(function (usuario) {
    return usuario.empresa === "Google";
});
console.log('Usuário que trabalha no Google: ', google);

//Exercício 2.4

const novaIdade = usuarios.map(function(usuario){
    return (usuario.idade * 2);
});
console.log('Vetor Nova Idade: ', novaIdade);
const idadeMax50 = novaIdade.filter(usuario => usuario <= 50);

console.log('Usuários com idade máxima 50: ', idadeMax50);
