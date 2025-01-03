import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../components/Cart";
import { UPDATE_PRODUCTS } from "../utils/actions";

const Home = () => {
  const products = useSelector((state) => state.products);
  


  return (
    <div className="container">
      <CategoryMenu />
      <ProductList products={products}/>
      <Cart />
    </div>
  );
};

export default Home;
