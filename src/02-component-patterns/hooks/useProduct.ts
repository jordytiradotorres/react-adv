import { useState, useEffect, useRef } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  // !! esto es para hacer la negacion
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      // aqui el signo ! es para decirle a typescript, si confia en mi
      // vas a tener un valor siempre en el onChange
      return onChange!({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
