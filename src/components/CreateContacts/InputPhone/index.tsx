import { useEffect } from "react";
import { Input } from "../../Form";
import { IContact } from "../index";
import { FaMobile, FaPlus, FaMinus } from "react-icons/fa";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Box, Icon, Text, HStack, VStack, FormLabel } from "@chakra-ui/react";

const InputPhone = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<IContact>();

  const { fields, append, remove, update } = useFieldArray<
    IContact,
    "phones",
    "id"
  >({
    control,
    name: "phones",
  });

  useEffect(() => {
    update(0, { phone: "" });
  }, [remove]);

  const addPhone = () => {
    append({ phone: "" });
  };

  return (
    <Box mb={"2"} w={"100%"}>
      <FormLabel>Telefone</FormLabel>
      {fields.map((field, index) => (
        <VStack key={field.id} gap={"1px"} position={"relative"}>
          <Input
            icon={FaMobile}
            type={"tel"}
            defaultValue=""
            iconRight={index > 0 && FaMinus}
            onClick={() => remove(index)}
            error={errors?.phones?.[index]?.phone}
            {...register(`phones.${index}.phone`)}
            placeholder={"Digite seu telefone"}
            pr={"10"}
          />

          {!errors?.phones?.[index]?.phone && (
            <Text
              fontSize={"xs"}
              style={{ margin: "4px 4px 8px 4px" }}
              color={"gray.600"}
              alignSelf={"flex-start"}
            >
              Ex: 99999999999
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
        <Text fontSize={"xs"}>Adicionar número de telefone</Text>
      </HStack>
    </Box>
  );
};

export default InputPhone;
