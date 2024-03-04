import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="w-full z-10">
    <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Image
        src="/Ethereum-icon-purple.png"
        alt="logo"
        width={95}
        height={12}
        className="object-contain"
      />
    </nav>
  </header>
);

export default NavBar;
