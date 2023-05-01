import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { IInputs } from "../intex";

const Inputs = ({ type, placeholder }: IInputs) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={
          type === "email" ? (
            <EmailIcon color="brand1" />
          ) : (
            <LockIcon color="brand1" />
          )
        }
      />
      <Input type={type} placeholder={placeholder} />
      {type === "password" && (
        <InputRightElement
          cursor={"pointer"}
          children={
            <Icon as={AiOutlineEyeInvisible} boxSize={5} color="brand1" />
          }
        />
      )}
    </InputGroup>
  );
};

export default Inputs;
