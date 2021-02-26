import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../../src/context/BlogContext'

const ShowScreen = ( {navigation} ) => {
    // destrcu state with UseContext hook and importing the Context to be used here
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id ===navigation.getParam('id'))
    console.log(blogPost)
    // with ge extra params with added to our navigation
    //console.log(navigation.getParam('id'))
    return <View>
        <Text>{blogPost.title}</Text>
    </View>
}

const styles = StyleSheet.create({})


export default ShowScreen;