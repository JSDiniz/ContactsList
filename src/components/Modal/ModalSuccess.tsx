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

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  mensage: string;
  secondaryTex: string;
  texButton?: string | undefined;
  onClick?: () => void | undefined;
}

const ModalSuccess = ({
  isOpen,
  onClose,
  onClick,
  mensage,
  secondaryTex,
  texButton,
}: ModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display={"flex"}>
          <Center
            bg={"orange.600"}
            w={"30px"}
            h={"30px"}
            borderRadius={"5px"}
            mr={2}
          >
            <FaExclamation />
          </Center>
          <Text>Yeess..!</Text>
        </ModalHeader>
        <ModalCloseButton bg={"red.600"} />
        <ModalBody textAlign={"center"}>
          <Text>{mensage}</Text>
        </ModalBody>

        <ModalFooter display={"column"}>
          {texButton && (
            <Button
              bg={"orange.600"}
              w={"full"}
              h={"60px"}
              mr={3}
              onClick={onClick}
            >
              {texButton}
            </Button>
          )}
          <Text mt={"4"} textAlign={"center"}>
            <Box dangerouslySetInnerHTML={{ __html: secondaryTex }} />
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalSuccess;
