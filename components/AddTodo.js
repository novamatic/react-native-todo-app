import React, { useState } from 'react';
import { StyleSheet, Button, View, TextInput, Alert } from 'react-native';

const AddTodo = ({ setTodos }) => {
  const [todo, setTodo] = useState('');

  const handleTodoChange = (text) => {
    setTodo(text);
  };

  const handleAddTodo = () => {
    if (todo.length > 3) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            text: todo,
            key: Math.random().toString(),
          },
        ];
      });
    } else {
      Alert.alert('Oops!', 'Todos must be over 3 characters long!', [
        {
          text: 'Understood',
        },
      ]);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={handleTodoChange}
      />
      <Button onPress={handleAddTodo} title="Add Todo" color="coral" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
  },
});

export default AddTodo;
