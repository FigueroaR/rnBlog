import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../../src/context/BlogContext'
import {EvilIcons} from '@expo/vector-icons'

const ShowScreen = ( {navigation} ) => {
    // destrcu state with UseContext hook and importing the Context to be used here
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id ===navigation.getParam('id'))
    console.log(blogPost)
    // with ge extra params with added to our navigation
    //console.log(navigation.getParam('id'))
    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

// To navigate 
ShowScreen.navigationOptions= ({navigation}) => {
    return {
        //Property
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
}

const styles = StyleSheet.create({})


export default ShowScreen;