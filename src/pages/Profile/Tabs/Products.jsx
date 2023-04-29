import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../../../components/global/Loader";
import {ProductListWrapper} from "../../../components/ui/ProductListWrapper";
import {useEffect} from "react";
import {userProducts} from "../../../store/actions/products";


export const Products = ({user}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userProducts(user._id));
    }, [])
    const {isLoading, specUserProducts} = useSelector(state => state.products);
    console.log(specUserProducts);
    return (
        <div>
            {
                isLoading ? <Loader /> : (
                    <ProductListWrapper products={specUserProducts} />
                )
            }
        </div>
    )
}