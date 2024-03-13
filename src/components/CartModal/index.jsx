import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

import styles from "./styles.module.scss";

export const CartModal = ({ cartList, setCartOpen, removeItemCart, removeAll }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={styles.container} role="dialog">
         <div className={styles.content}>
            <div className={styles.header__modal}>
               <h2 className="title__modal">Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={() => setCartOpen(false)}>
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.cart}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeItemCart={removeItemCart}/>
                  ))}
               </ul>
            </div>
            <div className={styles.footer__modal}>
               <div>
                  <span className={styles.total}>Total</span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={() => removeAll()}>Remover todos</button>
            </div>
         </div>
         
      </div>
   );
};
