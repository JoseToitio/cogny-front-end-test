import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export function BuyItem() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{count}</Text>
      <Button
        title="Increment"
        onPress={() => dispatch({ type: "INCREMENT" })}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: "DECREMENT" })}
      />
    </View>
  );
}
