import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView, FlatList } from 'react-native';
import React, { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../components/AuthContext';

const ToDoList = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setToDos] = useState([]);
    const navigation = useNavigation();
    // const { logOut } = useContext(AuthContext);
  
    const addToDo = () => {
      if (title.trim() !== '') {
        const newToDo = { title, description };
        setToDos([...todos, newToDo]);
        setTitle('');
        setDescription('');
      }
    };

  const logOut = async () => {
    try {
      // Clear user information from AsyncStorage directly
      AsyncStorage.removeItem('userInfo');
      AsyncStorage.removeItem('accessToken');
      setUserInfo({}); // Clear user information from state if needed
      toastLogoutMessage();
    } catch (error) {
      console.log('Logout error:', error);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.toDoHeading}>ToDoList</Text>
      <TextInput
        style={styles.toDoInput}
        placeholder='Enter Title'
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.toDoInput}
        placeholder='Enter Description'
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TouchableOpacity style={styles.toDoAddButton} onPress={addToDo}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.toDoAddButton} onPress={logOut}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      <ScrollView style={{ flex: 1 }}>
        {todos.map((todo, index) => (
          <View style={styles.todoItem} key={index}>
            <View style={styles.toDoContent}>
              <Text style={styles.toDoTitle}>Title: {todo.title}</Text>
              <Text style={styles.toDoDescription}>Description: {todo.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    toDoHeading:{
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      margin: 5,
      padding: 5,
      borderRadius: 3,
  
    },
    toDoInput:{
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
      color: '#333',
      padding: 10,
      margin: 6,
    },
    toDoAddButton:{
      backgroundColor: 'black',
      margin: 5,
      padding: 7,
      width: 120,
      borderRadius: 3,
    },
    buttonText:{
      color: 'white',
      fontSize: 18,
      textAlign: 'center'
    },
    todoItem:{
      backgroundColor: '#8DCBE6',
      margin: 7,
      padding: 7,
      marginBottom: 5,
      borderRadius: 10,
      shadowColor: 'black',
    },
    toDoContent:{
      flexDirection: 'column'
    },
    toDoTitle:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black'
    },
    toDoDescription:{
      marginTop: 5,
      color: 'black',
      fontSize: 18,
    },
    // removeContainer:{
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
    //   removeIcon: {
    //     padding: 10,
    //     borderRadius: 5,
    //   //  backgroundColor: 'red'
    // },
  
  
  
  })

export default ToDoList;
