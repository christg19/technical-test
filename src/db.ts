import { DataSource } from "typeorm";
import { Client } from "./model/clientEntities";
import { Product } from "./model/productsEntities";
import { Profile } from "./model/profilesEntities";

export const AppDataSource = new DataSource ({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "kuribo45",
    database: "mockapi_db",
    synchronize: true,
    logging: true,
    entities:[Client, Product, Profile],
    subscribers: [],
    migrations: [],
})