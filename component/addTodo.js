import React,{useState} from 'react';
import { StyleSheet,View,TextInput,Button} from 'react-native';

export default function AddTodo({submitHandeler}){
const [text,setText] =useState('');

const changeHandeler=(val)=>{
    setText(val);
}
 return(
     <View>
         <TextInput
         style={styles.input}
         placeholder='Write your list here...'
         onChangeText={changeHandeler}
         />
         <Button onPress={() =>submitHandeler(text)} title='add todo' color={text.length<4 ? 'grey':'pink'}/>
     </View>
 )
}
const styles= StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})