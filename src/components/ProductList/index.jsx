import { ProductCard } from "./ProductCard";

import styles from "./style.module.scss";


export const ProductList = ({ productList, addCartList }) => {

   return (
      <ul className={styles.container}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addCartList={addCartList}/>
         ))}
      </ul>
   );
};
