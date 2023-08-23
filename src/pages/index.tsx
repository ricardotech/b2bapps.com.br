import Header from "@/components/Header";
import {
  Flex,
  Icon,
  Img,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import {
  IoIosApps,
  IoIosAppstore,
  IoIosArrowDroprightCircle,
  IoIosAt,
  IoIosCard,
  IoIosDesktop,
  IoIosDocument,
  IoIosPeople,
  IoIosPhoneLandscape,
  IoIosPhonePortrait,
  IoIosPricetag,
  IoIosPricetags,
  IoIosSettings,
  IoIosStats,
} from "react-icons/io";

export default function Index() {
  const [selectAppOpened, setSelectAppOpened] = React.useState(false);

  const isDesktop = useBreakpointValue({
    md: true,
    lg: true,
    xl: true,
  });

  const isDesktopWide = useBreakpointValue({
    xl: true,
  });

  function JumbotronOne() {
    return (
      <Flex w="100%">
        <Flex
          flexDir="column"
          px="20px"
          w="100%"
          align="center"
          justify="space-between"
          maxW="1400px"
          mx="auto"
        >
          <Flex
            h={isDesktop ? "calc(100vh - 180px)" : "100%"}
            align={isDesktop ? "center" : "flex-start"}
            w="100%"
            justify="space-between"
          >
            <Flex flexDir="column">
              {!isDesktop && <Img mb="40px" w="100%" src="/software.png" />}
              <Text
                color="#1F1F1F"
                fontFamily="Khand"
                fontSize={isDesktop ? "3rem" : "2.3rem"}
                w="100%"
                fontWeight={900}
                textAlign={isDesktop ? "left" : "center"}
                minW="250px"
              >
                Aplicativos para sua empresa
              </Text>
              <Text
                color="#000"
                fontFamily="Khand"
                fontSize={isDesktop ? "1.5rem" : "1.3rem"}
                w="100%"
                fontWeight={300}
                textAlign={isDesktop ? "left" : "center"}
                maxW={isDesktop ? "60%" : "100%"}
                minW="350px"
              >
                Nós ajudamos diversas empresas a aumentarem seu faturamento e
                digitalizarem suas tarefas
              </Text>
              <Flex align="center" mt="20px">
                <Flex
                  cursor="pointer"
                  bg="#1F1F1F"
                  borderRadius="full"
                  px="20px"
                  py="10px"
                  w={isDesktop ? "fit-content" : "100%"}
                  justify="center"
                >
                  <Text
                    fontSize="1.2rem"
                    color="#FFF"
                    fontFamily="Khand"
                    fontWeight={400}
                  >
                    LIGAMOS PRA VOCÊ
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            {isDesktop && <Img w="50%" src="/software.png" />}
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function Item({
    icon,
    name,
    bgColor,
    color,
  }: {
    icon: React.ReactNode;
    name: string;
    bgColor: string;
    color: string;
  }) {
    return (
      <Flex
        w="100%"
        border="1px solid #F0F0F0"
        borderRadius={8}
        p="20px"
        py="40px"
        flexDir="column"
      >
        {icon && icon}
        <Text
          mt="20px"
          color="#1F1F1F"
          fontFamily="Khand"
          fontSize={isDesktop ? "1.6rem" : "1.3rem"}
          w="100%"
          fontWeight={400}
          textAlign="center"
        >
          {name}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex flexDir="column" minH="100vh" h="100%">
      <Header
        isSelectAppLoginOpened={selectAppOpened}
        setIsSelectAppLoginOpened={setSelectAppOpened}
      />
      <Flex h="100px" />
      <JumbotronOne />
      <Flex flexDir="column" mt={isDesktop ? "80px" : "100px"}>
        <Flex
          flexDir="column"
          px="20px"
          w="100%"
          align="center"
          justify="space-between"
          maxW="1400px"
          mx="auto"
        >
          <Text
            color="#1F1F1F"
            fontFamily="Khand"
            fontSize={isDesktop ? "3rem" : "2rem"}
            w="100%"
            fontWeight={900}
            textAlign="center"
            minW="250px"
          >
            Funcionalidades de nossos sistemas
          </Text>
          <SimpleGrid
            mt="20px"
            pb="40px"
            columnGap="20px"
            rowGap="20px"
            columns={[1, 2, 3]}
            w="100%"
          >
            <Item
              bgColor="transparent"
              color="purple"
              icon={
                <Flex
                  bg="rgba(255, 155, 0, 0.2)"
                  borderRadius={8}
                  p="10px"
                  mx="auto"
                  my="auto"
                >
                  <Icon
                    mx="auto"
                    as={IoIosPeople}
                    color="rgba(255, 155, 0, 1)"
                    fontSize="2rem"
                  />
                </Flex>
              }
              name="Controle de clientes"
            />
            <Item
              bgColor="transparent"
              color="purple"
              icon={
                <Flex
                  bg="rgba(55, 155, 0, 0.2)"
                  borderRadius={8}
                  p="10px"
                  mx="auto"
                  my="auto"
                >
                  <Icon
                    mx="auto"
                    as={IoIosPricetags}
                    color="rgba(55, 155, 0, 1)"
                    fontSize="2rem"
                  />
                </Flex>
              }
              name="Controle de produtos"
            />
            <Item
              bgColor="transparent"
              color="purple"
              icon={
                <Flex
                  bg="rgba(155, 75, 20, 0.2)"
                  borderRadius={8}
                  p="10px"
                  mx="auto"
                  my="auto"
                >
                  <Icon
                    mx="auto"
                    as={IoIosSettings}
                    color="rgba(155, 75, 20, 1)"
                    fontSize="2rem"
                  />
                </Flex>
              }
              name="Controle de funcionários"
            />
            <Item
              bgColor="transparent"
              color="purple"
              icon={
                <Flex
                  bg="rgba(85, 75, 150, 0.2)"
                  borderRadius={8}
                  p="10px"
                  mx="auto"
                  my="auto"
                >
                  <Icon
                    mx="auto"
                    as={IoIosApps}
                    color="rgba(85, 75, 150, 1)"
                    fontSize="2rem"
                  />
                </Flex>
              }
              name="Digitalização de processos"
            />
            <Item
              bgColor="transparent"
              color="purple"
              icon={
                <Flex
                  bg="rgba(5, 175, 150, 0.2)"
                  borderRadius={8}
                  p="10px"
                  mx="auto"
                  my="auto"
                >
                  <Icon
                    mx="auto"
                    as={IoIosAppstore}
                    color="rgba(5, 175, 150, 1)"
                    fontSize="2rem"
                  />
                </Flex>
              }
              name="Aplicativos iOS e Android"
            />

            <Item
              bgColor="transparent"
              color="purple"
              icon={
                <Flex
                  bg="rgba(5, 25, 150, 0.2)"
                  borderRadius={8}
                  p="10px"
                  mx="auto"
                  my="auto"
                >
                  <Icon
                    mx="auto"
                    as={IoIosDesktop}
                    color="rgba(5, 25, 150, 1)"
                    fontSize="2rem"
                  />
                </Flex>
              }
              name="Aplicativos e Páginas Web"
            />
            <Item
              bgColor="transparent"
              color="purple"
              icon={
                <Flex
                  bg="rgba(55, 125, 250, 0.2)"
                  borderRadius={8}
                  p="10px"
                  mx="auto"
                  my="auto"
                >
                  <Icon
                    mx="auto"
                    as={IoIosDocument}
                    color="rgba(55, 125, 250, 1)"
                    fontSize="2rem"
                  />
                </Flex>
              }
              name="Bancos de dados escaláveis"
            />
            <Item
              bgColor="transparent"
              color="purple"
              icon={
                <Flex
                  bg="rgba(100, 200, 250, 0.2)"
                  borderRadius={8}
                  p="10px"
                  mx="auto"
                  my="auto"
                >
                  <Icon
                    mx="auto"
                    as={IoIosStats}
                    color="rgba(100, 200, 250, 1)"
                    fontSize="2rem"
                  />
                </Flex>
              }
              name="Análises de relatórios"
            />
            <Item
              bgColor="transparent"
              color="purple"
              icon={
                <Flex
                  bg="rgba(70, 170, 7, 0.2)"
                  borderRadius={8}
                  p="10px"
                  mx="auto"
                  my="auto"
                >
                  <Icon
                    mx="auto"
                    as={IoIosAt}
                    color="rgba(70, 170, 7, 1)"
                    fontSize="2rem"
                  />
                </Flex>
              }
              name="Soluções personalizadas"
            />
          </SimpleGrid>
        </Flex>
      </Flex>
      <Flex h="40px" />
    </Flex>
  );
}
