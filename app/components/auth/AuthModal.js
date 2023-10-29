"use client";

import { FaUser, FaUserCircle, FaUserLock } from "react-icons/fa";

import { useState } from "react";
import LoginForm from "./LoginForm";
import { Button, Card, useDisclosure } from "@nextui-org/react";
import { useUser } from "@/context/UserContext";
import Modal from "../globals/Modal";
import Link from "next/link";

const AuthModal = () => {

    const user = useUser();

  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleShow = () => {
    if (isOpen && !isLogin) {
      setIsLogin(true);
    }
    setIsOpen(!isOpen);
  };

  if(user.user) {
        return (
            <Link href="/profile">
                <FaUser className="text-white" size={26} />
            </Link>
        )
    }
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="bg-transparent px-unit-0" isIconOnly>
        <FaUserLock className="text-white" size={32} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={toggleShow}>
        {(onClose) => (
          <Card>
            <LoginForm onClose={onClose} />
          </Card>
        )}
      </Modal>
    </>
  );
};

export default AuthModal;
