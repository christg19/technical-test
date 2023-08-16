"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const clientEntities_1 = require("./model/clientEntities");
const productsEntities_1 = require("./model/productsEntities");
const profilesEntities_1 = require("./model/profilesEntities");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "kuribo45",
    database: "mockapi_db",
    synchronize: true,
    logging: true,
    entities: [clientEntities_1.Client, productsEntities_1.Product, profilesEntities_1.Profile],
    subscribers: [],
    migrations: [],
});
