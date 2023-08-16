"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = exports.deleteProfile = exports.postProfile = exports.displayProfiles = void 0;
const profiles_service_1 = require("../services/profiles.service");
const displayProfiles = (res) => {
    (0, profiles_service_1.displayProfilesService)(res);
};
exports.displayProfiles = displayProfiles;
const postProfile = (req, res) => {
    (0, profiles_service_1.postProfileService)(req, res);
};
exports.postProfile = postProfile;
const deleteProfile = (req, res) => {
    (0, profiles_service_1.deleteProfileService)(req, res);
};
exports.deleteProfile = deleteProfile;
const updateProfile = (req, res) => {
    (0, profiles_service_1.updateProfileService)(req, res);
};
exports.updateProfile = updateProfile;
