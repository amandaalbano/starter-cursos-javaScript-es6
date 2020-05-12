//EXEMPLO COM MÉTODOS ESTÁTICOS

// class Matematica{
//     static soma(a,b){
//         return a+b;
//     }
// }
// console.log(Matematica.soma(1,2));

//EXEMPLO COM MÉTODOS NÃO ESTÁTICOS
class List{
    constructor(data){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();
        
        this.usuario = 'Amanda';
        //console.log(this.usuario);
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();
document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();

//EXEMPLO CONSTANTE E VARIÁVEL DE ESCOPO
//Mutação em uma constante
// const usuario = {nome: 'Amanda'};
// usuario.nome = 'Bárbara';
// console.log(usuario);

// //Variáveis de escopo (let)
// function teste(x){
//     let y = 2;
//     if(x>5){
//         y = 4;
//         console.log(x,y);
//     }
// }
// teste(10);