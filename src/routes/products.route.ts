import { Router } from "express";
import { displayProducts, postProduct, deleteProduct, updateProduct } from "../controllers/products.controller"

const router = Router()

router.get('/product', displayProducts)

router.post('/product', postProduct)

router.delete('/product/:id', deleteProduct)

router.put('/product/:id', updateProduct)


export default router