<<<<<<< HEAD
=======
import { FooterColumn } from "@/interfaces";

>>>>>>> origin/master
export default async function fetchData(url: string) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

<<<<<<< HEAD
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
=======
export const footerColumns: FooterColumn[] = [
  {
    title: "Quick links",
    links: ["My account", "Shopping Cart", "Wishlist", "Product Compare"],
  },
  {
    title: "Information",
    links: [
      "Privacy policy",
      " Refund policy",
      "Shipping & Return",
      "Term & conditions",
    ],
  }
];
>>>>>>> origin/master
