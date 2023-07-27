import { FormControl, ITextProps, Input, Text } from "native-base";
interface EntradaTextoProps extends ITextProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  value?: string;
  onChangeText?: (texto: string) => void;
}
export function EntradaTexto({
  label,
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
}: EntradaTextoProps) {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        secureTextEntry={secureTextEntry}
        shadow={3}
        value={value}
        onChangeText={onChangeText}
      />
    </FormControl>
  );
}
