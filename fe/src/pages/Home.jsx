import NavbarHome from "../components/NavbarHome";
import { Flex } from "@chakra-ui/react";
import TagButton from "../components/TagButton";
import { useState } from "react";
import ListVideo from "../components/ListVideo";
import { useEffect } from "react";

function Homepage() {
  const [videos, setVideos] = useState([]);
  const [uniqueVideoTags, setUniqueVideoTags] = useState([]);
  const [currentVideoTags, setCurrentVideoTags] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    fetch("tourmaline-bienenstitch-46a1d5.netlify.app/api/video/thumbnail")
      .then((response) => response.json())
      .then((body) => {
        setVideos(body.data);
        const listOfTags = getListTags(body.data);
        setUniqueVideoTags(listOfTags);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filteredVideos = getVideos();
    setFilteredVideos(filteredVideos);
  }, [currentVideoTags, videos]);

  const getListTags = (videos) => {
    const tags = Array.from(
      new Set(videos.flatMap((video) => video.tag))
    ).sort();
    const listOfTags = [
      {
        name: "Explore",
        primary: true,
      },
    ];
    setCurrentVideoTags(listOfTags[0].name);
    tags.forEach((tag) => {
      listOfTags.push({
        name: tag,
        primary: false,
      });
    });
    return listOfTags;
  };

  const handleSetPrimaryTag = (tagName) => {
    setCurrentVideoTags(tagName);
    const updatedTags = uniqueVideoTags.map((tag) => ({
      ...tag,
      primary: tag.name === tagName,
    }));
    setUniqueVideoTags(updatedTags);
  };

  const getVideos = () => {
    if (currentVideoTags === "Explore") {
      return videos;
    }
    return videos.filter((video) => {
      return video.tag === currentVideoTags;
    });
  };

  return (
    <div className="Homepage">
      <NavbarHome />
      <Flex p="5" direction="row" gap="3">
        {uniqueVideoTags.map((tag, index) => (
          <TagButton
            key={index}
            name={tag.name}
            primary={tag.primary}
            handleSetPrimaryTag={handleSetPrimaryTag}
          />
        ))}
      </Flex>
      <ListVideo videos={filteredVideos} />
    </div>
  );
}
export default Homepage;
