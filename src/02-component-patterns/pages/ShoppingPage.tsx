import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/product";
import "../styles/custom-style.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div className="bg-dark">
      <h1>Shopping Store</h1>
      <hr />

      <div>
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, count, increaseBy, isMaxCountReached }) => (
            <>
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,.2)" }}
              />
              <ProductTitle
                className="text-white"
                style={{ fontWeight: "bold" }}
              />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              />

              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}>2</button>
              )}

              <span>{count}</span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
