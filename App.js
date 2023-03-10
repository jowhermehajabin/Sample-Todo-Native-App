import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import { Keyboard } from "react-native";

export default function App() {
  const [todo, setTodo] = useState([
    { task: "Wake up", key: "1" },
    { task: "Learn react native", key: "2" },
    { task: "Sleep", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.key != key);
    });
  };

  const submitHandler = (task) => {
    if (task.length > 4) {
      setTodo((prevTodos) => {
        return [...prevTodos, { task: task, key: Math.random().toString() }];
      });
    } else {
      Alert.alert("Opps!", "Todos must be longer than 4 characters.", [
        { text: "Got it!" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
