import createDataContext from './createDataContext'


const blogreducer = (state, action) => {
  switch(action.type) {
    case 'add_blogpost': 
      return [...state, {title: `Blog Post #${state.length + 1}`}]
    default:
      return state;
  }
}

const addBlogPost = dispatch => {
  return () => {
    dispatch({type: 'add_blogpost', })
  }
}

//destructuring what we receive     // pass out reducer , actions to disp, and initState
export const {Context, Provider} = createDataContext(blogreducer, {addBlogPost}, [])
