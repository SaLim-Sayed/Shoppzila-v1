"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Badge,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { IProduct } from "@/interfaces";
import { RootState } from "@/store/store";
import ShopingCartItem from "./ShopingCartItem";
import { ShoppingCart } from "lucide-react";

export default function ModalPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const cart: IProduct[] = useSelector(
    (state: RootState) => state.cart.cartItem
  );

  return (
    <div className="flex flex-col    gap-2">
      <Button variant="light" onPress={onOpen}>
        <Badge content={cart.length} color="success" className="mt-2" shape="circle">
          <ShoppingCart className=" mt-3 text-orange-400" />
        </Badge>
      </Button>

      <RadioGroup
        orientation="horizontal"
        value={modalPlacement}
        onValueChange={setModalPlacement}
      ></RadioGroup>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="outside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              {cart.map((product) => (
                <ModalBody key={product.name}>
                  <ShopingCartItem product={product} />
                </ModalBody>
              ))}
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
