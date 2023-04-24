import { NavBar } from "../../components/ui/Navbar";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductWrapper } from "../../components/ui/ProductWrapper";
import { Loader } from "../../components/global/Loader";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../store/actions/products.js";
import { getAllCategories } from "../../store/actions/categories.js";
const Feed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInformation, setUserInformation] = useState({});
  const activeUser = useSelector((state) => state.auth.activeUser);
  const initialRef = useRef(0);
  useEffect(() => {
    if (initialRef.current === 0) {
      dispatch(getAllProducts());
      dispatch(getAllCategories());
      initialRef.current = 1;
      return;
    }
  }, []);

  useEffect(() => {
    if (activeUser) {
      setUserInformation(activeUser);
    } else {
      navigate("/");
    }
  }, [activeUser]);
  const [products, setProducts] = useState([]);
  const { products: productsFromStore, isLoading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (productsFromStore) {
      setProducts(productsFromStore);
    }
  }, [productsFromStore]);

  const [categories, setCategories] = useState([]);
  const { categories: categoriesFromStore } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (categoriesFromStore) {
      setCategories(categoriesFromStore);
    }
  }, [categoriesFromStore]);

  return (
    <>
      <NavBar
        userInformation={userInformation}
        activeUser={activeUser}
        categories={categories}
      />
      {isLoading || products.length === 0 ? (
        <Loader />
      ) : (
        <ProductWrapper products={products} />
      )}
    </>
  );
};

export default Feed;
