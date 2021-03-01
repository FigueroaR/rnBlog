import createDataContext from './createDataContext'


const blogreducer = (state, action) => {
  switch(action.type) {
    case 'add_blogpost': 
      return [...state, 
              {id: Math.floor(Math.random() * 99999) , 
              title: action.payload.title,
              content: action.payload.content}]
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload)

    default:
      return state;
  }
}

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'add_blogpost', payload: {title, content} })
    // we navigate after POSTING 
    callback();
  }
}

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({type: 'delete_blogpost', payload: id})
  }
}

//destructuring what we receive     // pass out reducer , actions to disp, and initState
export const {Context, Provider} = createDataContext(blogreducer, 
                                                    {addBlogPost, deleteBlogPost}, 
                                                    [{title: 'TEST POST', content: 'CONTENT', id: 1}])
