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
} from "@chakra-ui/react";

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
  buttonText: string;
  //   message: string;
  //   secundaryText: string;
}

const ModalSuccess = ({
  isOpen,
  onClose,
  onClick,
  buttonText,
}: ModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Yeess..</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Seu cadastro deu super certo, vamos lá</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClick}>
            {buttonText}
          </Button>
          {/* <Button variant="ghost">Secondary Action</Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalSuccess;
