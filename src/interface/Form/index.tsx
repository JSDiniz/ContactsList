import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";

export interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
  defaultValue?: string;
}
