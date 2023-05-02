import { BarChartOutlined } from "@ant-design/icons";
import { Avatar, Image, Tag } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../store/actions/auth.js";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({ productData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const CategoryView = () => {
        if (productData.categoryId.length > 4) {
            const firstThreeCategories = productData.categoryId.slice(0, 3);
            const remainingCount = productData.categoryId.length - 3;
            return (
                <>
                    {firstThreeCategories.map((category) => (
                        <span className={'text-white text-xs font-medium rounded-lg bg-green-500 inline-block mt-4 ml-2 py-1.5 px-2 cursor-pointer'} key={category._id}>
                            {category.name}
                        </span>
                    ))}
                    <span className={'text-white text-xs font-medium rounded-lg bg-green-500 inline-block mt-4 ml-2 py-1.5 px-2 cursor-pointer'}  key="remaining">
                        + {remainingCount} diğer
                    </span>
                </>
            );
        } else {
            return (
                <>
                    {productData.categoryId.map((category) => (
                        <span className={'text-white text-xs font-medium rounded-lg bg-green-500 inline-block mt-4 ml-2 py-1.5 px-2 cursor-pointer'} color="blue" key={category._id}>
                            {category.name}
                        </span>
                    ))}
                </>
            );
        }
    };
    const {activeUser} = useSelector((state) => state.auth);
    const handleClickProfile = (user) => {
        dispatch(getUserById(user._id)).then(() => {
          if(user._id === activeUser._id) {
            navigate('/profile/me');
          } else {
            navigate(`/profile/${user._id}`);
          }
        })
    }

  return (
    <div className="w-full mb-2 md:mb-3 sm:w-1/3 md:w-1/3 lg:w-1/5 container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div>
        {productData.categoryId.length > 0 && (<CategoryView />)}
        <h1  className="text-md mt-1 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 hover:underline transition duration-100">
          <Link to={`/product/${productData._id}`}>
          {productData.name}
          </Link>
        </h1>
        <p className="ml-4 text-sm mb-2 text-gray-700 cursor-pointer">
          Az Kullanılmış
        </p>
      </div>
      <Image
        width={"100%"}
        height={200}
        className={"object-contain"}
        src={productData.image}
      />
      <div className="flex py-2 px-3 justify-between">
        <div className="flex items-center space-x-2">
          {productData.userId.profileImage !== "-" ? (
            <img
              className="w-10 h-10 rounded-full object-contain"
              src={productData.userId.profileImage}
              alt={productData.userId.firstName}
            />
          ) : (
            <Avatar
              style={{ backgroundColor: "#A1DD70", verticalAlign: "middle" }}
              size="large"
              gap={4}
            >
              {productData.userId.firstName[0].toUpperCase()}
            </Avatar>
          )}
          <h2 className="text-gray-800 font-bold cursor-pointer hover:underline" onClick={() => handleClickProfile(productData.userId)}>
            {productData.userId.firstName} {productData.userId.lastName}
          </h2>
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
