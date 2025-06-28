import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.json({
                success: false,
                message: "Not Authorized Login Again Again",
            });
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET).payload;
        if (
            token_decode !==
            process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
        ) {
            return res.json({
                success: false,
                message: "Not Authorized Login Again",
            });
        }
        next();
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: err.message,
        });
    }
};

export default adminAuth;
