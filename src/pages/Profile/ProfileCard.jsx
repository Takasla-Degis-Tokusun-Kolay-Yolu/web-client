import {Tag, Card, Rate, Tabs} from "antd";
import {EnvironmentOutlined, FieldTimeOutlined, MailOutlined} from "@ant-design/icons";
import { differenceInDays } from 'date-fns';

export const ProfileCard = ({user}) => {

    return (
        <>
            <Rate rootClassName={'flex justify-center mb-2'} disabled defaultValue={user?.rate} />
            <div className={'w-full flex flex-row justify-center items-center'}>
                <Card
                    className={'w-2/3 mx-48'}
                    title={user?.firstName + ' ' + user?.lastName }
                    extra={<span><Tag color="geekblue">ID: {user?._id}</Tag></span>}

                >
                    <div className={'flex flex-row justify-around'}>
                        <p className={'flex flex-row gap-x-2'}><MailOutlined />{user?.email}</p>
                        <p className={'flex flex-row gap-x-2'}><EnvironmentOutlined /> {user?.location} </p>
                        <p className={'flex flex-row gap-x-2'}><FieldTimeOutlined />{differenceInDays(new Date(), new Date(user?.createdAt))} gündür üye</p>
                    </div>
                </Card>
            </div>

        </>
    )
}