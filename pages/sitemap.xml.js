// import { getSortedPostsData } from "../lib/posts";

import { generateSiteMap } from "../components/functions/sitemap";
import dbConnect from "../lib/mongoose";
import blogModel from "../models/blogModel";

export async function getServerSideProps({ res }) {
  //   const posts = getSortedPostsData();
  await dbConnect();
  const blogs = await blogModel
    .find({}, { _id: 1, title: 1 }, { status: "Active" })
    .lean();
  //   let da = blogs.toObject();

  const data = blogs.map((obj) => ({ ...obj, _id: obj._id.toString() }));
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(data);

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
