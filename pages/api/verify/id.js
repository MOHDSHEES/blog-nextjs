import dbConnect from "../../../lib/mongoose";
import employeeModel from "../../../models/employeeModel";

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
      // console.log("CREATING DOCUMENT");
      console.log(req.body.id);
      // console.log("in");
      const data = await employeeModel
        .findOne(
          { "certificate.certificateNo": req.body.id },
          { _id: 0, tasks: 0 }
        )
        .lean();
      // const data = await tempBlogModel
      //   .findOne({ id: req.body.id })
      //   .collation({
      //     locale: "en",
      //     strength: 2,
      //   });
      if (data && data) {
        res.json({ status: 1, data: data });
        // console.log("in -in");
      } else {
        res.json({ status: 0 });
      }

      //   const createdUser = await User.create(req.body);
      // console.log("CREATED DOCUMENT");
      //   res.json({ createdUser });
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
    console.log(error);
    res.json({ error });
  }
}
