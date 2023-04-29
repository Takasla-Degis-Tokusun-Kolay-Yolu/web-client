import {ProductListCard} from "./ProductListCard.jsx";

export const ProductListWrapper = ({ products }) => {
    return (
        <div
            className={
                "flex flex-col justify-center  items-start mx-auto w-full"
            }
        >
            {products.map((item) => (
                <ProductListCard key={item._id} productData={item} />
            ))}
        </div>
    );
};
