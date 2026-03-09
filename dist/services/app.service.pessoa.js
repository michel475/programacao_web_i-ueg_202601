"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaService = void 0;
const common_1 = require("@nestjs/common");
let PessoaService = class PessoaService {
    client = [
        { nome: 'Michel', cpf: '12345678901', idade: 22 },
        { nome: 'Maria', cpf: '12345678902', idade: 23 },
        { nome: 'Pedro', cpf: '12345678903', idade: 40 },
        { nome: 'Subaru', cpf: '12345678903', idade: 55 },
        { nome: 'Netero', cpf: '12345678903', idade: 23 },
        { nome: 'Yudi Tamashiro', cpf: '12345678903', idade: 19 },
        { nome: 'Bel para Meninas', cpf: '12345678903', idade: 15 },
        { nome: 'Pedro Padre', cpf: '12345678903', idade: 17 },
        { nome: 'Padre Fábio de Melo', cpf: '12345678903', idade: 22 },
        { nome: 'Doutor Estranho', cpf: '12345678903', idade: 36 },
    ];
    criarPessoa(cliente) {
        const client = {
            nome: cliente.nome,
            cpf: cliente.cpf,
            idade: cliente.idade
        };
        this.client.push(client);
        return `nome : ${client.nome} , idade: ${client.idade} , cpf: ${client.cpf}`;
    }
    listarPessoas() {
        return this.client;
    }
    Deletar(nome) {
        for (let i = 0; i < this.client.length; i++) {
            if (this.client[i].nome === nome) {
                this.client.splice(i, 1);
                return this.listarPessoas();
            }
        }
        return `nome : ${nome} não foi deletado`;
    }
    filtrar(idade) {
        let novo = [];
        for (let i = 0; i < this.client.length; i++) {
            if (this.client[i].idade > idade) {
                novo.push(this.client[i]);
            }
        }
        return novo;
    }
};
exports.PessoaService = PessoaService;
exports.PessoaService = PessoaService = __decorate([
    (0, common_1.Injectable)()
], PessoaService);
//# sourceMappingURL=app.service.pessoa.js.map