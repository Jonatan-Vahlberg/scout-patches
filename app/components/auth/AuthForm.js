import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import Image from "next/image";

const AuthCard = ({ children }) => {
  return (
    <div className="p-4 flex flex-col">
      <div className="text-center mb-4 flex flex-1 justify-center">
        <Image
          src="/images/scouts.png"
          width={150}
          height={150}
          className="w-1/2 max-w-[150px] mb-8"
        />
      </div>
      <form className="flex flex-col items-center justify-center">
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
          auto
        >
          Logga in
        </Button>
      </form>
    </div>
  );
};

export default AuthCard;
