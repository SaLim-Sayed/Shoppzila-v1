"use client"
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import   Logo   from "/public/Logo.png";
 
import { navLinks } from "@/constants/navLinks";
import Image from "next/image";

export default function NavBar() {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (id:number) => {
    setSelectedButton(id);
  };

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarBrand>
        <Image src={Logo} alt="" className="p-2" width={70} height={70} />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className=" flex justify-center">
          {navLinks.map((item) => (
            <Button
              key={item.id}
              as={Link}
              className={`bg-neutral-50/900  hover:bg-orange-300 font-light mx-2 ${
                selectedButton === item.id ? "bg-warning" : ""
              }`}
              onClick={() => handleButtonClick(item.id)}
              href={item.url}
            >
              {item.title}
            </Button>
          ))}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            data-pressed="warning"
            as={Link}
            color="warning"
            href="#"
            variant="flat"
          >
            Cart (0)
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navLinks.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              className="w-full"
              color={item.id === 1 ? "warning" : "foreground"}
              href="#"
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
