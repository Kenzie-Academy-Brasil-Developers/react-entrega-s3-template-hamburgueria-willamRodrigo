import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss";

export const CartItemCard = ({ product, removeItemCart }) => {
   return (
      <li className={styles.list__modal}>
         <div>
            <div className={styles.img__modal}>
               <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.cart__desc}>
               <h3 className="title4">{product.name}</h3>
               <span className="price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>           
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => removeItemCart(product.id)}>
            <MdDelete size={25} />
         </button>
      </li>
   );
};
