"use client";
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
  Badge,
  Avatar,
} from "@nextui-org/react";
import Logo from "/public/Logo.png";

import { navLinks } from "@/constants/navLinks";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IProduct } from "@/interfaces";
import { ShoppingBasket } from "lucide-react";
import ModalPage from "./ModalPage";

export default function NavBar() {
  const cart: IProduct[] = useSelector(
    (state: RootState) => state.cart.cartItem
  );

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (id: number) => {
    setSelectedButton(id);
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Button as={Link} href="/" variant="light">
            <Image
              src={Logo}
              alt=""
              className="  p-2"
              width={70}
              height={70}
              priority
            />
          </Button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex  lg:gap-32  " justify="center">
        <NavbarBrand>
          <Button as={Link} href="/" variant="light">
            {" "}
            <Image
              src={Logo}
              alt=""
              className="  p-2"
              width={70}
              height={70}
              priority
            />
          </Button>
        </NavbarBrand>

        <NavbarItem className="mx-auto">
          {navLinks.map((item) => (
            <Button
              key={item.id}
              as={Link}
              variant="light"
              className={` hover:bg-orange-300 font-light mx-2 ${
                selectedButton === item.id ? "text-warning" : ""
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
          <ModalPage />
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
