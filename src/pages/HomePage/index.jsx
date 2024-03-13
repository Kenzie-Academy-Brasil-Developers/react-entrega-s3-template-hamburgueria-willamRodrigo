import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productAPI } from "../../services/api";

export const HomePage = () => {
  const myCartList = JSON.parse(localStorage.getItem("@MYCARTLIST")) || [];
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(myCartList);

  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const dataProduct = async () => {
      const { data } = await productAPI.get("/products");

      setProductList(data);
    };

    dataProduct();
  }, []);

  useEffect(() => {
    localStorage.setItem("@MYCARTLIST", JSON.stringify(cartList));
  }, [cartList]);

  const addCartList = (product) => {
    if (!cartList.some((cartList) => cartList.id === product.id)) {
      setCartList([...cartList, product]);
    } else {
      alert("Produto já adicionado ao carrinho.");
    }
  };

  const removeItemCart = (productId) => {
    const newCartList = cartList.filter((product) => product.id !== productId);
    setCartList(newCartList);
  };

  const removeAll = () => {
    setCartList([]);
  };

  // useEffect atualização - salva os produtos no localStorage (carregar no estado)
  // adição, exclusão, e exclusão geral do carrinho
  // renderizações condições e o estado para exibir ou não o carrinho
  // filtro de busca

  return (
    <>
      <Header setCartOpen={setCartOpen} cartList={cartList}/>
      <main>
        <ProductList productList={productList} addCartList={addCartList} />
        {cartOpen ? (
          <CartModal
            cartList={cartList}
            removeItemCart={removeItemCart}
            removeAll={removeAll}
            setCartOpen={setCartOpen}
          />
        ) : null}
      </main>
    </>
  );
};
