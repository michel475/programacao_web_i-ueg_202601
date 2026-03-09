import { Injectable } from '@nestjs/common';

export type PessoaDTO = {
    nome: string,
    cpf: string,
    idade: number,
}

@Injectable()
export class PessoaService {
    private client: PessoaDTO[] = [
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
    criarPessoa(cliente: { nome: string, cpf: string, idade: number }): string {
        const client: PessoaDTO = {
            nome: cliente.nome,
            cpf: cliente.cpf,
            idade: cliente.idade
        }
        this.client.push(client);
        return `nome : ${client.nome} , idade: ${client.idade} , cpf: ${client.cpf}`;
    }

    listarPessoas(): PessoaDTO[] {
        return this.client;
    }

    Deletar(nome: string) {
        for (let i = 0; i < this.client.length; i++) {
            if (this.client[i].nome === nome) {
                this.client.splice(i, 1);
                return this.listarPessoas();
            }
        }
        return `nome : ${nome} não foi deletado`;
    }

    filtrar(idade: number): PessoaDTO[] {
        let novo: PessoaDTO[] = [];
        for (let i = 0; i < this.client.length; i++) {
            if (this.client[i].idade > idade) {
                novo.push(this.client[i]);
            }
        }
        return novo;
    }
}
