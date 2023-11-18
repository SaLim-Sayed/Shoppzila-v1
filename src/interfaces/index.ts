<<<<<<< HEAD
=======
export interface CarProps {
  name: string;
  price: string;
  src: string;
  subSrc: string;
}

>>>>>>> origin/master
export interface ICategory {
  title: string;
  src: string;
}

export interface IProduct {
  name: string;
  price: number;
  src: string;
  subSrc: string;
  desc?: string;
  qty: number;
  color: string;
<<<<<<< HEAD
  size: string;
  count: number;
=======
  size: string ;
  count:number
>>>>>>> origin/master
  // count: number;
}
export interface IBox {
  title: string;
  slug: string;
  src: string;
}
export interface FooterColumn {
  title: string;
  links: string[];
}
