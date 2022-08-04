import React, { createContext, useState } from "react";
import { createBlog, useData } from "../helpers/crud";
// const initialValues = {
//   imageUrl: "",
//   title: "",
//   date: "",
//   content: "",
//   email: "",
// };

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [info, setInfo] = useState([]);
  // createBlog(info);
  // setInfo(initialValues);

  return (
    <BlogContext.Provider value={{ createBlog, info, setInfo, useData }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
