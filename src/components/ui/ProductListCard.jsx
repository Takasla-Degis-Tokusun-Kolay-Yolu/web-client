import {Divider, Image, Tag} from "antd";
import {useEffect, useState} from "react";

export const ProductListCard = ({productData}) => {
    const [productUsageLevel, setProductUsageLevel] = useState('');
    useEffect(() => {
        switch (productData.usageLevel) {
            case 1:
                setProductUsageLevel('Yeni/Etiketli Ürün');
                break;
            case 2:
                setProductUsageLevel('Az Kullanılmış Ürün');
                break;
            case 3:
                setProductUsageLevel('Kullanılmış Ürün');
                break;
            default:
                setProductUsageLevel('Bilinmiyor');
                break;
        }
    }, [productData]);
    return (
        <div>
            <div className={'flex flex-col md:flex-row justify-around gap-x-4'}>
                <Image
                    width={70}
                    height={70}
                    className={"rounded-lg object-contain border"}
                    src={productData.image}
                    preview={{maskClassName: 'rounded-lg'}}
                />
                <div className={'flex flex-col'}>
                    <h2 className={'text-lg text-gray-700'}>{productData.name}</h2>
                    <p className={'text-sm text-gray-500'}>{productUsageLevel}</p>
                    <div className={'flex flex-row mt-2'}>
                        {
                            productData.categoryId.map((category) => (<Tag key={category._id} color={'geekblue'}>{category.name}</Tag>))
                        }
                    </div>
                </div>
                <div>
                    <p className={'text-lg text-gray-700'}>Kabul edilen kategoriler:</p>
                    <div className={'flex flex-wrap w-1/3 mt-2'}>
                        {
                            productData.acceptedCategories.map((category) => (<Tag key={category._id} color={'geekblue'}>{category.name}</Tag>))
                        }
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    )
}