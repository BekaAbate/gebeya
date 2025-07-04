import express from "express";

import {
    placeOrder,
    placeOrderSantimpay,
    placeOrderArifpay,
    allOrders,
    userOrders,
    updateStatus,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//payment features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/santimpay", authUser, placeOrderSantimpay);
orderRouter.post("/arifpay", authUser, placeOrderArifpay);

// user feature
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
