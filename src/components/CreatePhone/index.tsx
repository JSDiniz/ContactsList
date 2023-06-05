import {
  Text,
  Modal,
  Button,
  VStack,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

import { Input } from "../Form";
import { useAuth } from "../../contexts/Auth";
import { FaMobile } from "react-icons/fa";
import { useContacts } from "../../contexts/Contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import phonesSchemas from "../../schemas/Phones";
import { IPhones } from "../../interface/Phones";

interface ICreatePhoneProps {
  contactId: string;
  isOpenPhone: boolean;
  onClosePhone: () => void;
}

const CreatePhone = ({
  contactId,
  isOpenPhone,
  onClosePhone,
}: ICreatePhoneProps) => {
  const { createPhone } = useContacts();
  const { token } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPhones>({
    resolver: yupResolver(phonesSchemas),
  });

  const handleCreatePhone: SubmitHandler<IPhones> = (data: IPhones) => {
    const arryPhone: IPhones[] = [];

    arryPhone.push(data);

    createPhone(contactId, arryPhone, token);
    onClosePhone();
  };

  return (
    <Modal isOpen={isOpenPhone} onClose={onClosePhone}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Phone</ModalHeader>
        <VStack
          as={"form"}
          onSubmit={handleSubmit(handleCreatePhone)}
          w={"100%"}
        >
          <ModalBody w={"100%"} py={"0"}>
            <Input
              icon={FaMobile}
              label={"phone"}
              type={"tel"}
              error={errors.phone}
              {...register("phone")}
              placeholder={"Digite seu telefone"}
            />
            {!errors.phone && (
              <Text fontSize={"xs"} ml={"1"} my={"1"} color={"gray.600"}>
                Ex: 99999999999
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              variant={"toEnter"}
              w={"6.25em"}
              mr={3}
              onClick={onClosePhone}
            >
              Cancelar
            </Button>
            <Button type={"submit"} variant={"register"} w={"6.25em"}>
              Salvar
            </Button>
          </ModalFooter>
        </VStack>
      </ModalContent>
    </Modal>
  );
};

export default CreatePhone;
