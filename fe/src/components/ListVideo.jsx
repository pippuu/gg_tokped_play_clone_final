/* eslint-disable react/prop-types */
import { SimpleGrid, Box, Badge } from "@chakra-ui/react";

export default function ListVideo({ videos }) {
  const innerBoxStyles = {
    rounded: "2xl",
    display: "flex",
    flexDirection: "column",
    spacing: "5",
    padding: "5",
    alignItems: "start",
    justifyContent: "end",
    color: "white",
    textShadow: "0 0 20px black",
    fontSize: "20px",
  };

  const redirectToVideoDetail = (id) => {
    window.location.href = `/video/${id}`;
  };

  return (
    <SimpleGrid
      justifyContent="center"
      p="5"
      columns={{ sm: 1, md: 3, "2xl": 6 }}
      spacing={5}
    >
      {videos.map((video) => (
        <Box
          sx={innerBoxStyles}
          height="400px"
          key={video._id}
          onClick={() => redirectToVideoDetail(video._id)}
          style={{
            backgroundImage: `url(${video.urlThumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
          }}
          _hover={{
            opacity: 0.7,
            transition: "opacity 0.2s",
          }}
          _active={{ opacity: 0.5, transition: "opacity 0.2s" }}
        >
          {((video.tag == "Live") || (video.tag == "Promo")) && (
              <Badge
                fontSize="15px"
                variant="solid"
                colorScheme={video.tag == "Live" ? "red" : "green"}
              >
                {video.tag}
              </Badge>
            )}
          <p>{video.title}</p>
          <p>{video.owner}</p>
        </Box>
      ))}
    </SimpleGrid>
  );
}
