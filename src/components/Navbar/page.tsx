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
} from "@nextui-org/react";
import { Logo } from "./Logo";
import { color } from "framer-motion";
import { navLinks } from "@/constants/navLinks";
import Image from "next/image";

export default function NavBar() {
  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarBrand>
        <Image src="/Logo.png" alt="" className="p-2" width={70} height={70} />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className=" flex justify-center">
          {navLinks.map((item) => (
            <Button
              data-pressed="warinig"
              key={item.id}
              as={Link}
              className=" hover:bg-orange-300 bg-neutral-50 font-light mx-2"
              color={item.id === 1 ? "warning" : "default"}
              href="#"
            >
              {item.title}
            </Button>
          ))}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            data-pressed="warinig"
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
