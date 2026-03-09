export type PessoaDTO = {
    nome: string;
    cpf: string;
    idade: number;
};
export declare class PessoaService {
    private client;
    criarPessoa(cliente: {
        nome: string;
        cpf: string;
        idade: number;
    }): string;
    listarPessoas(): PessoaDTO[];
    Deletar(nome: string): string | PessoaDTO[];
    filtrar(idade: number): PessoaDTO[];
}
