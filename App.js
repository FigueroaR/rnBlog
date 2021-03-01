import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'
import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';


const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

// the app comp is the child for the provider
// now we have context for all screen inside the app
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
