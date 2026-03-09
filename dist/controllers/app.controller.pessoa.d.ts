import { PessoaService } from '../services/app.service.pessoa';
import { PessoaDTO } from '../services/app.service.pessoa';
export declare class PessoaController {
    private readonly appService;
    constructor(appService: PessoaService);
    listar(): PessoaDTO[];
    criar(body: {
        nome: string;
        cpf: string;
        idade: number;
    }): string;
    deletar(nome: string): string | PessoaDTO[];
    filtrar(idade: number): PessoaDTO[];
}
