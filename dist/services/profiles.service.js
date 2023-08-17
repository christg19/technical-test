"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileService = exports.deleteProfileService = exports.postProfileService = exports.displayOneProfileService = exports.displayProfilesService = void 0;
const profilesEntities_1 = require("../model/profilesEntities");
const db_1 = require("../db");
const profileRepository = db_1.AppDataSource.getRepository(profilesEntities_1.Profile);
const displayProfilesService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profiles = yield profileRepository.find();
        res.status(200).json(profiles);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los perfiles' });
    }
});
exports.displayProfilesService = displayProfilesService;
const displayOneProfileService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const profile = yield profileRepository.findOne({ where: { id: parseInt(id) } });
        if (!profile) {
            return res.status(404).json({ message: 'Perfil no encontrado' });
        }
        res.status(200).json(profile);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el perfil' });
    }
});
exports.displayOneProfileService = displayOneProfileService;
const postProfileService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, rol } = req.body;
    if (!username || !password || !rol) {
        return res.status(400).json({ message: 'Campos incompletos' });
    }
    const profile = new profilesEntities_1.Profile();
    profile.username = username;
    profile.password = password;
    profile.rol = rol;
    try {
        const savedProfile = yield profileRepository.save(profile);
        res.status(201).json(savedProfile);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el perfil' });
    }
});
exports.postProfileService = postProfileService;
const deleteProfileService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield profileRepository.delete({ id: parseInt(id) });
    console.log(result);
    return res.sendStatus(204);
});
exports.deleteProfileService = deleteProfileService;
const updateProfileService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { username, password, rol } = req.body;
    try {
        const updateResult = yield profileRepository.update({ id: parseInt(id) }, {
            username: username,
            password: password,
            rol: rol
        });
        if (updateResult.affected === 0) {
            return res.status(404).json({ message: 'Perfil no encontrado' });
        }
        return res.json('Perfil Actualizado');
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el perfil' });
    }
});
exports.updateProfileService = updateProfileService;
