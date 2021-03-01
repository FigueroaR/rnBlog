import React, {useState} from 'react';
import {View , Text, StyleSheet, TextInput, Button} from 'react-native'


// Our resusbale form component 
const BlogPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={setContent} 
            
            />
            <Button 
                // we navigate after API work is done
                                
                title="Save Blog Post"
            />
        </View>
    )
}

const styles= StyleSheet.create({
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

export default BlogPostForm;