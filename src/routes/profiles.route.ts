import { Router } from "express";
import { displayProfiles, postProfile, deleteProfile } from "../controllers/profiles.controller";

const router = Router()

router.get('/profile', displayProfiles)

router.post('/profile', postProfile)

router.delete('/profile/:id', deleteProfile)

router.put('/profile/:id')


export default router