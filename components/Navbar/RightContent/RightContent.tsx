import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";

function RightContent() {
  return (
    <>
      <Flex justify="center" align="center" gap={2}>
        <AuthButtons />
      </Flex>
    </>
  );
}

export default RightContent;
