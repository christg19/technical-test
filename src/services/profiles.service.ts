import { Response, Request} from "express"
import { Profile } from "../model/profilesEntities"
import { AppDataSource } from "../db";
const profileRepository = AppDataSource.getRepository(Profile);


export const displayProfilesService = async (req:Request, res:Response) => {
    try {
        const profiles = await profileRepository.find()

        res.status(200).json(profiles)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los perfiles' })
    }
}

export const displayOneProfileService = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try {
        const profile = await profileRepository.findOne({ where: { id: parseInt(id) } });

        if (!profile) {
            return res.status(404).json({ message: 'Perfil no encontrado' });
        }

        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el perfil' });
    }
}


export const postProfileService = async (req: Request, res: Response) => {
    const { username, password, rol } = req.body

    if (!username || !password || !rol) {
        return res.status(400).json({ message: 'Campos incompletos' });
    }
    
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