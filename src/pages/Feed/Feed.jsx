import { NavBar } from "../../components/ui/Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductWrapper } from "../../components/ui/ProductWrapper";
import {Loader} from "../../components/global/Loader";
import {useDispatch} from "react-redux";
import {getAllProducts} from "../../store/actions/products.js";
const Feed = () => {
  const [userInformation, setUserInformation] = useState({});
  const activeUser = useSelector((state) => state.auth.activeUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, [])

  useEffect(() => {
    if (activeUser) {
      setUserInformation(activeUser);
    } else {
      navigate("/");
    }
  }, [activeUser]);
  const [products, setProducts] = useState([]);
  const { products: productsFromStore, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    if (productsFromStore) {
      setProducts(productsFromStore);
    } else {
      navigate("/");
    }
  }, [productsFromStore]);

  return (
    <>
      <NavBar userInformation={userInformation} activeUser={activeUser} />
      {
        isLoading ? <Loader /> : (<ProductWrapper products={products} />)
      }
    </>
  );
};

export default Feed;
