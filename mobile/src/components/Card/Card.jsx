import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => removeItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
