import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  IconButton,
  Box,
  Spacer,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Navbar() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
    setSearchText("");
  };

  return (
    <Flex p="5" direction="row" alignItems="center">
      <Box>
        <Heading fontWeight={"medium"} size="md" color={"white"}>
          Tokopedia Play
        </Heading>
      </Box>
      <Spacer />
      <>
        {!isSearching ? (
          <IconButton
            isRound="true"
            variant="ghost"
            aria-label="Search"
            icon={<SearchIcon />}
            color="white"
            onClick={handleSearchToggle}
            _hover={{
              opacity: 0.7,
              transition: "opacity 0.2s",
            }}
            _active={{ opacity: 0.5, transition: "opacity 0.2s" }}
          />
        ) : (
          <InputGroup width='50%'>
            <Input
              color="white"
              placeholder="Search..."
              value={searchText}
              onChange={handleInputChange}
            />
            <InputRightElement>
              <IconButton
                color="white"
                variant="ghost"
                aria-label="Clear"
                icon={<CloseIcon />}
                onClick={handleSearchToggle}
                _hover={{
                  opacity: 0.7,
                  transition: "opacity 0.2s",
                }}
                _active={{ opacity: 0.5, transition: "opacity 0.2s" }}
              />
            </InputRightElement>
          </InputGroup>
        )}
      </>
    </Flex>
  );
}
