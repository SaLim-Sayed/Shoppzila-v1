"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Button,
  Badge,
} from "@nextui-org/react";
import Link from "next/link";
import logoImage from "../../public/LOGO.png";

import { navLinks } from "@/constants";
import CartSlider from "./Slider-Cart";
import { IProduct } from "@/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  const cart: IProduct[] = useSelector(
    (state: RootState) => state.cart.cartItem
  );

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (id: number) => {
    setSelectedButton(id);
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false);

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image
              src={logoImage}
              alt=""
              className="p-2"
              width={70}
              height={70}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex   " justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image
              src={logoImage}
              alt=""
              className="  p-2"
              width={70}
              height={70}
            />
          </Link>
        </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex   " justify="center">

        <NavbarItem >
          {navLinks.map((item) => (
            <Button
              as={Link}
              variant="light"
              key={item.id}
              /* className={` hover:bg-orange-300 font-light mx-2 ${
                selectedButton === item.id ? "text-warning" : ""
              }`} */
              style={
                selectedButton === item.id
                  ? { color: "orange" }
                  : { color: "black" }
              }
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
            variant="light"
            onClick={() => setCartSliderIsOpen((open) => !open)}
          >
            <Badge
              content={cart.length}
              color="warning"
              className="mt-2"
              shape="circle"
            >
              <ShoppingCart fill="#A2745C" className=" mt-3 text-[#A2745C]" />
            </Badge>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navLinks.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              passHref
              className="w-full"
              color={selectedButton === item.id ? "warning" : "foreground"}
              href={item.url}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>{" "}
      <CartSlider
        open={cartSliderIsOpen}
        setCartSliderIsOpen={setCartSliderIsOpen}
        cart={cart}
      />
    </Navbar>
  );
}
