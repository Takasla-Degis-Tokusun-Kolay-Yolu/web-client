import { ProductCard } from "./ProductCard";
export const ProductWrapper = ({ products }) => {
  return (
    <div
      className={
        "min-h-screen bg-gray-100 flex flex-wrap justify-center gap-x-5 items-start pt-10 px-10"
      }
    >
      {products.map((item) => (
        <ProductCard key={item._id} productData={item} />
      ))}
    </div>
  );
};
