import { Box, Icon, Text, HStack, VStack, FormLabel } from "@chakra-ui/react";
import { useEffect } from "react";
import { Input } from "../../Form";
import { IContact } from "../index";
import { FaEnvelope, FaPlus, FaMinus } from "react-icons/fa";
import { useFieldArray, useFormContext } from "react-hook-form";

const InputEmail = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<IContact>();

  const { fields, append, remove, update } = useFieldArray<
    IContact,
    "emails",
    "id"
  >({
    control,
    name: "emails",
  });

  useEffect(() => {
    update(0, { email: "" });
  }, [remove]);

  const addPhone = () => {
    append({ email: "" });
  };

  return (
    <Box mb={"2"} w={"100%"}>
      <FormLabel>Email</FormLabel>
      {fields.map((field, index) => (
        <VStack key={field.id} gap={"1px"} position={"relative"}>
          <Input
            icon={FaEnvelope}
            type={"email"}
            defaultValue=""
            iconRight={index > 0 && FaMinus}
            onClick={() => remove(index)}
            error={errors?.emails?.[index]?.email}
            {...register(`emails.${index}.email`)}
            placeholder={"Digite seu email"}
            pr={"10"}
          />

          {!errors?.emails?.[index]?.email && (
            <Text
              fontSize={"xs"}
              style={{ margin: "4px 4px 8px 4px" }}
              color={"gray.600"}
              alignSelf={"flex-start"}
            >
              Ex: nome@mail.com
            </Text>
          )}
        </VStack>
      ))}
      <HStack
        as={"button"}
        type={"button"}
        _hover={{ color: "orange.600" }}
        cursor={"pointer"}
        onClick={addPhone}
      >
        <Icon as={FaPlus} fontSize={"xs"} />
        <Text fontSize={"xs"}>Adicionar novo email</Text>
      </HStack>
    </Box>
  );
};

export default InputEmail;
