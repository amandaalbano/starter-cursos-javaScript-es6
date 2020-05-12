//Exercício 2.1
//Função delay aciona o .then após 1s

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    console.log("Exercício 2.1");

    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}
umPorSegundo();

// //Exercício 2.2
import axios from 'axios';
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}
console.log("Exercício 2.2");
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

//Exercício 2.3
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe');
        }

    }
}
console.log('Exercício 2.3');
Github.getRepositories('Rocketseat/unform');
Github.getRepositories('Rocketseat/starter-javascript-es6-exercicios');

//Exercício 2.4

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('amandaalbano');



