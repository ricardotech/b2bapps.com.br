import Header from "@/components/Header";
import SelectAppLogin from "@/components/SelectAppLogin";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Index() {
  const [selectAppOpened, setSelectAppOpened] = React.useState(false);

  return (
    <Flex minH="100vh">
      <Header
        isSelectAppLoginOpened={selectAppOpened}
        setIsSelectAppLoginOpened={setSelectAppOpened}
      />
      <SelectAppLogin
        isSelectAppLoginOpened={selectAppOpened}
        setIsSelectAppLoginOpened={setSelectAppOpened}
      />
    </Flex>
  );
}
