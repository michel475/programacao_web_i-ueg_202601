"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorService = void 0;
const common_1 = require("@nestjs/common");
let ProfessorService = class ProfessorService {
    professor = [
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
    criarPessoa(prof) {
        let professor = {
            nome: prof.nome,
            cpf: prof.cpf,
            idade: prof.idade,
            materias: prof.materias
        };
        this.professor.push(prof);
        return `nome : ${prof.nome} , idade: ${prof.idade} , cpf: ${prof.cpf}`;
    }
    listarProfessores() {
        return this.professor;
    }
    Deletar(nome) {
        for (let i = 0; i < this.professor.length; i++) {
            if (this.professor[i].nome === nome) {
                this.professor.splice(i, 1);
                return this.listarProfessores();
            }
        }
        return `nome : ${nome} não foi deletado`;
    }
    filtrar(idade) {
        let novo = [];
        for (let i = 0; i < this.professor.length; i++) {
            if (this.professor[i].idade > idade) {
                novo.push(this.professor[i]);
            }
        }
        return novo;
    }
};
exports.ProfessorService = ProfessorService;
exports.ProfessorService = ProfessorService = __decorate([
    (0, common_1.Injectable)()
], ProfessorService);
//# sourceMappingURL=app.service.professor.js.map