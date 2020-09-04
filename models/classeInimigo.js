const db = require('../database');

class Inimigo{
	constructor(vida,nome,dano,poder){
		this.vida = vida;
		this.nome = nome;
		this.dano = dano;
		this.poder = poder;
	}
	ataca(){
		if((Math.random()*(100-1)+1) > 80){
			
			console.log("deu um ataque com acerto critico");
			let dano = (Math.floor(Math.random() * (getdano() - 1)) + 1)*2;

			return dano;
			  
		}else{

			console.log("Deu um ataque")
			let dano = Math.floor(Math.random() * (getdano() - 1)) + 1
			return dano;

		}
	}

	

	//get e set nome
	getnome(){
		return this.nome;
	}
	setnome(){
		this.nome = name;
	}

	getdano(){
		return this.dano;
	}
	setdano(){
		this.dano = dano;
	}

	getvida(){
		return this.vida;
	}
	setvida(){
		this.vida = vida;
	}

	getpoder(){
		return this.poder;
	}
	setpoder(){
		this.poder = poder;
	}
}