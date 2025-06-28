import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            category,
            subCategory,
            sizes,
            bestseller,
        } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter(
            (item) => item != undefined,
        );

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {
                    resource_type: "image",
                    timeout: 60000,
                });
                return result.secure_url;
            }),
        );

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true" ? true : false,
            image: imagesUrl,
            date: Date.now(),
        };

        console.log(productData);

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "product added" });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
};

const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
};
const removeproduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product removed" });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
};
const productDetail = async (req, res) => {
    try {
        const product = await productModel.findById(req.body.id);
        res.json({ success: true, product });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
};

export { listProducts, addProduct, removeproduct, productDetail };
