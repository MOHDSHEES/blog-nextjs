function generateSiteMap(posts) {
  const URL = "https://www.offtheweb.in";
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>${URL}</loc>
       </url>
       
       <url>
         <loc>${URL}/policies/advertise</loc>
       </url>
       <url>
       <loc>${URL}/about</loc>
     </url>
        <url>
         <loc>${URL}/contact</loc>
       </url>
       <url>
       <loc>${URL}/career</loc>
     </url>
     <url>
     <loc>${URL}/category/Technology</loc>
   </url>
   <url>
   <loc>${URL}/category/Cyber-Security</loc>
 </url>
 <url>
 <loc>${URL}/category/Business</loc>
</url>
<url>
<loc>${URL}/category/Sports</loc>
</url>
<url>
<loc>${URL}/policies/privacyPolicy</loc>
</url>
<url>
<loc>${URL}/policies/termsCondition</loc>
</url>
       ${posts
         .map((post) => {
           return `
             <url>
                 <loc>${`${URL}/blog/${post.title
                   .replace(/ /g, "-")
                   .replace(/\?/g, "")}/${post._id}`}</loc>
             </url>
           `;
         })
         .join("")}
     </urlset>
   `;
}

export { generateSiteMap };
