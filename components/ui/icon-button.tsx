import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type IoniconsIconNames = keyof typeof Ionicons.glyphMap;

interface IconButtonProperties {
  name: IoniconsIconNames;
  onPress: () => void;
  color: string;
  size?: number;
}

export default function IconButton({
  color,
  name,
  size = 24,
  onPress,
}: IconButtonProperties) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
