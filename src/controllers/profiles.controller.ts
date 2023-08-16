import { Request, Response } from "express"
import { displayProfilesService, postProfileService, deleteProfileService, updateProfileService } from "../services/profiles.service"

export const displayProfiles = (res:Response) => {
    displayProfilesService(res)
}

export const postProfile = (req:Request, res:Response) => {
    postProfileService(req, res)
}

export const deleteProfile = (req: Request, res:Response) => {
    deleteProfileService(req, res)
}

export const updateProfile = (req:Request, res:Response) => {
    updateProfileService(req, res)
}