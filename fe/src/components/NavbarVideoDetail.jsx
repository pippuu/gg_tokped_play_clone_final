/* eslint-disable react/prop-types */
import { IconButton, Button } from "@chakra-ui/button";
import { Flex, Spacer } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function NavbarVideoDetail({ handleBackToHome, onOpen }) {
  return (
    <Flex p="5" direction="row" justifyContent="end" height>
      <IconButton
        color="white"
        variant="ghost"
        aria-label="Clear"
        icon={<ArrowBackIcon />}
        onClick={handleBackToHome}
        _hover={{
          opacity: 0.7,
          transition: "opacity 0.2s",
        }}
        _active={{ opacity: 0.5, transition: "opacity 0.2s" }}
      />
      <Spacer></Spacer>
      <Button
        color="white"
        variant="outline"
        onClick={onOpen}
        _hover={{
          opacity: 0.7,
          transition: "opacity 0.2s",
        }}
        _active={{ opacity: 0.5, transition: "opacity 0.2s" }}
      >
        Show Comment
      </Button>
    </Flex>
  );
}
