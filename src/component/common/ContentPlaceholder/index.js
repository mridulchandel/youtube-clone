import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={props.width}
    height={props.height}
    viewBox="0 0 100% 300"
    backgroundColor="#ddd"
    foregroundColor="#eee"
    {...props}
  >
    {props.children}
  </ContentLoader>
);

export default MyLoader;
