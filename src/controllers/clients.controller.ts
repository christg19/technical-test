import { Request, Response } from "express"
import { displayClientService, postClientService, deleteClientService, updateClientService } from "../services/clients.service"

export const displayClients = (req:Request, res:Response) => {
    displayClientService(req, res)
}

export const postClient = (req:Request, res:Response) => {
    postClientService(req, res)
}

export const deleteClient = (req:Request, res:Response) => {
    deleteClientService(req, res)
}

export const updateClient = (req:Request, res:Response) => {
    updateClientService(req, res)
}