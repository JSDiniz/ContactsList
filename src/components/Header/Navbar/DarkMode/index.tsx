import { Box, Icon, useColorMode } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { BiSun } from "react-icons/bi";

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      cursor="pointer"
      onClick={toggleColorMode}
    >
      {colorMode == "dark" ? (
        <Icon as={FaMoon} fontSize={"xl"} />
      ) : (
        <Icon as={BiSun} fontSize={"xl"} color={"brand3"} />
      )}
    </Box>
  );
};

export default DarkMode;
