import Link from "next/link";
import React from "react";
import Search from "./Search";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" bg-stone-300 h-20 p-5 sticky shadow-md">
      <div className="flex flex-row  justify-between items-center max-w-4xl mx-auto">
        <Link href="/">
          <h1>WikiRocket</h1>
        </Link>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
