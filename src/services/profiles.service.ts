import { Response, Request} from "express"
import { Profile } from "../model/profilesEntities"
import { AppDataSource } from "../db";
const profileRepository = AppDataSource.getRepository(Profile);


export const displayProfilesService = async (res:Response) => {
    try {
        const profiles = await profileRepository.find()

        res.status(200).json(profiles)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los perfiles' })
    }
}

export const postProfileService = async (req: Request, res: Response) => {
    const { username, password, rol } = req.body
    
    const profile = new Profile()
    profile.username = username
    profile.password = password
    profile.rol = rol

    try {
        const savedProfile = await profileRepository.save(profile);

        res.status(201).json(savedProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el perfil' });
    }
}

export const deleteProfileService = async (req: Request, res: Response) => {
    const {id} = req.params 

    const result = await profileRepository.delete({id: parseInt(id)})
    console.log(result)

    return res.sendStatus(204)
}

export const updateProfileService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, password, rol} = req.body;

    try {
        const updateResult = await profileRepository.update({id: parseInt(id)}, {
            username:username,
            password:password,
            rol:rol
        });

        if (updateResult.affected === 0) {
            return res.status(404).json({ message: 'Perfil no encontrado' });
        }

        return res.json('Perfil Actualizado');
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el perfil' });
    }
};