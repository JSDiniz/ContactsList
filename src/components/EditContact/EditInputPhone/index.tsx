import { useEffect } from "react";
import { Input } from "../../Form";
import { IEditContact } from "../index";
import { IContactsRes } from "../../../interface/Contacts";
import { FaMobile, FaMinus } from "react-icons/fa";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Text, VStack, Box, FormLabel } from "@chakra-ui/react";
import { useContacts } from "../../../contexts/Contact";
import { useAuth } from "../../../contexts/Auth";
import { items } from "../../Header/Navbar/Navigation";

interface IcontactProps {
  contact: IContactsRes;
}

const EditInputPhone = ({ contact }: IcontactProps) => {
  const { deletePhone } = useContacts();
  const { token } = useAuth();

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
        phone: `${phone.phone}`,
        id: `${phone.id}`,
      })
    );
  }, [remove, contact]);

  const removePhone = (id: number) => {
    const phone = fields.find((item, index) => index === id)?.phone;
    const phoneId = contact.phones.find((items) => items.phone === phone);

    if (phone && phoneId) {
      deletePhone(phoneId.id, token);
    }

    remove(id);
  };

  return (
    <Box w={"100%"}>
      <FormLabel>Telefone</FormLabel>
      {fields.map((field, index) => (
        <VStack key={field.id} gap={"1px"} position={"relative"}>
          <Input
            icon={FaMobile}
            type={"tel"}
            defaultValue=""
            iconRight={index > 0 && FaMinus}
            onClick={() => removePhone(index)}
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
    </Box>
  );
};

export default EditInputPhone;
