import { PropsWithChildren } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface ScreenWrapperProperties {
  style?: ViewStyle;
}

export default function ScreenWrapper({
  children,
  style,
}: PropsWithChildren<ScreenWrapperProperties>) {
  return <View style={[styles.root, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
