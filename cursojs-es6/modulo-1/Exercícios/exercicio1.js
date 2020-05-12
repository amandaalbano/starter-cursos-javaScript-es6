class Usuario{
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
        return this.admin === true;       
    }
}

class Admin extends Usuario{
    constructor(email,senha){
        super(email,senha);
        this.admin = true;
    }    
}

const adm = new Admin('teste@teste.com', '123456');
const usr = new Usuario('teste@teste.com', '123456');

console.log(adm.isAdmin()); //true
console.log(usr.isAdmin()); //false 