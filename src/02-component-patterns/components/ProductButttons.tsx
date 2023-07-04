// interface ProductButtonProps {
//   counter: number;
//   increaseBy: (value: number) => void;
// }
// export const ProductButtons = ({ counter, increaseBy }: ProductButtonProps) => {
//   return (
//     <div className={styles.buttonsContainer}>
//       <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
//         -
//       </button>
//       <div className={styles.countLabel}>{counter}</div>
//       <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
//         +
//       </button>
//     </div>
//   );
// };

import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { useContext } from "react";

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
