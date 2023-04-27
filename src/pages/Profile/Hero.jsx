import {Image} from "antd";

export const Hero = () => {
    return (
        <div className={'w-full bg-gradient-to-t from-brand-green to-brand-green/60 h-40 flex flex-row justify-center items-end mb-24'}>
            <div className={'w-40 h-40 bg-brand-green/50 rounded-full -mb-20'}>
                <Image
                    preview={{maskClassName: 'rounded-full'}}
                    src={'https://www.w3schools.com/howto/img_avatar.png'} alt={'avatar'} className={'rounded-full border-8 border-brand-green mx-auto'}/>
            </div>
        </div>
    )
};