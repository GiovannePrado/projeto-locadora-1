import { IsInt, IsNotEmpty, IsString, } from "class-validator";

export class criaFilmeDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    nome:string;
    
    @IsInt()
    duracao: Number;

    @IsString()
    sinopse: string;

    @IsString()
    ano: string;

    @IsString()
    genero: string;

}