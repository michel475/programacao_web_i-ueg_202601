import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { PessoaController } from './controllers/app.controller.pessoa';
import { AppService } from './services/app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PessoaService } from './services/app.service.pessoa';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
    serveRoot: '/', // opcional
  }),],
  controllers: [AppController, PessoaController],
  providers: [AppService, PessoaService],
})
export class AppModule { }
