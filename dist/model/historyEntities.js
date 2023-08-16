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
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseHistory = void 0;
const typeorm_1 = require("typeorm");
const clientEntities_1 = require("./clientEntities");
const productsEntities_1 = require("./productsEntities");
let purchaseHistory = exports.purchaseHistory = class purchaseHistory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], purchaseHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clientEntities_1.Client),
    (0, typeorm_1.JoinColumn)({ name: 'client_id' }),
    __metadata("design:type", clientEntities_1.Client)
], purchaseHistory.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => productsEntities_1.Product),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", productsEntities_1.Product)
], purchaseHistory.prototype, "product", void 0);
exports.purchaseHistory = purchaseHistory = __decorate([
    (0, typeorm_1.Entity)()
], purchaseHistory);
