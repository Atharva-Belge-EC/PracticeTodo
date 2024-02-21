import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  console.log("controller reached");
  const { email, password, name } = req.body;
  console.log(email, password, name );
  let data = {
    email,
    name,
  };

    const hash = await bcrypt.hash(password, 10)
        
        data.password = hash;
        console.log(data.password);
         

  const user = await userModel.create(data);
  console.log(user);
  if (!user) return res.status(401).json({ message: "failed" });

  return res.status(200).json({ message: "success", user });
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  let user = await userModel.find({ email }).lean().exec();

  if (!user) res.status(404).json({ message: "no user found" });

  if (bcrypt.compareSync(password, user[0].password)) {
    let token = jwt.sign(
      {
        data: user[0]._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token)

    res.status(200).json({ message: "success", user: { ...user[0], token: token} });
  } else res.status(400).json({ message: "wrong credentials" });
};
