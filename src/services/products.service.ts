import { Response, Request} from "express"
import { AppDataSource } from "../db";
import { Product } from "../model/productsEntities";
const productRepository = AppDataSource.getRepository(Product);


export const displayProductService = async (req:Request, res:Response) => {
    try {
        const products = await productRepository.find()

        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los Productos' })
    }
}

export const displayOneProductService = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try {
        const product = await productRepository.findOne({ where: { id: parseInt(id) } });

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto' });
    }
}

export const postProductService = async (req: Request, res: Response) => {
    const {productName, price, stock} = req.body

    if (!productName || !price || !stock) {
        return res.status(400).json({ message: 'Campos incompletos' });
    }
    
    const product = new Product()
     
    product.productName = productName
    product.price = price
    product.stock = stock


    try {
        const savedClient = await productRepository.save(product);

        res.status(201).json(savedClient);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto' });
    }
}

export const deleteProductService = async (req: Request, res: Response) => {
    const {id} = req.params 

    const result = await productRepository.delete({id: parseInt(id)})
    console.log(result)

    return res.sendStatus(204)
}

export const updateProductService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { productName, price, stock } = req.body;

    try {
        const updateResult = await productRepository.update({id: parseInt(id)}, {
            productName: productName,
            price:price,
            stock:stock
        });

        if (updateResult.affected === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        return res.json('Producto Actualizado');
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto' });
    }
};