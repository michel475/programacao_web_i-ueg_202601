import { ProfessorService } from '../professorService/app.service.professor';
import { ProfessorDTO } from '../professorService/app.service.professor';
export declare class ProfessoresController {
    private readonly appService;
    constructor(appService: ProfessorService);
    listar(): ProfessorDTO[];
    criar(body: {
        nome: string;
        cpf: string;
        idade: number;
        materias: string[];
    }): string;
    deletar(nome: string): string | ProfessorDTO[];
    filtrar(idade: number): ProfessorDTO[];
}
