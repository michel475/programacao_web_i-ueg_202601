"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessoresController = void 0;
const common_1 = require("@nestjs/common");
const app_service_professor_1 = require("../professorService/app.service.professor");
const swagger_1 = require("@nestjs/swagger");
let ProfessoresController = class ProfessoresController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    listar() {
        return this.appService.listarProfessores();
    }
    criar(body) {
        return this.appService.criarPessoa(body);
    }
    deletar(nome) {
        return this.appService.Deletar(nome);
    }
    filtrar(idade) {
        return this.appService.filtrar(idade);
    }
};
exports.ProfessoresController = ProfessoresController;
__decorate([
    (0, common_1.Get)("listar"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProfessoresController.prototype, "listar", null);
__decorate([
    (0, common_1.Post)("criar"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ProfessoresController.prototype, "criar", null);
__decorate([
    (0, common_1.Delete)("deletar/:nome"),
    __param(0, (0, common_1.Query)("nome")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfessoresController.prototype, "deletar", null);
__decorate([
    (0, common_1.Get)('filtrar'),
    __param(0, (0, common_1.Query)('idade')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Array)
], ProfessoresController.prototype, "filtrar", null);
exports.ProfessoresController = ProfessoresController = __decorate([
    (0, swagger_1.ApiTags)('professores'),
    (0, common_1.Controller)('professores'),
    __metadata("design:paramtypes", [app_service_professor_1.ProfessorService])
], ProfessoresController);
//# sourceMappingURL=app.controller.professores.js.map