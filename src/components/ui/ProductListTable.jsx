import {Image, Table, Tag, Button, Tooltip} from "antd";
import {CreditCardOutlined, DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
export const ProductListTable = ({ products }) => {
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
            render: text => <a>{text}</a>,
        },
        {
            title: 'Kullanım Durumu',
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
        }, {
            title: 'Kategoriler',
            key: 'categoryId',
            dataIndex: 'categoryId',
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
            render: (record) => {
                return (
                    <div className={'flex flex-row gap-x-2 justify-center items-center'}>
                        <Tooltip title={'Görüntüle'}>
                            <Button onClick={() => handleClickDetailButton(record)} className={'bg-blue-500 text-white rounded-md hover:bg-blue:500/25 hover:text-blue-500 duration-300'} icon={<EyeOutlined />} size="large" />
                        </Tooltip>
                        <Tooltip title={'Düzenle'}>
                            <Button className={'bg-brand-green px-3 py-1 text-white rounded-md hover:bg-brand-green/20 hover:text-brand-green duration-300'} icon={<EditOutlined />} size="large" />
                        </Tooltip>
                        <Tooltip title={'Sil'}>
                            <Button className={'bg-brand-green px-3 py-1 text-white rounded-md hover:bg-brand-green/20 hover:text-brand-green duration-300'} icon={<DeleteOutlined />} size="large" />
                        </Tooltip>
                    </div>
                )
            }
        }
    ]

    const handleClickDetailButton = (record) => {
        console.log(record)
    }

    return (<Table className={'w-full'} columns={columns} dataSource={products} />)
}