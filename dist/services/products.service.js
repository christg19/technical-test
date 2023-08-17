"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductService = exports.deleteProductService = exports.postProductService = exports.displayOneProductService = exports.displayProductService = void 0;
const db_1 = require("../db");
const productsEntities_1 = require("../model/productsEntities");
const productRepository = db_1.AppDataSource.getRepository(productsEntities_1.Product);
const displayProductService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productRepository.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los Productos' });
    }
});
exports.displayProductService = displayProductService;
const displayOneProductService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const product = yield productRepository.findOne({ where: { id: parseInt(id) } });
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto' });
    }
});
exports.displayOneProductService = displayOneProductService;
const postProductService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productName, price, stock } = req.body;
    const product = new productsEntities_1.Product();
    product.productName = productName;
    product.price = price;
    product.stock = stock;
    try {
        const savedClient = yield productRepository.save(product);
        res.status(201).json(savedClient);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el producto' });
    }
});
exports.postProductService = postProductService;
const deleteProductService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield productRepository.delete({ id: parseInt(id) });
    console.log(result);
    return res.sendStatus(204);
});
exports.deleteProductService = deleteProductService;
const updateProductService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { productName, price, stock } = req.body;
    try {
        const updateResult = yield productRepository.update({ id: parseInt(id) }, {
            productName: productName,
            price: price,
            stock: stock
        });
        if (updateResult.affected === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        return res.json('Producto Actualizado');
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto' });
    }
});
exports.updateProductService = updateProductService;
