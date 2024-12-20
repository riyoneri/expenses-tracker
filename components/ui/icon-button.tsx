import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type IoniconsIconNames = keyof typeof Ionicons.glyphMap;

interface IconButtonProperties {
  name: IoniconsIconNames;
  onPress: () => void;
  color: string;
}

export default function IconButton({
  color,
  name,
  onPress,
}: IconButtonProperties) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
