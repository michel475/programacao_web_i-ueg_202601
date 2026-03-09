import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from '../services/app.service';
//Decorator
//É o que permite pegar as requisições
@Controller('app/v1')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //Dessa forma você pode passar parâmetros na URL
  //http://localhost:3000/vamos?nome=Michel&idade=22 ex
  //O query pega os parâmetros da URL que você tiver nomeado no método
  //A sintaxe é basicamente passar o interrogação, nome do parâmetro e o valor que ele recebe
  @Get('vamos')
  getVamos(@Query('nome') nome: string, @Query('idade') idade: number): string {
    return idade > 18 ? `vamos aprender a programar ${nome}` : `não vamos aprender a programar, você tem idade ${idade} ${nome}`;
  }

  @Get('combinado/:nickname')
  getCombinado(@Param('nickname') nickname: string) {
    return nickname[0] === 'a' ? `combinado ${nickname}` : `não tem nada combinado com o ${nickname}`;
  }

  @Get('soma/:num/:num2')
  getSoma(@Param('num') num: number, @Param('num2') num2: number): number {
    return this.appService.getSoma(num, num2);
  }
}
