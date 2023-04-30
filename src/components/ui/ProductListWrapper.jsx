import {ProductListCard} from "./ProductListCard.jsx";
import {ProductListTable} from "./ProductListTable.jsx";

export const ProductListWrapper = ({ products }) => {
    return (
        <div
            className={
                "flex flex-col justify-center  items-start mx-auto w-full"
            }
        >
            <ProductListTable products={products} />
        </div>
    );
};
