import { ProductButtons } from "./ProductButttons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCard as ProductCardHOC } from "./ProductCard";

export * from "./ProductButttons";
export * from "./ProductImage";
export * from "./ProductTitle";
// export * from "./ProductCard";

export const ProductCard = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons,
});

export default ProductCard;
