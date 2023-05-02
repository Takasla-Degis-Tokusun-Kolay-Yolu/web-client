import {Button, Image, Tag, Tooltip} from "antd";

export const ProductOfferTable = ({offers}) => {
    const columns = [
        {
            title: 'Ürün Resmi',
            dataIndex: 'image',
            key: 'image',
            render: (image) => {
                return (<Image
                    width={70}
                    height={70}
                    className={"rounded-lg object-contain border bg-white"}
                    src={image}
                    preview={{maskClassName: 'rounded-lg'}}
                />)
            },
        },
        {
            title: 'Ürün Adı',
            dataIndex: 'name',
            key: 'name',
            render: name => <a>{name}</a>,
        },
        {
            title: 'Ürün Sahibi',
            dataIndex: 'userId',
            key: 'userId',
            render: (userId) => {
                return (
                    <div>
                        <Image
                            width={70}
                            height={70}
                            className={"rounded-full object-contain border bg-white"}
                            src={userId.profileImage}
                            preview={{maskClassName: 'rounded-full'}}
                        />
                        <p>{userId.firstName} + ' ' + {userId.lastName}</p>
                    </div>
                )
            },
        },
        {
            title: 'Ürün Durumu',
            dataIndex: 'usageLevel',
            key: 'usageLevel',
            render: (usageLevel) => {
                if (usageLevel === 0) {
                    return (
                        <Tag color="green">Yeni/Etiketli Ürün</Tag>
                    )
                } else if (usageLevel === 1) {
                    return (
                        <Tag color="blue">Az Kullanılmış Ürün</Tag>
                    )
                } else if (usageLevel === 2) {
                    return (
                        <Tag color="red">Kullanılmış Ürün</Tag>
                    )
                } else {
                    return (
                        <Tag color="gray">Bilinmiyor</Tag>
                    )
                }
            }
        },
        {
            title: 'Ürün Açıklaması',
            dataIndex: 'description',
            key: 'description',
            render: (description) => <p>{description}</p>,
        },
        {
            title: 'Ürün Kategorisi',
            dataIndex: 'categoryId',
            key: 'categoryId',
            render: (_, { categoryId }) => {
                if (categoryId.length > 4) {
                    const firstThreeCategories = categoryId.slice(0, 3);
                    const remainingCount = categoryId.length - 3;
                    return (
                        <>
                            {firstThreeCategories.map((category) => (
                                <Tag color="blue" key={category._id}>
                                    {category.name}
                                </Tag>
                            ))}
                            <Tag color="blue" key="remaining">
                                + {remainingCount} diğer
                            </Tag>
                        </>
                    );
                } else {
                    return (
                        <>
                            {categoryId.map((category) => (
                                <Tag color="blue" key={category._id}>
                                    {category.name}
                                </Tag>
                            ))}
                        </>
                    );
                }
            }
        },
        {
            title: 'İşlemler',
            key: 'action',
            render: (text, record) => {
                return (
                    <Tooltip>
                        <Button type="primary" size="small" onClick={() => {console.log(record)}} />
                    </Tooltip>
                )
            }
        }
    ];
};