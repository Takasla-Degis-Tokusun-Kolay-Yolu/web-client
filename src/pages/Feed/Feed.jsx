import { NavBar } from "../../components/ui/Navbar";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductWrapper } from "../../components/ui/ProductWrapper";
import { Loader } from "../../components/global/Loader";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../store/actions/products.js";
const Feed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialRef = useRef(0);
  useEffect(() => {
    if (initialRef.current === 0) {
      dispatch(getAllProducts());
      initialRef.current = 1;
      return;
    }
  }, []);

  const [products, setProducts] = useState([]);
  const { products: productsFromStore, isLoading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (productsFromStore) {
      setProducts(productsFromStore);
    }
  }, [productsFromStore]);


  return (
    <>
      <NavBar />
      {isLoading || products.length === 0 ? (
        <Loader />
      ) : (
        <ProductWrapper products={products} />
      )}
    </>
  );
};

export default Feed;
