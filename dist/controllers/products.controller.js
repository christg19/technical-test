"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteProduct = exports.postProduct = exports.displayOneProduct = exports.displayProducts = void 0;
const products_service_1 = require("../services/products.service");
const displayProducts = (req, res) => {
    (0, products_service_1.displayProductService)(req, res);
};
exports.displayProducts = displayProducts;
const displayOneProduct = (req, res) => {
    (0, products_service_1.displayOneProductService)(req, res);
};
exports.displayOneProduct = displayOneProduct;
const postProduct = (req, res) => {
    (0, products_service_1.postProductService)(req, res);
};
exports.postProduct = postProduct;
const deleteProduct = (req, res) => {
    (0, products_service_1.deleteProductService)(req, res);
};
exports.deleteProduct = deleteProduct;
const updateProduct = (req, res) => {
    (0, products_service_1.updateProductService)(req, res);
};
exports.updateProduct = updateProduct;
