"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClient = exports.deleteClient = exports.postClient = exports.displayClients = void 0;
const clients_service_1 = require("../services/clients.service");
const displayClients = (req, res) => {
    (0, clients_service_1.displayClientService)(req, res);
};
exports.displayClients = displayClients;
const postClient = (req, res) => {
    (0, clients_service_1.postClientService)(req, res);
};
exports.postClient = postClient;
const deleteClient = (req, res) => {
    (0, clients_service_1.deleteClientService)(req, res);
};
exports.deleteClient = deleteClient;
const updateClient = (req, res) => {
    (0, clients_service_1.updateClientService)(req, res);
};
exports.updateClient = updateClient;
