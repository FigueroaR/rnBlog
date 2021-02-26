import React, {useReducer} from 'react';

const BlogContext = React.createContext();

const blogreducer = (state, action) => {
  switch(action.type) {
    case 'add_blogpost': 
      return [...state, {title: `Blog Post #${state.length + 1}`}]
    default:
      return state;
  }
}

//children is the <App/>
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogreducer, [])

  const addBlogPost = () => {
    dispatch({type: 'add_blogpost', })
  }

  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
