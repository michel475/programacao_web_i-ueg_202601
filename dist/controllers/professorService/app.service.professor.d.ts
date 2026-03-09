export type ProfessorDTO = {
    nome: string;
    cpf: string;
    idade: number;
    materias: string[];
};
export declare class ProfessorService {
    private professor;
    criarPessoa(prof: {
        nome: string;
        cpf: string;
        idade: number;
        materias: string[];
    }): string;
    listarProfessores(): ProfessorDTO[];
    Deletar(nome: string): string | ProfessorDTO[];
    filtrar(idade: number): ProfessorDTO[];
}
