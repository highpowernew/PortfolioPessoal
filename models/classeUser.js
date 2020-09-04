const db = require('../database');

class Inimigo{
	constructor(nome, email, senha, datanasc, isadmin){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.datanasc = datanasc;
        this.isadmin = isadmin;
	}

    addUser(){
        let addUser = `
        INSERT INTO users (nome, email, senha, datanasc, isadmin) VALUES ('${this.name}', '${this.email}', '${this.senha}', '${this.datanasc}', '${this.isadmin}')`;
        return db.execute(addUser);
    }

    


}