import { Request, Response } from "express"
import { displayProductService, postProductService, deleteProductService, updateProductService} from "../services/products.service"

export const displayProducts = (req:Request, res:Response) => {
    displayProductService(req, res)
}

export const postProduct = (req:Request, res:Response) => {
    postProductService(req, res)
}

export const deleteProduct = (req: Request, res:Response) => {
    deleteProductService(req, res)
}

export const updateProduct = (req:Request, res:Response) => {
    updateProductService(req, res)
}