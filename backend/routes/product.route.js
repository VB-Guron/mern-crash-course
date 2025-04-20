import express from "express";
import Product from "../models/Product.model.js"; // Importing the Product model
import mongoose from "mongoose";
import {getProducts, createProduct, updateProduct, deleteProduct} from "../controller/product.controller.js"; // Importing the getProducts function

const router = express.Router();
router.get("/", getProducts)
router.post("/", createProduct);
router.put("/:id",updateProduct )
router.delete("/:id",deleteProduct)



export default router;