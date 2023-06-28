import dbConnect from "../../../lib/mongoose";
import userModel from "../../../models/userModel";

// export default function handler(req, res) {
//     res.status(200).json({ text: "Hello" });
//   }

export default async function userAPI(req, res) {
  try {
    // console.log("in");
    //   console.log('CONNECTING TO MONGO');
    await dbConnect();
    //   console.log('CONNECTED TO MONGO');
    // console.log(req.method);

    if (req.method === "POST") {
      // const createdUser = await User.create(req.body);
      res.json({ createdUser });
    } else if (req.method === "GET") {
      console.log(req.query.id);
      const user = await userModel.findOne(
        {
          _id: req.query.id,
          // password: req.body.password,
        },
        { password: 0 }
      );
      //   console.log(homePagedata);
      //   console.log("FETCHED DOCUMENTS");
      res.json(user);
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`);
    }
  } catch (error) {
    // console.log(error);
    res.json({ error });
  }
}
