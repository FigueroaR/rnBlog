import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  // we are destructuring our state and function for BlogContext
  const {data, addBlogPost} = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add post" onPress={addBlogPost}/>
      <FlatList 
        data={data}
        keyExtractor={(blogPost) => blogPost.tittle}  
        renderItem={({item}) => {
          return(<Text>{item.title}</Text>)
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
