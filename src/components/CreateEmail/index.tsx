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
import emailsSchemas from "../../schemas/Emails";
import { IEmails } from "../../interface/Emails";

interface ICreatePhoneProps {
  contactId: string;
  isOpenEmail: boolean;
  onCloseEmail: () => void;
}

const CreateEmail = ({
  contactId,
  isOpenEmail,
  onCloseEmail,
}: ICreatePhoneProps) => {
  const { createEmail } = useContacts();
  const { token } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmails>({
    resolver: yupResolver(emailsSchemas),
  });

  const handleCreateEmail: SubmitHandler<IEmails> = (data: IEmails) => {
    const arryEmails: IEmails[] = [];

    arryEmails.push(data);

    createEmail(contactId, arryEmails, token);
    onCloseEmail();
  };

  return (
    <Modal isOpen={isOpenEmail} onClose={onCloseEmail}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Email</ModalHeader>
        <VStack
          as={"form"}
          onSubmit={handleSubmit(handleCreateEmail)}
          w={"100%"}
        >
          <ModalBody w={"100%"} py={"0"}>
            <Input
              icon={FaMobile}
              label={"email"}
              type={"tel"}
              error={errors.email}
              {...register("email")}
              placeholder={"Digite seu telefone"}
            />
            {!errors.email && (
              <Text fontSize={"xs"} ml={"1"} my={"1"} color={"gray.600"}>
                Ex: nome@mail.com
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              variant={"toEnter"}
              w={"6.25em"}
              mr={3}
              onClick={onCloseEmail}
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

export default CreateEmail;
