import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.task}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "dashed",
  },
});
