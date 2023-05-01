import {Image} from "antd";

export const Hero = ({product}) => {
    return (
        <div className={'w-full bg-gradient-to-t from-brand-green to-brand-green/60 h-40 flex flex-row justify-center items-end mb-24'}>
            <div className={'w-40 h-40 bg-brand-green/50 rounded-full -mb-20 overflow-hidden'}>
                <Image
                    preview={{maskClassName: 'rounded-full'}}
                    src={
                    product.image !== '-' ? product.image : 'https://www.ajanshaber.com/images/news/2020/04/15/20200415111158_1.jpg'
                    } alt={'avatar'} className={'rounded-full border-8 border-brand-green mx-auto object-cover !w-40 !h-40'}/>
            </div>
        </div>
    )
};