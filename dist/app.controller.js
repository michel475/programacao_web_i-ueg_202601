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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getVamos(nome, idade) {
        return idade > 18 ? `vamos aprender a programar ${nome}` : `não vamos aprender a programar, você tem idade ${idade} ${nome}`;
    }
    getCombinado(nickname) {
        return nickname[0] === 'a' ? `combinado ${nickname}` : `não tem nada combinado com o ${nickname}`;
    }
    getSoma(num, num2) {
        return this.appService.getSoma(num, num2);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('vamos'),
    __param(0, (0, common_1.Query)('nome')),
    __param(1, (0, common_1.Query)('idade')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", String)
], AppController.prototype, "getVamos", null);
__decorate([
    (0, common_1.Get)('combinado/:nickname'),
    __param(0, (0, common_1.Param)('nickname')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getCombinado", null);
__decorate([
    (0, common_1.Get)('soma/:num/:num2'),
    __param(0, (0, common_1.Param)('num')),
    __param(1, (0, common_1.Param)('num2')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], AppController.prototype, "getSoma", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('app/v1'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map