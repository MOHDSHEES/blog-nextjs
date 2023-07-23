// import { getSortedPostsData } from "../lib/posts";
import { generateSiteMap } from "../components/functions/sitemap";
import dbConnect from "../lib/mongoose";
// import blogModel from "../models/blogModel";
import uBlogModel from "../models/ublogModel";

export async function getServerSideProps({ res }) {
  //   const posts = getSortedPostsData();
  await dbConnect();
  const blogs = await uBlogModel
    .find({ status: "Active" }, { id: 1, title: 1 })
    .lean();
  //   let da = blogs.toObject();

  // const data = blogs.map((obj) => ({ ...obj, id: obj.id.toString() }));
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(blogs);

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
