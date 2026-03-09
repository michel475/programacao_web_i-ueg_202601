import { Injectable } from '@nestjs/common';

export type ProfessorDTO = {
    nome: string,
    cpf: string,
    idade: number,
    materias: string[]
}

@Injectable()
export class ProfessorService {
    private professor: ProfessorDTO[] = [
        { nome: 'Guiliano Rangel', cpf: '12345678901', idade: 45, materias: ['Prog Web I', 'Prog Web II', 'Bancos de Dados I', 'Bancos de Dados II'] },
        { nome: 'Joilson', cpf: '12345678902', idade: 500, materias: ['Algoritmos e Programação I', 'Algoritmos e Programação II'] },
        { nome: 'Francisco', cpf: '12345678903', idade: 22, materias: ['Eletricidade e Lógica Digital', 'Inteligêcia Artificial'] },
        { nome: 'Betinha', cpf: '12345678903', idade: 55, materias: ['Algoitmos e Programação I', 'Metodologia Científica'] },
        { nome: 'Marcio', cpf: '12345678903', idade: 23, materias: ['Prática de Programação', 'Programação Orientada a Objetos I', 'Programação Orientada a Objetos II'] },
        { nome: 'Hellen', cpf: '12345678903', idade: 19, materias: ['Engenharia de Software', 'PIASI I', 'PIASI II'] },
        { nome: 'Juliana', cpf: '12345678903', idade: 15, materias: ['IHC', 'Engenharia de Requisitos', 'Arquitetura e Desenho de Software'] },
        { nome: 'José Leonardo', cpf: '12345678903', idade: 17, materias: ['Sistemas Operacionais'] },
        { nome: 'Elke', cpf: '12345678903', idade: 22, materias: ['Fundamentos de Matemática para Computação', 'Matemática Discreta', 'Álgebra Linear', 'Probabilidade e Estatística'] },
        { nome: 'Stacheira', cpf: '12345678903', idade: 36, materias: ['Gestão de Processos'] },
    ];
    criarPessoa(prof: { nome: string, cpf: string, idade: number, materias: string[] }): string {
        let professor: ProfessorDTO = {
            nome: prof.nome,
            cpf: prof.cpf,
            idade: prof.idade,
            materias: prof.materias
        }
        this.professor.push(prof);
        return `nome : ${prof.nome} , idade: ${prof.idade} , cpf: ${prof.cpf}`;
    }

    listarProfessores(): ProfessorDTO[] {
        return this.professor;
    }

    Deletar(nome: string) {
        for (let i = 0; i < this.professor.length; i++) {
            if (this.professor[i].nome === nome) {
                this.professor.splice(i, 1);
                return this.listarProfessores();
            }
        }
        return `nome : ${nome} não foi deletado`;
    }

    filtrar(idade: number): ProfessorDTO[] {
        let novo: ProfessorDTO[] = [];
        for (let i = 0; i < this.professor.length; i++) {
            if (this.professor[i].idade > idade) {
                novo.push(this.professor[i]);
            }
        }
        return novo;
    }
}
