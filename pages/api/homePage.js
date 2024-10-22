import dbConnect from "../../lib/mongoose";
import HomePageData from "../../models/homepageDataModel";

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
      // console.log("CREATING DOCUMENT");
      // const createdUser = await User.create(req.body);
      // console.log("CREATED DOCUMENT");
      // res.json({ createdUser });
    } else if (req.method === "GET") {
      // console.log("in get");
      //   console.log("FETCHING DOCUMENTS");
      const homePagedata = await HomePageData.findOne({}, { _id: 0 });
      //   console.log(homePagedata);
      //   console.log("FETCHED DOCUMENTS");
      res.json(homePagedata);
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`);
    }
  } catch (error) {
    // console.log(error);
    res.json({ error });
  }
}
