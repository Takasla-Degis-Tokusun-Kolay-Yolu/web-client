import {useParams} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {getOneProductById} from "../../store/actions/products.js";
import {NavBar} from "../../components/ui/Navbar.jsx";
import {Loader} from "../../components/global/Loader";
import {Hero} from "./Hero.jsx";
import {ProductInfoCard} from "./ProductInfoCard.jsx";
import {PRODUCT_DETAILS} from "../../utils/constants/tabTypes.js";
export const ProductDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getOneProductById(id));
    }, [])
    const {specProduct: product, isLoading} = useSelector(state => state.products);

    return (
        <div>
            <NavBar activeTab={PRODUCT_DETAILS}/>
            {
                isLoading ? <Loader/> :
                    (
                        <>
                            <Hero product={product}/>
                            <ProductInfoCard product={product}/>
                        </>
                    )
            }
        </div>
    );
};