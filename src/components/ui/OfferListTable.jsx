import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Avatar, Table, Image, Tag, Tooltip, Popconfirm} from "antd";
import React from "react";
import {
    CheckCircleOutlined,
    CheckOutlined,
    CloseCircleOutlined,
    DeleteOutlined,
    FieldTimeOutlined
} from "@ant-design/icons";
export const OfferListTable = ({ offers, isActiveUserSpecUser }) => {
    const { activeUser } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleApproveOffer = (offerId) => {
        // APPROVE OFFER
        console.log(offerId)
    };

    const handleRejectOffer = (offerId) => {
        // REJECT OFFER
        console.log(offerId)
    };

    const columns = [
        {
            title: 'Ürün Resmi',
            dataIndex: 'applicantProducts.image',
            key: 'applicantProducts._id',
            render: (image, record) => {
                return (<Image
                    width={70}
                    height={70}
                    className={"rounded-lg object-contain border bg-white"}
                    src={record.applicantProducts.image}
                    preview={{maskClassName: 'rounded-lg'}}
                />)
            }
        },
        {
            title: 'Başvurulan Ürün Adı',
            dataIndex: 'applicantProducts.name',
            key: 'applicantProducts._id',
            render: (text, record) => <a>{record.applicantProducts.name}</a>,
        },
        {
            title: 'Başvuru Sahibi',
            dataIndex: 'applicantUser.name',
            key: 'applicantUser._id',
            render: (name, record) => {
                return (
                    <div className={"flex flex-row items-center"}>
                        <Avatar
                            className={"mr-2"}
                            src={record.applicantUser.profileImage}
                            size={30}
                        />
                        <span>{record.applicantUser.firstName}</span>
                    </div>
                )
            }
        },
        {
            title: 'Kullanıcının Ürünü',
            dataIndex: 'advertiserProducts.name',
            key: 'advertiserProducts._id',
            render: (text, record) => {
                return (
                        <div className={"flex flex-col justify-center items-center"}>
                            <Image
                                className={"mb-2 rounded-lg object-cover"}
                                src={record.advertiserProducts.image}
                                width={50}
                                height={50}
                                preview={{maskClassName: 'rounded-lg'}}
                            />
                            <span>{record.advertiserProducts.name}</span>
                        </div>
                )
            }
        },
        {
            title: 'Başvuru Durumu',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                return (
                    <div className={"flex flex-row justify-center items-center"}>
                        {status === 0 && <Tag color={'orange'} ><FieldTimeOutlined className={'mr-1'} />Beklemede</Tag>}
                        {status === 1 && <Tag color={'green'} ><CheckCircleOutlined className={'mr-1'} /> />Kabul Edildi</Tag>}
                        {status === 2 && <Tag color={'red'} ><CloseCircleOutlined className={'mr-1'} />Reddedildi</Tag>}
                    </div>
                )
            }
        },
        {
            title: 'İşlemler',
            key: 'action',
            render: (record) => {
                return (
                    <div className={"flex flex-row justify-center items-center"}>
                        {
                            isActiveUserSpecUser && (
                                <>
                                <Popconfirm
                                    title="Teklifi Onayla"
                                    description="Teklifi onaylamak istediğinize emin misiniz?"
                                    onConfirm={() => {handleApproveOffer(record._id)}}
                                    okText="Evet"
                                    cancelText="Hayır"
                                    okButtonProps={{
                                        className:
                                            "bg-brand-green text-white hover:bg-brand-green/20 hover:text-brand-green duration-300",
                                    }}
                                >
                                    <Tooltip placement="top" title={'Teklifi Onayla'}>
                                        <button

                                            className={"bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg mr-2"}>
                                            <CheckOutlined />
                                        </button>
                                    </Tooltip>
                                </Popconfirm>
                                <Popconfirm
                                    title="Teklifi Reddet"
                                    description="Teklifi reddetmek istediğinize emin misiniz?"
                                    onConfirm={() => {handleRejectOffer(record._id)}}
                                    okText="Evet"
                                    cancelText="Hayır"
                                    okButtonProps={{
                                        className:
                                            "bg-brand-green text-white hover:bg-brand-green/20 hover:text-brand-green duration-300",
                                    }}
                                >
                                    <Tooltip placement="top" title={'Teklifi Reddet'}>
                                        <button
                                            className={"bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg mr-2"}>
                                            <DeleteOutlined />
                                        </button>
                                    </Tooltip>
                                </Popconfirm>
                                </>
                            )
                        }

                    </div>
                )
            },
        }
    ];



    return (
        <React.Fragment>
            <Table className={"mt-4"} columns={columns} dataSource={offers} />
        </React.Fragment>
    )
};