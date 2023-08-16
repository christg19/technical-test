import { Router } from "express";
import { displayClients, displayOneClient, postClient, deleteClient, updateClient } from "../controllers/clients.controller";

const router = Router()

router.get('/client', displayClients)

router.get('/client/:id', displayOneClient)

router.post('/client', postClient)

router.delete('/client/:id', deleteClient)

router.put('/client/:id', updateClient)


export default router