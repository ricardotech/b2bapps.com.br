import { buttonStyle, textStyle } from "@/utils/constants";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useBreakpointValue } from "@chakra-ui/react";
import {
  IoIosCellular,
  IoIosClose,
  IoIosLock,
  IoIosMegaphone,
  IoIosMenu,
  IoIosPeople,
  IoIosPhonePortrait,
} from "react-icons/io";

export default function Header({
  isSelectAppLoginOpened,
  setIsSelectAppLoginOpened,
}: {
  isSelectAppLoginOpened: boolean;
  setIsSelectAppLoginOpened: (isOpen: boolean) => void;
}) {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState<boolean>(false);

  const [selectedApp, setSelectedApp] = useState<"Barber">("Barber");

  const isDesktop = useBreakpointValue({
    md: true,
    lg: true,
    xl: true,
  });

  return (
    <Flex w="100%" position="fixed">
      <Flex
        px="20px"
        bg="#FFF"
        h="100px"
        w="100%"
        align="center"
        justify="space-between"
        maxW="1400px"
        mx="auto"
      >
        <Img src="/b2bapps2.png" w="150px" h="auto" />
        {isDesktop && (
          <Flex align="center">
            <Flex
              cursor="pointer"
              onClick={() => setIsSelectAppLoginOpened(!isSelectAppLoginOpened)}
              bg={buttonStyle.bgColor.logo}
              borderRadius="full"
              px="20px"
              py="5px"
            >
              <Text
                fontSize="1rem"
                color={textStyle.color.white}
                fontFamily="Khand"
                fontWeight={600}
              >
                ENTRAR EM CONTATO
              </Text>
            </Flex>
            <Flex
              ml="10px"
              cursor="pointer"
              onClick={() => setIsSelectAppLoginOpened(!isSelectAppLoginOpened)}
              bg={buttonStyle.bgColor.gray}
              borderRadius="full"
              px="20px"
              py="5px"
            >
              <Text
                fontSize="1rem"
                color={textStyle.color.black}
                fontFamily="Khand"
                fontWeight={600}
              >
                ÁREA DO CLIENTE
              </Text>
              <Icon as={IoIosLock} color="#000" mt="2px" ml="5px" />
            </Flex>
          </Flex>
        )}
        {!isDesktop && (
          <Flex align="center">
            <Flex
              onClick={() => {
                setIsHeaderMenuOpened(!isHeaderMenuOpened);
              }}
              cursor="pointer"
              ml="10px"
              justify="center"
              align="center"
              boxShadow="rgba(0, 0, 0, 0.3) 0 0 10px"
              borderRadius={8}
              p="5px"
            >
              <Icon
                as={isHeaderMenuOpened ? IoIosClose : IoIosMenu}
                color="#1F1F1F"
                fontSize="1.8rem"
              />
            </Flex>
          </Flex>
        )}
      </Flex>
      {!isDesktop && (
        <Drawer
          placement="bottom"
          isOpen={isHeaderMenuOpened}
          onClose={() => setIsHeaderMenuOpened(false)}
        >
          <DrawerOverlay bg="rgba(0, 0, 0, 0.5)" />
          <DrawerContent
            style={{
              backgroundColor: "transparent",
            }}
          >
            <DrawerBody
              style={{
                backgroundColor: "#FFF",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
              }}
              p="20px"
            >
              <SimpleGrid columns={[2, 2, 4]} columnGap="10px" rowGap="10px">
                <Flex
                  cursor="pointer"
                  onClick={() =>
                    setIsSelectAppLoginOpened(!isSelectAppLoginOpened)
                  }
                  bg={buttonStyle.bgColor.logo}
                  borderRadius="16"
                  px="20px"
                  py="10px"
                  h="70px"
                  w="100%"
                  justify="center"
                  align="center"
                >
                  <Text
                    fontSize="1rem"
                    color={textStyle.color.white}
                    fontFamily="Khand"
                    fontWeight={500}
                  >
                    ENTRAR EM CONTATO
                  </Text>
                  <Icon
                    ml="5px"
                    mt="-5px"
                    as={IoIosPhonePortrait}
                    color="#FFF"
                    fontSize="1.5rem"
                  />
                </Flex>
                <Flex
                  cursor="pointer"
                  onClick={() =>
                    setIsSelectAppLoginOpened(!isSelectAppLoginOpened)
                  }
                  bg={buttonStyle.bgColor.logo}
                  borderRadius="16"
                  px="20px"
                  py="10px"
                  h="70px"
                  w="100%"
                  justify="center"
                  align="center"
                >
                  <Text
                    fontSize="1rem"
                    color={textStyle.color.white}
                    fontFamily="Khand"
                    fontWeight={500}
                  >
                    QUEM SOMOS NÓS?
                  </Text>
                  <Icon
                    ml="5px"
                    mt="-5px"
                    as={IoIosPeople}
                    color="#FFF"
                    fontSize="1.5rem"
                  />
                </Flex>
              </SimpleGrid>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </Flex>
  );
}
