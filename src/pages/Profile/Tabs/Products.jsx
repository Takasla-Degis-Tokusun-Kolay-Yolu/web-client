import {ProductListWrapper} from "../../../components/ui/ProductListWrapper";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {userProducts as getUserProductsAction} from "../../../store/actions/products.js";
import {useParams} from "react-router";

export const Products = ({user}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const initialRender = useRef(0);
    const {activeUser} = useSelector((state) => state.auth);
    // CHECK PATH HERE IF 'ME' check
    useEffect(() => {
        if (initialRender.current === 0) {
            if(id === 'me') {
                dispatch(getUserProductsAction(activeUser.id));
                initialRender.current = 1;
            } else {
                dispatch(getUserProductsAction(id));
                initialRender.current = 1;
            }
        }
    }, [])
    
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