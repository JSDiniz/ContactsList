import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Center,
  Box,
} from "@chakra-ui/react";
import { FaExclamation } from "react-icons/fa";

interface IModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
  error: string;
  secondaryTex: string;
}

const ModalError = ({
  isOpen,
  onClose,
  error,
  secondaryTex,
}: IModalErrorProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display={"flex"}>
          <Center
            bg={"red.600"}
            w={"30px"}
            h={"30px"}
            borderRadius={"5px"}
            mr={1}
          >
            <FaExclamation />
          </Center>
          <Text>Oops!</Text>
        </ModalHeader>
        <ModalCloseButton bg={"red.600"} />
        <ModalBody textAlign={"center"}>
          <Text>Ocorreu algum erro! {error}</Text>
        </ModalBody>

        <ModalFooter display={"column"}>
          <Button bg={"red.600"} w={"full"} h={"60px"} mr={3} onClick={onClose}>
            Tentar novamente
          </Button>
          <Text mt={"4"} textAlign={"center"}>
            <Box dangerouslySetInnerHTML={{ __html: secondaryTex }} />
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalError;
