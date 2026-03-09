import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ProfessorService } from '../professorService/app.service.professor';
import { ProfessorDTO } from '../professorService/app.service.professor';
import { ApiTags } from '@nestjs/swagger';

//Decorator
//É o que permite pegar as requisições
@ApiTags('professores')
@Controller('professores')
export class ProfessoresController {
    constructor(private readonly appService: ProfessorService) { }

    @Get("listar")
    listar(): ProfessorDTO[] {
        return this.appService.listarProfessores();
    }

    @Post("criar")
    criar(@Body() body: { nome: string, cpf: string, idade: number, materias: string[] }): string {
        return this.appService.criarPessoa(body);
    }

    @Delete("deletar/:nome")
    deletar(@Query("nome") nome: string) {
        return this.appService.Deletar(nome);
    }

    @Get('filtrar')
    filtrar(@Query('idade') idade: number): ProfessorDTO[] {
        return this.appService.filtrar(idade);
    }
    //Dessa forma você pode passar parâmetros na URL
    //http://localhost:3000/vamos?nome=Michel&idade=22 ex
    //O query pega os parâmetros da URL que você tiver nomeado no método
    //A sintaxe é basicamente passar o interrogação, nome do parâmetro e o valor que ele recebe
    //   @Get('vamos')
    //   getVamos(@Query('nome') nome: string, @Query('idade') idade: number): string {
    //     return idade > 18 ? `vamos aprender a programar ${nome}` : `não vamos aprender a programar, você tem idade ${idade} ${nome}`;
    //   }

    //   @Get('combinado/:nickname')
    //   getCombinado(@Param('nickname') nickname: string) {
    //     return nickname[0] === 'a' ? `combinado ${nickname}` : `não tem nada combinado com o ${nickname}`;
    //   }

    //   @Get('soma/:num/:num2')
    //   getSoma(@Param('num') num: number, @Param('num2') num2: number): number {
    //     return this.appService.getSoma(num, num2);
    //   }
}
