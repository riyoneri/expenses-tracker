import { ComponentProps } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { StyleSheet, Text, TextInput, View, ViewStyle } from "react-native";

import { GlobalStyles } from "../../constants/styles";

interface InputProperties<T extends FieldValues> {
  label: string;
  control: Control<T>;
  name: Path<T>;
  textInputConfig: ComponentProps<typeof TextInput>;
  style?: ViewStyle;
  isNumeric?: boolean;
  invalid?: boolean;
}

export default function Input<T extends FieldValues>({
  label,
  control,
  name,
  textInputConfig,
  style,
  isNumeric,
  invalid,
}: InputProperties<T>) {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            style={[styles.input, invalid && styles.invalidInput]}
            {...textInputConfig}
            onBlur={onBlur}
            onChangeText={(text) => onChange(isNumeric ? Number(text) : text)}
            value={value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontSize: 18,
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
