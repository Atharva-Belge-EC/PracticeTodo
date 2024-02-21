import jwt from "jsonwebtoken";
import userModel from "../models/user.js";

export const authUser = async (req, res, next) => {
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(401).json({message: "Invalid Token"})
    }
    const token = jwt.verify(authorization,process.env.JWT_SECRET);
    console.log(token);

    const user = await userModel.findOne({_id: token.data}).lean().exec();
    if(user) {
        req.tokenData = user;
        next();
    }
    else return res.status(401).json({message: "user not authorized"})


}