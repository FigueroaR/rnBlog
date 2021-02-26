import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity  } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

//props.naviagtion
const IndexScreen = ({navigation}) => {
  //console.log(props)
  // we are destructuring our state and function
  const {state, addBlogPost, deleteBlogPost} = useContext(Context);

  return (
    <View>
      
      <Button title="Add post" onPress={addBlogPost}/>
      <FlatList 
        data={state}
        keyExtractor={blogPost => blogPost.title}  
        renderItem={ ({item}) => {
          return(
          <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
            <View style={styles.row}>
            <Text style={styles.title}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather style={styles.icon} name="trash" /> 
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
          )
        } }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 5

  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
