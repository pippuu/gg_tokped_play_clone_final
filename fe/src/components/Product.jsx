/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";

export default function Product({ id, title, price, url, urlThumbnail }) {
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
          width: "150px",
          height: "100px",
          backgroundColor: "white",
          backgroundImage: `url(${urlThumbnail})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          cursor: "pointer",
        }}
      ></Box>
      <Box height="100%" width="100%" p="2">
        <p>{title}</p>
        <p>Rp {price}</p>
      </Box>
    </Box>
  );
}
