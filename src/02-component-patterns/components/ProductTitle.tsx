// aqui le estoy obligando a que el titulo sea obligatorio, y si hay una propiedad mas
// lo recomendable es crear una interface
// export const ProductTitle = ({ title }: { title: string }) => {
//   return <span className={styles.productDescription}>{title}</span>;

import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { useContext } from "react";

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};
