import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../../../components/global/Loader";
import {ProductListWrapper} from "../../../components/ui/ProductListWrapper";
import {useEffect} from "react";
import {userProducts} from "../../../store/actions/products";


export const Products = ({user}) => {
    
    return (
        <div>
            {
                (
                    <ProductListWrapper user={user} />
                )
            }
        </div>
    )
}