import { Request, Response } from "express"
import { displayProfilesService, postProfileService, deleteProfileService, updateProfileService, displayOneProfileService } from "../services/profiles.service"

export const displayProfiles = (req:Request, res:Response) => {
    displayProfilesService(req,res)
}

export const displayOneProfile = (req:Request, res:Response) => {
    displayOneProfileService(req, res)
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