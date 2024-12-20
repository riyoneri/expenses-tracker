import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

import { GlobalStyles } from "../../constants/styles";

interface ButtonProperties {
  style?: ViewStyle;
  mode?: "flat";
  onPress: () => void;
}

export default function Button({
  children,
  mode,
  style,
  onPress,
}: PropsWithChildren<ButtonProperties>) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode && styles.flat]}>
          <Text style={[styles.buttonText, mode && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
