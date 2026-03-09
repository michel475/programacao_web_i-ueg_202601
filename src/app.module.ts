import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { PessoaController } from './controllers/app.controller.pessoa';
import { AppService } from './services/app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PessoaService } from './services/app.service.pessoa';
import { ProfessorService } from './controllers/professorService/app.service.professor';
import { ProfessoresController } from './controllers/professoresController/app.controller.professores';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
    serveRoot: '/', // opcional
  }),],
  controllers: [AppController, PessoaController, ProfessoresController],
  providers: [AppService, PessoaService, ProfessorService],
})
export class AppModule { }
