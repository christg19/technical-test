"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const profiles_route_1 = __importDefault(require("./routes/profiles.route"));
const clients_route_1 = __importDefault(require("./routes/clients.route"));
const products_route_1 = __importDefault(require("./routes/products.route"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(profiles_route_1.default);
app.use(clients_route_1.default);
app.use(products_route_1.default);
exports.default = app;
