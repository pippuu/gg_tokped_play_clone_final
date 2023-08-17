/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";

export default function Product({ id, title, price, url }) {
  const innerBoxStyles = {
    display: "flex",
    flexDirection: "column",
    spacing: "5",
    padding: "5",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontSize: "20px",
  };

  return (
    <Box
      key={id}
      onClick={() => {
        window.open(url);
      }}
      rounded="2xl"
      _hover={{
        opacity: 0.7,
        transition: "opacity 0.2s",
      }}
      _active={{ opacity: 0.5, transition: "opacity 0.2s" }}
      fontWeight="medium"
      color="blackAlpha.900"
      style={{
        backgroundColor: "white",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Box
        sx={innerBoxStyles}
        key={id}
        style={{
          color: "white",
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          cursor: "pointer",
        }}
      ></Box>
      <Box p="2">
        <p>{title}</p>
        <p>Rp {price}</p>
      </Box>
    </Box>
  );
}
