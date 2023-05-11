import { useEffect } from "react";
import { Input } from "../../Form";
import { IEditContact } from "../index";
import { IContactsRes } from "../../../interface/Contacts";
import { FaMobile, FaPlus, FaMinus } from "react-icons/fa";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Text, VStack, Box, FormLabel, Icon, HStack } from "@chakra-ui/react";

interface IcontactProps {
  contact: IContactsRes;
}

const EditInputPhone = ({ contact }: IcontactProps) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<IEditContact>();

  const { fields, append, remove, update } = useFieldArray<
    IEditContact,
    "phones",
    "id"
  >({
    control,
    name: "phones",
  });

  useEffect(() => {
    contact.phones.map((phone, index) =>
      update(index, {
        telephone: `${phone.telephone}`,
        id: `${phone.id}`,
      })
    );
  }, [remove]);

  const addPhone = () => {
    append({ telephone: "", id: "" });
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
            error={errors?.phones?.[index]?.telephone}
            {...register(`phones.${index}.telephone`)}
            placeholder={"Digite seu telefone"}
            pr={"10"}
          />

          {!errors?.phones?.[index]?.telephone && (
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

export default EditInputPhone;
