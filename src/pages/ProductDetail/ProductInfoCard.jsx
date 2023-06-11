import { Button, Card, Image, Rate, Tag } from "antd";
import { useState, useEffect, useRef } from "react";
import { EnvironmentOutlined, FieldTimeOutlined, MailOutlined } from "@ant-design/icons";
import { differenceInDays } from "date-fns";
import { ProductOfferTable } from "./ProductOfferTable.jsx";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { GiveOfferModal } from "../../components/ui/GiveOfferModal.jsx";
import {Loader} from "../../components/global/Loader.jsx";

export const ProductInfoCard = ({ product }) => {
    const [productUsageLevel, setProductUsageLevel] = useState('');
    const [isShowOfferModel, setIsShowOfferModel] = useState(false);
    const initialRef = useRef(0);
    const dispatch = useDispatch();
    const { activeUser } = useSelector(state => state.auth);

    useEffect(() => {
        if (product.usageLevel === 0) {
            setProductUsageLevel('Yeni/Etiketli Ürün')
        } else if (product.usageLevel === 1) {
            setProductUsageLevel('Az Kullanılmış Ürün')
        } else if (product.usageLevel === 2) {
            setProductUsageLevel('Kullanılmış Ürün')
        } else {
            setProductUsageLevel('Belirtilmemiş')
        }
    }, [])

    useEffect(() => {
        if(initialRef.current === 0) {
            
            initialRef.current = 1;
            return;
        }
    }, [])

    
    const {loggedUserProducts, isLoading} = useSelector(state => state.products)
    const handleOfferButtonClick = () => {
        setIsShowOfferModel(true);
    };

    return (
        <>
            {
                isLoading ? (<Loader />) : (
                    <div className={'w-full flex flex-col justify-center items-center'}>
                        <Card title={product?.name} className={'w-2/3 mx-48'} extra={<span><Tag color="geekblue">ID: {product?._id}</Tag></span>}>
                            <Card
                                type="inner"
                                title="Ürün Açıklaması"
                            >
                                <p>{product?.description}</p> <br />
                                <p>Ürün Durumu: {
                                    productUsageLevel ? productUsageLevel : 'Belirtilmemiş'
                                }</p>
                                <p>Oluşturulma Tarihi: {differenceInDays(new Date(), new Date(product?.createdAt))} gün önce oluşturuldu.</p>
                            </Card>
                            <Card type="inner" title="Kategoriler" className={'my-5 '}>
                                <div className={'flex flex-row justify-around gap-x-3'}>
                                    <div className={'w-1/2'}>
                                        <Card type={'inner'} title={'Ürünün Kategorisi'}>
                                            {
                                                product?.categoryId && product?.categoryId.map((category) => (<Tag color="geekblue" key={category?._id}>{category.name}</Tag>))
                                            }
                                        </Card>
                                    </div>
                                    <div className={'w-1/2'}>
                                        <Card type={'inner'} title={'Ürünün Kategorisi'}>
                                            {
                                                product?.acceptedCategories && product?.acceptedCategories.map((category) => (<Tag color="geekblue" key={category?._id}>{category.name}</Tag>))
                                            }
                                        </Card>
                                    </div>
                                </div>

                            </Card>
                            <Card type="inner" title="Ürün Sahibi" className={'my-5'}>
                                <div className={'flex flex-row justify-start gap-x-4'}>
                                    <Image
                                        width={70}
                                        height={70}
                                        className={"rounded-lg object-contain border bg-white w-1/4"}
                                        src={product?.userId?.profileImage}
                                        preview={{ maskClassName: 'rounded-lg' }}
                                    />
                                    {
                                        product?.userId && (
                                        <Card size={'small'} className={'w-full'} type={'inner'} title={<Link to={`/profile/${product.userId._id}`} >{product?.userId?.firstName + ' ' + product?.userId?.lastName}</Link>} extra={<Rate rootClassName={'flex justify-center mb-2'} disabled defaultValue={product?.userId?.rate} />} >
                                            <div className={'flex flex-row gap-x-4'}>
                                                <p><MailOutlined className={'me-2'} />{product?.userId?.email}</p>
                                                <p><EnvironmentOutlined className={'me-2'} /> {product?.userId?.location} </p>
                                                <p><FieldTimeOutlined className={'me-2'} />{differenceInDays(new Date(), new Date(product?.userId?.createdAt))} gündür üye</p>
                                            </div>
                                        </Card>)
                                    }
                                </div>
                            </Card>
                        </Card>
                        {
                            activeUser?._id !== product?.userId?._id && (<div className="mb-20 bg-white  w-2/3 mx-48">
                                <Button onClick={handleOfferButtonClick} className={'w-full bg-brand-green/90 text-gray-50 hover:bg-brand-green hover:!text-white'} >Teklif Ver</Button>
                            </div>)
                        }

                        <div className={'mb-20 bg-white w-2/3 mx-48'}>
                            {
                                product?.incomingOffers?.length > 0 ? <ProductOfferTable offers={product?.incomingOffers} /> : <h1>There is no offer for this product!</h1>
                            }
                        </div>
                        {
                            isShowOfferModel && <GiveOfferModal isModalOpen={isShowOfferModel} handleCancel={() => setIsShowOfferModel(false)} userProducts={loggedUserProducts} selectedProduct={product} />
                        }
                    </div>
                )
            }
        </>
    )
};