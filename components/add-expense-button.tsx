import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

type IoniconsIconNames = keyof typeof Ionicons.glyphMap;

interface AddExpenseButtonProperties {
  name: IoniconsIconNames;
  onPress: () => void;
  color: string;
}

export default function AddExpenseButton({
  color,
  name,
  onPress,
}: AddExpenseButtonProperties) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
}
