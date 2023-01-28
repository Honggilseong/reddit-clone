import { authModalState } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import React, { useEffect } from "react";
import AuthModal from "@/components/Modal/Auth/AuthModal";

function AuthButtons() {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "100px" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log In
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "100px" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign Up
      </Button>
      <AuthModal />
    </>
  );
}

export default AuthButtons;
