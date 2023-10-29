"use client";

import { useUser } from "@/context/UserContext";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

const LoginForm = ({
  onClose = () => {},
}) => {

  const user = useUser();


  const login = (e) => {
    e.preventDefault();
    
    
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    
    
    user.login(email, password, () => {
        onClose();
    })
  }

  return (
    <div className="p-4 flex flex-col">
      <div className="text-center mb-4 flex flex-1 justify-center">
        <Image
          src="/images/scouts.png"
          width={150}
          height={150}
          className="w-1/2 max-w-[150px] mb-8"
          alt="Scouternas logga"
        />
      </div>
      <form 
        onSubmit={login}
      className="flex flex-col items-center justify-center">
        <Input
          type="email"
          placeholder="email@wosm.com"
          label="Email"
          className="w-full mb-4"
        />
        <Input
          type="password"
          placeholder="********"
          label="Password"
          className="w-full"
        />
        <Button
          className="w-full mt-4 bg-sweden hover:bg-sweden-dark"
          color="primary"
          type="submit"
          auto
        >
          Logga in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
