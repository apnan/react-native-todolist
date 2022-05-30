import React,{useState} from 'react';
import { StyleSheet,View, Text,TouchableOpacity} from 'react-native';
import { MaterialIcons,Ionicons } from '@expo/vector-icons'; 

 

export default function TodoItem ({item, pressHandeler}) {
    return(
        <TouchableOpacity onPress={() => pressHandeler(item.key)}>
           <View style={styles.item}>
           <MaterialIcons name='delete' size={18} color='#333'/>
           <Ionicons name="add" color='black' size={18}/>
            <Text style={styles.itemText}>{item.text}</Text>
           </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        flexDirection:'row',
    },
    itemText:{
        marginLeft:10,
    }
})