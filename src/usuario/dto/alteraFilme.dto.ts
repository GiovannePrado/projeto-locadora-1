import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class alteraFilmeDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @IsOptional()
    nome:string;
    
    @IsInt()
    @IsOptional()
    duracao: Number;

    @IsString()
    @IsOptional()
    sinopse: string;

    @IsString()
    @IsOptional()
    ano: string;

    @IsString()
    @IsOptional()
    genero: string;

}