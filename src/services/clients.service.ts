import { Response, Request } from "express"
import { Client } from "../model/clientEntities";
import { AppDataSource } from "../db";

const clientRepository = AppDataSource.getRepository(Client);


export const displayClientService = async (req: Request, res: Response) => {
    try {
        const client = await clientRepository.find()

        res.status(200).json(client)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los clientes' })
    }
}

export const displayOneClientService = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try {
        const client = await clientRepository.findOne({ where: { id: parseInt(id) } });

        if (!client) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el cliente' });
    }
}

export const postClientService = async (req: Request, res: Response) => {
    const { name, last_name, email, tel } = req.body

    const client = new Client()
    client.name = name
    client.email = email
    client.last_name = last_name
    client.tel = tel


    try {
        const savedClient = await clientRepository.save(client);



        res.status(201).json(savedClient);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el cliente' });
    }
}

export const updateClientService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, last_name, email, tel } = req.body;

    try {
        const updateResult = await clientRepository.update({ id: parseInt(id) }, {
            name: name,
            last_name: last_name,
            email: email,
            tel: tel,


        });

        if (updateResult.affected === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        return res.json('Usuario Actualizado');
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el cliente' });
    }
}


export const deleteClientService = async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await clientRepository.delete({ id: parseInt(id) })
    console.log(result)

    return res.sendStatus(204)
}