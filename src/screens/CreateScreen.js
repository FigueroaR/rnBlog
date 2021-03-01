import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {Context} from '../../src/context/BlogContext'

const CreateScreen = ( {navigation} ) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
   const {addBlogPost} = useContext(Context)

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={setContent} 
            
            />
            <Button 
                // we navigate after API work is done
                onPress={() => {addBlogPost(title, content, () => {
                    navigation.navigate('Index')
                })
                                }}
                title="Add Blog Post"/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})


export default CreateScreen;