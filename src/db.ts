import { DataSource } from "typeorm";
import { Client } from "./entities/clientEntities";
import { Product } from "./entities/productsEntities";
import { Profile } from "./entities/profilesEntities";

export const AppDataSource = new DataSource ({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "kuribo45",
    database: "partner_db",
    synchronize: true,
    logging: true,
    entities:[Client, Product, Profile],
    subscribers: [],
    migrations: [],
})