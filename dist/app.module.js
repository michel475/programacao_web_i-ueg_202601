"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./controllers/app.controller");
const app_controller_pessoa_1 = require("./controllers/app.controller.pessoa");
const app_service_1 = require("./services/app.service");
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const app_service_pessoa_1 = require("./services/app.service.pessoa");
const app_service_professor_1 = require("./controllers/professorService/app.service.professor");
const app_controller_professores_1 = require("./controllers/professoresController/app.controller.professores");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
                serveRoot: '/',
            }),],
        controllers: [app_controller_1.AppController, app_controller_pessoa_1.PessoaController, app_controller_professores_1.ProfessoresController],
        providers: [app_service_1.AppService, app_service_pessoa_1.PessoaService, app_service_professor_1.ProfessorService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map