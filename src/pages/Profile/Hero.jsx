import {Image, Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";

export const Hero = ({user}) => {
    return (
        <div className={'w-full bg-gradient-to-t from-brand-green to-brand-green/60 h-40 flex flex-row justify-center items-end mb-24'}>
            <div className={'w-40 h-40 bg-brand-green/50 rounded-full -mb-20 overflow-hidden'}>
                <Image
                    preview={{maskClassName: 'rounded-full'}}
                    src={
                    user?.profileImage !== '-' ? user?.profileImage : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
                    } alt={'avatar'} className={'rounded-full border-8 border-brand-green object-cover !w-40 !h-40'}/>
            </div>
        </div>
    )
};