import { Button } from "@chakra-ui/button";

// eslint-disable-next-line react/prop-types
export default function TagButton({ name, primary, handleSetPrimaryTag }) {
  return (
    <>
      <Button
        borderColor={primary ? "green.500" : "white"}
        color={primary ? "green.500" : "white"}
        variant="outline"
        value={name}
        _hover={{
          opacity: 0.7,
          transition: "opacity 0.2s",
        }}
        _active={{ opacity: 0.5, transition: "opacity 0.2s" }}
        onClick={() => {handleSetPrimaryTag(name)}}
      >
        {name}
      </Button>
    </>
  );
}
