import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing orders using COD methods
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "order placed" });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
};

// placing orders using santimpay methods
const placeOrderSantimpay = async (req, res) => {
    res.json({
        success: false,
        message: "not available, use cash on delivery",
    });
};

// placing orders using Arifpay methods
const placeOrderArifpay = async (req, res) => {
    res.json({
        success: false,
        message: "not available, use cash on delivery",
    });
};

// all orders data for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
};

// user orders data for frontEnd
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
};

// update order status for admin panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: "Status updated" });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
};

export {
    placeOrder,
    placeOrderSantimpay,
    placeOrderArifpay,
    allOrders,
    userOrders,
    updateStatus,
};
