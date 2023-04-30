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
            <div className={'flex w-full flex-row justify-between '}>
                <Image
                    width={70}
                    height={70}
                    className={"rounded-lg object-contain border"}
                    src={productData.image}
                    preview={{maskClassName: 'rounded-lg'}}
                />
                <div>
                    <h2 className={'text-xs text-gray-500'}>Ürün Adı</h2>
                    <p className={'text-md font-medium text-gray-700'}>{productData.name}</p>

                </div>
                <div>
                    <h2 className={'text-xs text-gray-500 w-1/4'}>Kullanım Durumu</h2>
                    <p className={'text-md font-medium text-gray-700'}>{productUsageLevel}</p>
                </div>
            </div>
            <Divider />
        </div>
    )
}