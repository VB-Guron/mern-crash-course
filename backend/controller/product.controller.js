import Product from "../models/product.model"; // Importing the Product model
import mongoose from "mongoose";

export const getProducts = async (req, res)=>{
    try{
        const products = await Product.find({}); // Find all products in the database
        res.status(200).json({success: true, data: products});
    }catch(err){
        console.log("Error in Get Products:", err.message);
        res.status(500).json({success: false, message: err.message});
    }
}

export const createProduct = async (req, res)=>{
    const product = req.body;// user input that is sent to the server
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message: "Please fill all the fields"});
    }
    const newProduct = new Product(product);

    

    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    }catch(err){
        console.log("Error in Create Product:", err.message);
        res.status(500).json({success: false, message: err.message});
    }
}

export const updateProduct = async (req, res)=>{
    const {id}  = req.params; // destructuring the id from the params
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product ID"});
    }
    
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    }catch(err){
        console.log("Error in Update Product:", err.message);
        res.status(500).json({success: false, message: err.message});
    }
}

export const deleteProduct =  async (req, res)=>{
    const {id}  = req.params; // destructuring the id from the params
    console.log("Product ID:", id);

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    }catch(err){
        console.log("Error in Delete Product:", err.message);
        res.status(500).json({success: false, message: err.message});
    }
}