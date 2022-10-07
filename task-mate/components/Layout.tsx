import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="page">
      <Link href="/">
        <a className="logo">
          <Image src={"/logo.png"} alt="logo" width={150} height={150} />
        </a>
      </Link>

      {children}
    </div>
  );
};

export default Layout;
