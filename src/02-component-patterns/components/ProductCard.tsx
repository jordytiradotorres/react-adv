import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({
    onChange,
    product,
    value,
  });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButton counter={counter} increaseBy={increaseBy} /> */}
        {children}
      </div>
    </Provider>
  );
};
