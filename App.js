import { StyleSheet, Text, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import React,{useState} from 'react';
import Header from './component/header';
import TodoItem from './component/todoItem';
import AddTodo from './component/addTodo';
 
export default function App() {
  const[todos,setTodos] =useState([
    {text:'sleep', key:'1'},
    {text:'read',key:'2'},
    {text:'cook',key:'3'}
  ]);
  const pressHandeler =(key) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const submitHandeler =(text)=>{
    if(text.length > 3){
      setTodos((prevTodos)=>{
        return[
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ];
      });
    }  else {
      Alert.alert('Sorry!', 'Write at least 4 character ',[
        {text:'Understood',onPress:()=> console.log('alert closed')}
      ]);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandeler={submitHandeler}/>
      <View style={styles.list}>
        <FlatList
        data={todos}
        renderItem={({item}) =>(
          <TodoItem item={item} pressHandeler={pressHandeler}/>
        )}
        />
      </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
    flex:1,
  },
  list:{
    marginTop: 20,
  }
});
