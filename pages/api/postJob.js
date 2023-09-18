import dbConnect from "../../lib/mongoose";
import jobModel from "../../models/jobModel";

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
      // console.log(req.body.data);
      const job = new jobModel(req.body.data);
      const data = await job.save();
      // console.log(data);
      // let trending = resu.map((a) => a.title);
      // console.log(resu.categories);
      if (data && data._id) {
        res.json({ status: 200, message: "Successfully Saved", data: data });
      } else {
        res.json({
          status: 400,
          message: "Something went wrong. Try again later.",
        });
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
    // console.log(error);
    res.json({ status: 400, message: error });
    // res.json({ error });
  }
}
