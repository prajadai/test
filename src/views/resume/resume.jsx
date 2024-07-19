import { React, useEffect } from "react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import { Box, useStyleConfig, Flex, Button } from "@chakra-ui/react";

export default function Resume() {
  const styles = useStyleConfig("Card");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  const handleDownload = () => {
    alert("Nothing to download...")
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex justifyContent="center" alignItems="center">
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Button
            onClick={handleDownload}
            variant="darkBrand"
            fontSize="sm"
            fontFamily="DM Sans"
          >
            Download Resume
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
