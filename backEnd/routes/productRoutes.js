import express from "express";
import {
    productDetail,
    removeproduct,
    listProducts,
    addProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

const fieldsArray = [
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
];
productRouter.post("/add", adminAuth, upload.fields(fieldsArray), addProduct);
productRouter.get("/list", listProducts);
productRouter.post("/detail", productDetail);
productRouter.post("/remove", adminAuth, removeproduct);

export default productRouter;
