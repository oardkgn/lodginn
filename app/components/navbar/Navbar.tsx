import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Auth from "./Auth";
import Search from "./Search";

function Navbar() {
  return (
    <div className="border-b-[1px] border-bright-green">
      <Container>
        <div className=" flex items-center justify-between gap-2">
        <Logo />
        <Search />
        <Auth />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
