import styles from "./style.module.scss";

export const ProductCard = ({ product, addCartList }) => {
    
    return(
        <li className={styles.li__container}>
            <div className={styles.div__img}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.div__itens}>
                <h3 className="title4">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="btn__add" onClick={() => addCartList(product)}>Adicionar</button>
            </div>
        </li>
    )
}