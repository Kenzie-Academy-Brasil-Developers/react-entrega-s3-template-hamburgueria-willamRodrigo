import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

import styles from "./style.module.scss";

export const Header = ({setCartOpen, cartList}) => {
   const [value, setValue] = useState("");

   return (
      <header>
         <div className={styles.container}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div className={styles.div__cart}>
               <button className="btn__cart" onClick={() => setCartOpen(true)}>
                  <MdShoppingCart size={25} />
                  <span className={styles.contador}>{cartList.length}</span>
               </button>
               <form>
                  <input
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                  <MdSearch size={21} />
                  </button>
               </form>
            </div>
         </div>
         
      </header>
   );
};
