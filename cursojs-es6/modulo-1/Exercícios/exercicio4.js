const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
}
//Exercício 4.1
const {nome, endereco:{cidade,estado}} = empresa;
console.log("Exercício 4.1");
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//Exercício 4.2
function mostraInfo({nome,idade}) {
    console.log("Exercício 4.2");
    console.log (`${nome} tem ${idade} anos.`);
   }
   mostraInfo({nome: 'Diego', idade: 23});


