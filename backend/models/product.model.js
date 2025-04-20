import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
}, {
    timestamps: true
}); // Automatically add createdAt and updatedAt fields

//sigular and capitalized Product, because mongoose will automatically look for the plural form of the model name in lowercase in the database
const Product = mongoose.model("Product", productSchema);

export default Product;