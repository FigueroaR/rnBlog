import React, {useState} from 'react';

const BlogContext = React.createContext();

//children is the <App/>
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([])

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Blogpost #${blogPosts.length + 1}` } ])
  }

  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
