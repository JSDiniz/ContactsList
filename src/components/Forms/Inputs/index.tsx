import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import {
  EmailIcon,
  LockIcon,
  PhoneIcon,
  ViewOffIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { AiOutlineUser, AiOutlineCamera } from "react-icons/ai";
import { IInputs } from "../intex";

const Inputs = ({ type, placeholder }: IInputs) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={
          type === "text" && (
            <Icon as={AiOutlineUser} color="brand1" boxSize={5} />
          )
        }
      />

      <InputLeftElement
        pointerEvents="none"
        children={type === "email" && <EmailIcon color="brand1" />}
      />

      <InputLeftElement
        pointerEvents="none"
        children={type === "password" && <LockIcon color="brand1" />}
      />

      <InputLeftElement
        pointerEvents="none"
        children={type === "tel" && <PhoneIcon color="brand1" />}
      />

      <InputLeftElement
        pointerEvents="none"
        children={
          type === "url" && (
            <Icon as={AiOutlineCamera} color="brand1" boxSize={5} />
          )
        }
      />

      <Input type={type} placeholder={placeholder} />
      {type === "password" && (
        <InputRightElement
          cursor={"pointer"}
          children={<ViewOffIcon color="brand1" />}
        />
      )}
    </InputGroup>
  );
};

export default Inputs;
