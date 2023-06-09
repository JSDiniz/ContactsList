import {
  FormLabel,
  InputGroup,
  FormControl,
  InputLeftElement,
  FormErrorMessage,
  InputRightElement,
  Input as ChakraInput,
} from "@chakra-ui/react";
import {
  useState,
  useEffect,
  forwardRef,
  useCallback,
  ForwardRefRenderFunction,
} from "react";
import { IInputProps } from "../../interface/Form";

type inputVariantsOptions = {
  [key: string]: string;
};

const inputVariants: inputVariantsOptions = {
  error: "red.600",
  focus: "orange.600",
  default: "gray.600",
  filled: "green.600",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  {
    name,
    label,
    error = null,
    icon: Icon,
    iconRight: IconR,
    defaultValue,
    onClick,
    ...rest
  },
  ref
) => {
  const [variants, setVariants] = useState("default");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      return setVariants("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      return setVariants("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariants("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}

      <InputGroup flexDir={"column"}>
        {Icon && (
          <InputLeftElement mt={"1.5px"} color={inputVariants[variants]}>
            <Icon />
          </InputLeftElement>
        )}

        <ChakraInput
          id={name}
          h={"44px"}
          name={name}
          defaultValue={defaultValue}
          size={"lg"}
          fontSize={"sm"}
          border={"1px"}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          color={inputVariants[variants]}
          borderColor={inputVariants[variants]}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          _focus={{
            boxShadow: "0 0 0 0",
            borderColor: inputVariants[variants],
          }}
          _hover={{ borderColor: "orange.600" }}
          _placeholder={{ color: "grey.400" }}
          ref={ref}
          {...rest}
        />
        {IconR && (
          <InputRightElement
            as={"button"}
            type={"button"}
            mt={"1.5px"}
            onClick={onClick}
            _hover={{ color: "orange.600" }}
            cursor={"pointer"}
          >
            <IconR />
          </InputRightElement>
        )}

        {!!error && (
          <FormErrorMessage
            color={inputVariants[variants]}
            style={{ margin: "6px 4px 8px 4px" }}
          >
            {error.message}
          </FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
