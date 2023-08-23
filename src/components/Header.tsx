import { buttonStyle, textStyle } from "@/utils/constants";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useBreakpointValue } from "@chakra-ui/react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

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
        <Text
          color={textStyle.color.secondary}
          fontFamily="Khand"
          fontSize="2rem"
          fontWeight={600}
        >
          B2B Apps
        </Text>
        {isDesktop && (
          <Flex align="center">
            <Flex mr="20px" flexDir="column" align="center">
              <Text
                fontSize="1rem"
                color={textStyle.color.secondary}
                fontFamily="Khand"
                fontWeight={900}
              >
                (62) 99349-9349
              </Text>
              <Text
                fontSize="0.7rem"
                color={textStyle.color.tertiary}
                fontFamily="Khand"
                fontWeight={300}
              >
                CENTRAL DE VENDAS
              </Text>
            </Flex>
            <Flex
              cursor="pointer"
              onClick={() => setIsSelectAppLoginOpened(!isSelectAppLoginOpened)}
              bg={buttonStyle.bgColor.primary}
              borderRadius="full"
              px="20px"
              py="5px"
            >
              <Text
                fontSize="1rem"
                color={textStyle.color.primary}
                fontFamily="Khand"
                fontWeight={400}
              >
                LIGAMOS PRA VOCÊ
              </Text>
            </Flex>
            <Flex
              ml="10px"
              cursor="pointer"
              onClick={() => setIsSelectAppLoginOpened(!isSelectAppLoginOpened)}
              bg={buttonStyle.bgColor.quinary}
              borderRadius="full"
              px="20px"
              py="5px"
            >
              <Text
                fontSize="1rem"
                color={textStyle.color.secondary}
                fontFamily="Khand"
                fontWeight={400}
              >
                SOU CLIENTE
              </Text>
            </Flex>
          </Flex>
        )}
        {!isDesktop && (
          <Flex align="center">
            <Flex
              zIndex={999999999999999999999999999999}
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
              <Flex flexDir="column" align="center">
                <Flex flexDir="column" align="center">
                  <Text
                    fontSize="1.5rem"
                    color={textStyle.color.secondary}
                    fontFamily="Khand"
                    fontWeight={900}
                    w="100%"
                    textAlign="center"
                  >
                    (62) 99349-9349
                  </Text>
                  <Text
                    fontSize="0.7rem"
                    color={textStyle.color.tertiary}
                    fontFamily="Khand"
                    fontWeight={300}
                    textAlign="center"
                    w="100%"
                  >
                    CENTRAL DE VENDAS
                  </Text>
                </Flex>
                <Flex
                  mt="10px"
                  cursor="pointer"
                  onClick={() =>
                    setIsSelectAppLoginOpened(!isSelectAppLoginOpened)
                  }
                  bg={buttonStyle.bgColor.primary}
                  borderRadius="full"
                  px="20px"
                  py="10px"
                  w="100%"
                  justify="center"
                  align="center"
                >
                  <Text
                    fontSize="1rem"
                    color={textStyle.color.primary}
                    fontFamily="Khand"
                    fontWeight={500}
                  >
                    LIGAMOS PRA VOCÊ
                  </Text>
                </Flex>
                <Flex
                  mt="10px"
                  cursor="pointer"
                  onClick={() =>
                    setIsSelectAppLoginOpened(!isSelectAppLoginOpened)
                  }
                  bg={buttonStyle.bgColor.quinary}
                  borderRadius="full"
                  px="20px"
                  py="10px"
                  w="100%"
                  justify="center"
                  align="center"
                >
                  <Text
                    fontSize="1rem"
                    color={textStyle.color.secondary}
                    fontFamily="Khand"
                    fontWeight={500}
                  >
                    SOU CLIENTE
                  </Text>
                </Flex>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </Flex>
  );
}
