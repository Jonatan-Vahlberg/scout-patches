"use client";

import { FaUserCircle } from "react-icons/fa";

import { useState } from "react";
import AuthCard from "./AuthForm";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

const AuthModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLogin, setIsLogin] = useState(true);

  const toggleShow = () => {
    setShow(!show);
    setIsLogin(true);
  };
  console.log("isOpen: ", isOpen);
  return (
    <>
      <Button onClick={onOpen} className="">
        <FaUserCircle className="text-gray-500" size={24} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
             <AuthCard />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
