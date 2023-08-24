import Header from "@/components/Header";
import {
  Flex,
  Icon,
  Img,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  IoIosApps,
  IoIosAppstore,
  IoIosArrowDown,
  IoIosArrowDroprightCircle,
  IoIosArrowForward,
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

  function JumbotronA() {
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
            py={isDesktop ? "180px" : 0}
            pb={isDesktop ? 0 : "100px"}
            align={isDesktop ? "center" : "flex-start"}
            w="100%"
            justify="space-between"
          >
            <Flex flexDir="column">
              {!isDesktop && (
                <Img mt="45px" mb="40px" w="100%" src="/software.png" />
              )}
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
                  bg="#000"
                  borderRadius="full"
                  px="20px"
                  py="10px"
                  w="fit-content"
                  mx={isDesktop ? 0 : "auto"}
                  justify="space-between"
                >
                  <Text
                    fontSize="1.2rem"
                    color="#FFF"
                    fontFamily="Khand"
                    fontWeight={400}
                  >
                    Veja nossas soluções
                  </Text>
                  <Icon as={IoIosArrowDown} color="#FFF" mt="5px" ml="20px" />
                </Flex>
              </Flex>
            </Flex>
            {isDesktop && <Img w="50%" src="/software.png" />}
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function JumbotronX() {
    return (
      <Flex flexDir="column" mt={isDesktop ? "140px" : "-40px"}>
        <Flex
          mt="80px"
          pt="80px"
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
            Funcionalidades de nossos aplicativos
          </Text>
          <SimpleGrid
            mt="60px"
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
    );
  }

  function JumbotronY() {
    const [items, setItems] = useState([
      {
        id: 1,
        title: "Painel de controle",
        subtitle:
          "Nesse aplicativo você consegue controlar as vendas, os produtos, os clientes e os funcionários da sua empresa",
        cta: "Ver mais",
        onClick: () => {
          alert("painel");
        },
      },
      {
        id: 2,
        title: "Aplicativo de vendas (iOS e Android)",
        subtitle:
          "Nesse aplicativo para dispositivos mobile os seus clientes podem acessar os seus produtos, e comprar online",
        cta: "Ver mais",
        onClick: () => {
          alert("vendas");
        },
      },
      {
        id: 3,
        title: "Aplicativo de vendas (Web)",
        subtitle:
          "Nesse aplicativo web, nós garantimos que os seus clientes podem acessar os seus produtos, seja de onde for e de qualquer dispositivo",
        cta: "Ver mais",
        onClick: () => {
          alert("vendas");
        },
      },
    ]);

    const [activeItem, setActiveItem] = useState("2");

    return (
      <Flex flexDir="column" mt={isDesktop ? "0px" : "-40px"}>
        <Flex
          mt="80px"
          borderTop="2px solid #F0F0F0"
          pt="80px"
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
            Nosso objetivo
          </Text>
          <Text
            color="#1F1F1F"
            fontFamily="Khand"
            fontSize={isDesktop ? "1.5rem" : "1rem"}
            w="100%"
            fontWeight={400}
            textAlign="center"
            minW="250px"
          >
            É permitir que você tenha controle da sua empresa, de onde estiver
          </Text>
          <Flex
            bg="#F0F0F0"
            p="10px"
            borderRadius={8}
            w="70%"
            h="60px"
            mt="20px"
            justify="space-between"
            align="center"
          >
            {items.map((item, i) => {
              return (
                <Flex
                  onClick={() => setActiveItem(String(item.id))}
                  cursor="pointer"
                  bg={String(item.id) === activeItem ? "#FFF" : "transparent"}
                  w="33.3%"
                  px="10px"
                  h="100%"
                  justify="center"
                  borderRadius={8}
                  align="center"
                >
                  <Text
                    borderTopLeftRadius={8}
                    borderBottomLeftRadius={8}
                    color="#1F1F1F"
                    fontFamily="Khand"
                    fontSize={isDesktop ? "1.3rem" : "0.9rem"}
                    w="100%"
                    textAlign="center"
                    minW="250px"
                    fontWeight={String(item.id) === activeItem ? 600 : 400}
                  >
                    {item.title}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function Jumbotron() {
    const [windowSize, setWindowSize] = useState({
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const [slides, setSlides] = useState([
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/5935744/pexels-photo-5935744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Pague agora com cartão de crédito",
        cta: "Ver leilões",
        description:
          "A partir do dia 20 de agosto, você poderá pagar seus lances usando cartão de crédito. Pode parcelar em até 18x.",
        onClick: () => {
          alert("clicou no jumbo id 1");
        },
      },
      {
        id: 2,
        image:
          "https://images.pexels.com/photos/13643248/pexels-photo-13643248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Leilão de carros - Itaú Unibanco",
        description:
          "Leilão de carros do Itaú Unibanco. São mais de 50 carros disponíveis para arremate.",
        cta: "Ver leilão",
        onClick: () => {
          alert("clicou no jumbo id 2");
        },
      },
    ]);
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        if (activeSlide === slides.length) {
          setActiveSlide(1);
        } else {
          setActiveSlide(activeSlide + 1);
        }
      }, 5000);

      return () => clearInterval(interval);
    }, [activeSlide]);

    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const screenWidth = windowSize.width;
    const minSwipeDistance = screenWidth * 0.2; // 20% of the screen width

    const handleSwipe = () => {
      const deltaX = touchEndX - touchStartX;

      if (deltaX > minSwipeDistance) {
        // Swipe to the left
        setActiveSlide((prevSlide) =>
          prevSlide === 1 ? slides.length : prevSlide - 1
        );
      } else if (deltaX < -minSwipeDistance) {
        // Swipe to the right
        setActiveSlide((prevSlide) =>
          prevSlide === slides.length ? 1 : prevSlide + 1
        );
      }
    };

    useEffect(() => {
      if (touchStartX !== 0 && touchEndX !== 0) {
        handleSwipe();
        setTouchStartX(0);
        setTouchEndX(0);
      }
    }, [touchStartX, touchEndX]);

    return (
      <Flex w="100%" mt={isDesktop ? "10px" : "20px"}>
        <Flex flexDir="column" maxW="1400px" mx="auto" w="100%" px="20px">
          <Flex
            flexDir="column"
            align="center"
            justify="space-between"
            borderRadius={10}
            w="100%"
            minH={!isDesktop ? "auto" : "400px"}
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => setTouchEndX(e.changedTouches[0].clientX)}
          >
            <Flex flexDir="column" w="100%" justify="center" align="center">
              <Flex
                position="absolute"
                flexDir="column"
                maxW="1400px"
                mx="auto"
                w="100%"
                justify="center"
                align="center"
                px="20px"
              >
                <Img
                  objectFit="cover"
                  borderRadius={10}
                  src={
                    slides.filter((slide) => slide.id !== activeSlide)[0].image
                  }
                  h={isDesktop ? "600px" : "300px"}
                  w="100%"
                />
              </Flex>
              <Flex
                zIndex={2}
                borderRadius={10}
                bg="rgba(0, 0, 0, 0.5)"
                h={isDesktop ? "600px" : "300px"}
                w="100%"
                flexDir="column"
                px="20px"
              >
                <Text fontFamily="Khand" color="#FFF" fontSize="2rem" mt="20px">
                  Text overed
                </Text>
              </Flex>
            </Flex>
            <Flex mt="20px" w="100%" justify="center" align="center">
              {slides.map((slide, i) => {
                return (
                  <Flex
                    key={i}
                    cursor="pointer"
                    onClick={() => setActiveSlide(slide.id)}
                    bg={activeSlide === slide.id ? "#b0d243" : "#EEE"}
                    h="10px"
                    w={activeSlide === slide.id ? "25px" : "10px"}
                    borderRadius="10px"
                  />
                );
              })}
            </Flex>
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
      <JumbotronA />
      <JumbotronX />
      <JumbotronY />
      <Flex h="40px" />
    </Flex>
  );
}
