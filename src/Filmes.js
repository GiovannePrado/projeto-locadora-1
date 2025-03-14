export default class Filme{
    constructor (id, nome, duração, sinopse, ano, genero){
        this.id = id;
        this.nome = nome;
        this.duração = duração;
        this.sinopse = sinopse;
        this.ano = ano;
        this.genero = genero;
    }

    Compartilhar(){
        return "Estou assistindo o filme " + this.nome +, "Do genero" + this.genero +, "E a história é: " + this.sinopse, "Este filme foi produzido em" + this.ano, 
        "E tem duracao de" + this.duração, "Minutos"; 
    }

}



    