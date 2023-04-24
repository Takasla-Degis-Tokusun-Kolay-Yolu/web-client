import { BarChartOutlined } from "@ant-design/icons";
import {Avatar, Image, Rate} from "antd";
export const ProductCard = ({productData}) => {
  return (
    <div className="w-full mb-2 md:mb-3 sm:w-1/3 md:w-1/3 lg:w-1/5 container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div>
        {
          productData.categoryId.map((category) => {
            return (
                <span key={category._id} className="text-white text-xs font-medium rounded-lg bg-green-500 inline-block mt-4 ml-2 py-1.5 px-2 cursor-pointer">
                    {category.name}
                </span>
            )
          })
        }
        <h1 className="text-md mt-1 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
          {productData.name}
        </h1>
        <p className="ml-4 text-sm mb-2 text-gray-700 cursor-pointer">
          Az Kullanılmış
        </p>
      </div>
      <Image
        width={"100%"}
        height={200}
        className={'object-contain'}
        src={productData.image}
      />
      <div className="flex py-2 px-3 justify-between">
        <div className="flex items-center space-x-2">
          {
            productData.userId.profileImage !== '-' ? (
                <img
                    className="w-10 h-10 rounded-full object-contain"
                    src={productData.userId.profileImage}
                    alt={productData.userId.firstName}
                />
            ) : (
                <Avatar style={{ backgroundColor: '#A1DD70', verticalAlign: 'middle' }} size="large" gap={4}>
                    {productData.userId.firstName[0].toUpperCase()}
                </Avatar>
            )
          }
          <h2 className="text-gray-800 font-bold cursor-pointer hover:underline">{productData.userId.firstName} {' '} {productData.userId.lastName}</h2>
        </div>
        <div className="flex space-x-2">
          <div className="flex space-x-1 items-center">
            <span>
              <BarChartOutlined />
            </span>
            <span>{productData.incomingOffers.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
