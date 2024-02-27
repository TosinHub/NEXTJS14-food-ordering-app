import { User } from "@/model/User";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const POST = async (req:NextApiRequest, res: NextApiResponse) => {
  try {
    // Parse the JSON body
    const body = await new Response(req.body).json();

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL as string);

     const pass = body.password;
     if (!pass?.length || pass.length < 5) {
       new Error("password must be at least 5 characters");
     }

     const notHashedPassword = pass;
     const salt = bcrypt.genSaltSync(10);
     body.password = bcrypt.hashSync(notHashedPassword, salt);
    const createUser = await User.create(body);

    // Return the created user
    return Response.json(createUser);
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
   // return res.status(500).json({ error: "Internal Server Error" });
  }
};
