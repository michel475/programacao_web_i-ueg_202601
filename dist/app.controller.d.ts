import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getVamos(nome: string, idade: number): string;
    getCombinado(nickname: string): string;
    getSoma(num: number, num2: number): number;
}
