/* eslint-disable react/prop-types */
import {
  Drawer,
  Textarea,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Input,
  Box,
  FormControl,
  Flex,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useState, useRef, useEffect } from "react";

export default function CommentSection({ isOpen, onClose, comments, handleSubmitComment }) {
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentText, setCommentText] = useState("");
  const commentHistoryRef = useRef();

  useEffect(() => {
    if (commentHistoryRef.current) {
      commentHistoryRef.current.scrollTop =
        commentHistoryRef.current.scrollHeight;
    }
  }, [comments]);
  

  const handleChangeCommentAuthor = (e) => {
    setCommentAuthor(e.target.value);
  };

  const handleChangeCommentText = (e) => {
    setCommentText(e.target.value);
  };

  const invalidForm = () => {
    return commentAuthor == "" || commentText == "";
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="xs">
      <DrawerOverlay />
      <DrawerContent bg="rgb(36,36,36)" color="white">
        <DrawerCloseButton />
        <DrawerHeader>Comment</DrawerHeader>
        <DrawerBody display="flex" flexDirection="column">
          <Flex
            ref={commentHistoryRef}
            direction="column"
            mt="4"
            mb="4"
            h="100%"
            overflowY="auto"
          >
            {comments.map((comment, index) => (
              <Box
                key={index}
                p="2"
                bg="blue.500"
                color="white"
                borderRadius="lg"
                maxWidth="70%"
                alignSelf="flex-start"
                mb="2"
              >
                <Flex flexDirection="column">
                  <p className="font-medium text-base">{comment.username}</p>
                  <p>{comment.comment}</p>
                </Flex>
              </Box>
            ))}
          </Flex>
          <FormControl
            isInvalid={invalidForm}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Input
              mb="2"
              placeholder="Name"
              onChange={handleChangeCommentAuthor}
            />
            {commentAuthor === "" && (
              <FormErrorMessage mt="0" mb="2">
                Name is required.
              </FormErrorMessage>
            )}
            <Textarea
              mt="0"
              mb="2"
              placeholder="Comment"
              onChange={handleChangeCommentText}
            />
            {commentText === "" && (
              <FormErrorMessage mt="0" mb="2">
                Comment is required.
              </FormErrorMessage>
            )}

            <Button colorScheme="blue" onClick={() => (handleSubmitComment(invalidForm, commentAuthor, commentText))}>
              Add a comment
            </Button>
          </FormControl>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
