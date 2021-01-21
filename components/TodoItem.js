import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({ todo, setTodos }) => {
  const handleDeleteItem = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.key !== todo.key)
    );
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={handleDeleteItem}>
        <MaterialIcons name="delete" size={24} />
      </TouchableOpacity>
      <Text style={styles.description}>{todo.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    color: 'black',
    marginLeft: 8,
  },
});

export default TodoItem;
