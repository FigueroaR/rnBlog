import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Context} from '../context/BlogContext' // we are bringinf in our Context
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({navigation}) => {
    const {state} = useContext(Context) // plug in Context to useContext  snd pull state

    const blogPost = state.find( blogpost => blogpost.id === navigation.getParam('id') )


    return (
        <BlogPostForm 
        initialValues={{title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content) => {
            console.log(title, content)
        }}/>
    )
}

const styles = StyleSheet.create({})

export default EditScreen;