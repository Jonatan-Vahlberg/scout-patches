import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import AuthModal from "../auth/AuthModal";
const Header = () => {
  return (
    <header className="bg-sweden-dark w-full p-4 flex fixed top-0 z-[2] items-center justify-between">
      <Link href="/">
        <Image
          src="/images/scouts_reverse.png"
          width={50}
          height={50}
          className="object-contain"
          alt="Scouternas logga"
        />
      </Link>

      <AuthModal />
    </header>
  );
};

export default Header;
