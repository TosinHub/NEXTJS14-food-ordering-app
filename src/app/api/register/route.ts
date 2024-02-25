import { User } from "@/model/User";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

export const POST = async (req:NextApiRequest, res: NextApiResponse) => {
  try {
    // Parse the JSON body
    const body = await new Response(req.body).json();


    // Connect to MongoDB
    await mongoose.connect("mongodb+srv://food-ordering:XQcSX3TtHzg04mY7@food-ordering-app.zrdwhar.mongodb.net/food");

    // Create the user
    const createUser = await User.create(body);

    // Return the created user
    return Response.json(createUser);
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
   // return res.status(500).json({ error: "Internal Server Error" });
  }
};
