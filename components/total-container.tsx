import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../constants/styles";

interface TotalContainerProperties {
  label: string;
  total: number;
}

export default function TotalContainer({
  label,
  total,
}: TotalContainerProperties) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <Text style={styles.totalText}>${total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 18,
    color: GlobalStyles.colors.primary400,
  },
  labelText: {
    color: GlobalStyles.colors.primary400,
  },
});
