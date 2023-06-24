import dbConnect from "../../lib/mongoose";
import User from "../../models/userModel";

// export default function handler(req, res) {
//     res.status(200).json({ text: "Hello" });
//   }

export default async function userAPI(req, res) {
  try {
    console.log("in");
    //   console.log('CONNECTING TO MONGO');
    await dbConnect();
    //   console.log('CONNECTED TO MONGO');
    // console.log(req.method);

    if (req.method === "POST") {
      //   console.log("CREATING DOCUMENT");
      const createdUser = await User.create(req.body);
      //   console.log("CREATED DOCUMENT");
      res.json({ createdUser });
    } else if (req.method === "GET") {
      const resu = await Blogs.findOne({ status: "Active" })
        .limit(6)
        .sort({ $natural: -1 });
      res.json(resu);
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`);
    }
  } catch (error) {
    // console.log(error);
    res.json({ error });
  }
}
