import { textStyle } from "@/utils/constants";
import { Flex, Modal, ModalBody, ModalContent, Text } from "@chakra-ui/react";
import React from "react";

export default function SelectAppLogin({
  isSelectAppLoginOpened,
  setIsSelectAppLoginOpened,
}: {
  isSelectAppLoginOpened: boolean;
  setIsSelectAppLoginOpened: (isOpen: boolean) => void;
}) {
  return (
    <Modal
      isOpen={isSelectAppLoginOpened}
      onClose={() => {
        setIsSelectAppLoginOpened(false);
      }}
      size="xl"
    >
      <ModalContent>
        <ModalBody>
          <Flex flexDir="column">
            <Text
              fontFamily="Khand"
              fontSize="2rem"
              color={textStyle.color.primary}
            >
              Selecione o sistema que deseja acessar
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
