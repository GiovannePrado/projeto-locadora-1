import { Injectable } from "@nestjs/common";
import { FilmeEntity } from "./filme.entity";

@Injectable()
export class FilmesArmazenados{
    #filme: FilmeEntity[] = [];  

    AdicionarFilme(filme: FilmeEntity){
        this.#filme.push(filme);
    }

    get filme(){        
        return this.#filme;
    }

    async removeFilme(id: string){
        const filme = this.buscaPorID(id);

        this.#filme = this.#filme.filter(
            filmeSalvo => filmeSalvo.id !== id
        )

        return filme;
    }

    atualizaFilme(id: string, dadosAtualizacao: Partial<FilmeEntity>){
        const usuario = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                if (valor === undefined){
                    return
                }

                usuario[chave] = valor;
            }
        )

        return usuario;
    }

    private buscaPorID(id: string){
        const possivelFilme =     this.#filme.find(
            filmeSalvo => filmeSalvo.id === id
        )

        if (!possivelFilme){
            throw new Error('Usuario nao encontrado')
        }
        
        return possivelFilme;
    }

    // async validaEmail(email: string): Promise<boolean>{
    //     const possivelUsuario = this.#usuarios.find(
    //         usuario => usuario.email === email
    //     );
    //     return (possivelUsuario !== undefined);
    // }

}