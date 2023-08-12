import dbConnect from "../../../lib/mongoose";
import uBlogModel from "../../../models/ublogModel";

// export default function handler(req, res) {
//     res.status(200).json({ text: "Hello" });
//   }

export default async function userAPI(req, res) {
  try {
    // console.log(req.method);
    // console.log("in");
    //   console.log('CONNECTING TO MONGO');
    await dbConnect();
    //   console.log('CONNECTED TO MONGO');
    // console.log(req.method);

    if (req.method === "POST") {
      //   console.log(req.body.keywords);
      // console.log("CREATING DOCUMENT");
      const keywordPattern = new RegExp(req.body.keywords.join("|"), "i");
      const blogs = await uBlogModel
        .find({ keywords: keywordPattern })
        .limit(5);
      //   console.log(blogs);

      //   const createdUser = await User.create(req.body);
      // console.log("CREATED DOCUMENT");
      res.json(blogs);
    } else if (req.method === "GET") {
      // console.log("in get");
      //   console.log("FETCHING DOCUMENTS");
      //   const blog = await blogModel.findOne({
      //     title: req.body.title,
      //     status: "Active",
      //   });
      //   //   console.log(homePagedata);
      //   //   console.log("FETCHED DOCUMENTS");
      //   res.json(blog);
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`);
    }
  } catch (error) {
    // console.log(error);
    res.json({ error });
  }
}
