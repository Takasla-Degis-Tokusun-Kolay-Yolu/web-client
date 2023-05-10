import {useSelector, useDispatch} from "react-redux";
import {Button, Radio, Result} from "antd";
import {useEffect, useRef} from "react";
import {getCategoryById} from "../../store/actions/categories.js";
import {ProductWrapper} from "../../components/ui/ProductWrapper.jsx";
import {Loader} from "../../components/global/Loader.jsx";
import {Link} from "react-router-dom";

export const Banner = () => {
    const dispatch = useDispatch();
    const initialRender = useRef(0);
    const {categories, specCategory, isLoading} = useSelector(state => state.categories);
    useEffect(() => {
        if (initialRender.current === 0) {
            dispatch(getCategoryById(categories[0]._id));
            initialRender.current = 1;
        }
    }, [])

    const handleChangeCategoryPick = ({ target: {value} }) => {
        dispatch(getCategoryById(value));
    }
    return (
        <>
            <div className="w-full bg-gray-100 flex justify-center items-center pt-5">
                <Radio.Group defaultValue={categories[0]._id} buttonStyle="solid" onChange={handleChangeCategoryPick}>
                    {categories.map((category) => {
                        return (<Radio.Button key={category._id} value={category._id}>{category.name}</Radio.Button>)
                    })}
                </Radio.Group>
            </div>
            <div>
                {isLoading ?
                    <Loader /> :
                    specCategory.products.length === 0 ?
                        <Result
                            className={'pt-20 bg-gray-100 h-screen'}
                            status="warning"
                            title="Bu kategoride henüz ürün bulunmamaktadır. Lütfen daha sonra tekrar deneyiniz."
                            extra={
                                <Button  key="console">
                                    <Link to={"/feed"}>Anasayfaya Dön</Link>
                                </Button>
                            }
                        /> :
                    <ProductWrapper products={specCategory.products} />}
            </div>
        </>
    )
};