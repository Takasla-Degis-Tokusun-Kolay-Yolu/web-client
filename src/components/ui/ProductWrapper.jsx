import { ProductCard } from "./ProductCard";

export const ProductWrapper = ({ products }) => {
  return (
    <div
      className={
        "min-h-screen bg-gray-100 flex flex-wrap justify-center gap-x-4 items-start pt-10 mx-auto px-10"
      }
    >
        {products && products.map((item) => (
            <ProductCard key={item._id} productData={item} />
        ))}
    </div>
  );
};
