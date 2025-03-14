import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FilmesArmazenados } from "./filme.dm";
import { FilmeEntity } from "./filme.entity";


import {v4 as uuid} from 'uuid';// importante que seja colocado o import dessa forma sempre
import { ListaFilmeDTO } from "./dto/consulta.dto";
import { alteraFilmeDTO } from "./dto/alteraFilme.dto";
import { criaFilmeDTO } from "./dto/filme.dto";

@Controller('/filmes')
export class FilmeController{
    constructor(private clsFilmesArmazenados: FilmesArmazenados){
        
    }    
    @Post()
    async criaFilme(@Body() dadosFilme: criaFilmeDTO){
        
         
        var novoUsuario = new FilmeEntity (uuid(),dadosFilme.nome,
                                            dadosFilme.duracao,dadosFilme.sinopse,dadosFilme.ano,
                                            dadosFilme.genero);
        this.clsFilmesArmazenados.AdicionarFilme(novoUsuario);

        var usuario = {
            dadosUsuario : novoUsuario,
            status: "Usuario Criado"
        }
        return usuario;
    }

    @Get()
    async listaFilmes(){
        

        const filmesListados = this.clsFilmesArmazenados.filme;
        const listaRetorno = filmesListados.map(
            usuario => new ListaFilmeDTO(
                usuario.id,
                usuario.nome,
            )
        );
        
        return listaRetorno;
    }

    @Put('/:id')
    async atualizaFilme(@Param('id') id: string, @Body() novosDados: alteraFilmeDTO){
        const filmeAtualizado = await this.clsFilmesArmazenados.atualizaFilme(id, novosDados)

        return{
            filme: filmeAtualizado,
            message: 'Filme atualizado'
        }
    }

    @Delete('/:id')
    async removeFilme(@Param('id') id: string){
        const filmeRemovido = await this.clsFilmesArmazenados.removeFilme(id)

        return{
            filme: filmeRemovido,
            message: 'Filme removido'
        }
    }

    
}