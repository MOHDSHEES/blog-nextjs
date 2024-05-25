// components/SafeHtml.js
import React from "react";
import DOMPurify from "isomorphic-dompurify";

const SafeHtml = ({ htmlString }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlString);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default SafeHtml;
