import { FormControl, FormLabel } from "@chakra-ui/react";
import Inputs from "./Inputs";

export interface IInputs {
  type: string;
  placeholder: string;
}

interface IForms extends IInputs {
  label: string;
}

const Forms = ({ label, type, placeholder }: IForms) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Inputs type={type} placeholder={placeholder} />
    </FormControl>
  );
};

export default Forms;
