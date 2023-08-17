import { Router } from "express";
import { displayProfiles, postProfile, deleteProfile, displayOneProfile } from "../controllers/profiles.controller";

const router = Router()

router.get('/profile', displayProfiles)

router.get('/profile/:id', displayOneProfile)

router.post('/profile', postProfile)

router.delete('/profile/:id', deleteProfile)

router.put('/profile/:id')


export default router