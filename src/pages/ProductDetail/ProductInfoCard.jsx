import {Card, Image, Rate, Tag} from "antd";
import {useState, useEffect} from "react";
import {EnvironmentOutlined, FieldTimeOutlined, MailOutlined} from "@ant-design/icons";
import {differenceInDays} from "date-fns";
import {ProductOfferTable} from "./ProductOfferTable.jsx";
export const ProductInfoCard = ({product}) => {
    const [productUsageLevel, setProductUsageLevel] = useState('');

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

    return (
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
                                        product?.categoryId.map((category) => (<Tag color="geekblue" key={category?._id}>{category.name}</Tag>))
                                    }
                                </Card>
                            </div>
                            <div className={'w-1/2'}>
                                <Card type={'inner'} title={'Ürünün Kategorisi'}>
                                    {
                                        product?.acceptedCategories.map((category) => (<Tag color="geekblue" key={category?._id}>{category.name}</Tag>))
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
                                    preview={{maskClassName: 'rounded-lg'}}
                                />
                                <Card size={'small'} className={'w-full'} type={'inner'} title={product?.userId?.firstName + ' ' + product?.userId?.lastName} extra={<Rate rootClassName={'flex justify-center mb-2'} disabled defaultValue={product?.userId?.rate} />} >
                                    <div className={'flex flex-row gap-x-4'}>
                                        <p><MailOutlined className={'me-2'} />{product?.userId?.email}</p>
                                        <p><EnvironmentOutlined className={'me-2'} /> {product?.userId?.location} </p>
                                        <p><FieldTimeOutlined className={'me-2'} />{differenceInDays(new Date(), new Date(product?.userId?.createdAt))} gündür üye</p>
                                    </div>
                                </Card>
                            </div>
                    </Card>
                </Card>
                <div className={'mb-20 bg-white w-2/3 mx-48'}>
                    {
                        product?.incomingOffers?.length > 0 ? <ProductOfferTable offers={product?.incomingOffers} /> : <h1>There is no offer for this product!</h1>
                    }
                </div>
            </div>
    )
};