import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={300}
    viewBox="0 0 350 300"
    backgroundColor="#ddd"
    foregroundColor="#eee"
    {...props}
  >
    <rect x="8" y="2" rx="0" ry="0" width="352" height="166" />
    <circle cx="35" cy="210" r="29" />
    <rect x="77" y="190" rx="0" ry="0" width="282" height="36" />
    <rect x="79" y="236" rx="0" ry="0" width="278" height="23" />
  </ContentLoader>
);

export default MyLoader;
