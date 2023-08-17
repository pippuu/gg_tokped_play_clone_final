/* eslint-disable react/jsx-key */
import ReactPlayer from "react-player/es6";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarVideoDetail from "../components/NavbarVideoDetail";
import CommentSection from "../components/CommentSection";
import Product from "../components/Product";

export default function VideoDetail() {
  const [currentVideo, setCurrentVideo] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [products, setProducts] = useState([]);

  const handleSubmitComment = (invalidForm, commentAuthor, commentText) => {
    if (!invalidForm()) {
      const newComment = {
        username: commentAuthor,
        comment: commentText,
        videoID: id,
      };
      fetch("https://gg-tokped-play-clone-final-api.vercel.app/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      })
        .then((response) => {
          if (!response.ok) {
            console.log("Network response was not ok");
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
      setComments((prev) => [...prev, newComment]);
    }
  };

  useEffect(() => {
    fetch(`https://gg-tokped-play-clone-final-api.vercel.app/api/video/${id}`)
      .then((response) => response.json())
      .then((body) => {
        setCurrentVideo(body.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    fetch(`https://gg-tokped-play-clone-final-api.vercel.app/api/comment/video/${id}`)
      .then((response) => response.json())
      .then((body) => {
        const tempComments = [];
        body.data.map((comment) =>
          tempComments.push({
            username: comment.username,
            comment: comment.comment,
            videoID: comment.videoID,
          })
        );
        setComments(tempComments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    fetch(`https://gg-tokped-play-clone-final-api.vercel.app/api/product/video/${id}`)
      .then((response) => response.json())
      .then((body) => {
        setProducts(body.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <NavbarVideoDetail handleBackToHome={handleBackToHome} onOpen={onOpen} />
      <Flex
        direction="row"
        gap="4"
        height="100%"
        p="5"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          h="100%"
          overflowY="auto"
          p="5"
          direction="column"
          gap="4"
          justifyContent="center"
          maxH="600px"
        >
          {products.map((product) => (
            <Product
              id={product._id}
              title={product.title}
              price={product.price}
              url={product.url}
              urlThumbnail={product.urlThumbnail}
            />
          ))}
        </Flex>
        <ReactPlayer
          width="800px"
          height="450px"
          url={currentVideo.url}
          controls={true}
        />
      </Flex>

      <CommentSection
        isOpen={isOpen}
        onClose={onClose}
        comments={comments}
        handleSubmitComment={handleSubmitComment}
      />
    </>
  );
}
