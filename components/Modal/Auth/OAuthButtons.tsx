import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

function OAuthButtons() {
  return (
    <Flex direction="column" width="100%" gap={2} mb={4}>
      <Button variant="oauth">
        <Image
          src="/images/googlelogo.png"
          height="20px"
          alt="googleLogo"
          mr={2}
        />
        Continue with Google
      </Button>
      <Button variant="oauth">Some other Provider</Button>
    </Flex>
  );
}

export default OAuthButtons;
