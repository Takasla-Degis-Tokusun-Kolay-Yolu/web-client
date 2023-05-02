import { useEffect, useState } from "react";
import {ProductListCard} from "./ProductListCard.jsx";
import {ProductListTable} from "./ProductListTable.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../global/Loader.jsx";
import { userProducts } from "../../store/actions/products.js";
import { message } from "antd";

export const ProductListWrapper = ({ user }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userProducts(user?._id)).then(()=> {
        message.success('Ürünler başarıyla yüklendi.')
        })
    }, [user])
    const {isLoading, specUserProducts } = useSelector((state) => state.products);

    return (
        <div
            className={
                "flex flex-col justify-center  items-start mx-auto w-full"
            }
        >
            {
                isLoading ? (<Loader />) : (<ProductListTable products={specUserProducts} />)
            }
        </div>
    );
};
