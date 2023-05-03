import {Image, Table, Tag, Button, Tooltip, Popconfirm, message} from "antd";
import {CreditCardOutlined, DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {EditProductModal} from "./EditProductModal.jsx";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../store/actions/products.js";
import {useNavigate} from "react-router-dom";
export const ProductListTable = ({ products }) => {
    const [productsOwnerId, setProductsOwnerId] = useState("");
    const [isShowEditProductModal, setIsShowEditProductModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const categoriesCtx = useSelector(state => state.categories.categories);
    const navigate = useNavigate();
    // owner of the products
    useEffect(() => {
        if (products.length > 0) {
            setProductsOwnerId(products[0].userId?._id);
        }

    }, [])
    // fetch active user
    const activeUser = useSelector(state => state.auth.activeUser);
    const dispatch = useDispatch();
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
                            <Button onClick={() => handleClickDetailProductButton(record)} className={'bg-blue-500 text-white rounded-md hover:bg-blue:500/25 hover:text-blue-500 duration-300'} icon={<EyeOutlined />} size="large" />
                        </Tooltip>
                        {
                            activeUser._id.toString() === productsOwnerId && (
                                <>
                                    <Tooltip title={'Düzenle'}>
                                        <Button onClick={() => handleClickEditProductButton(record)} className={'bg-brand-green px-3 py-1 text-white rounded-md hover:bg-brand-green/20 hover:text-brand-green duration-300'} icon={<EditOutlined />} size="large" />
                                    </Tooltip>
                                    <Tooltip title={'Sil'}>
                                        <Popconfirm
                                            title="İlanı Sil"
                                            description={`"${record.name}" isimli ürünü silmek istediğinize emin misiniz? Bu işlem geri alınamaz.`}
                                            onConfirm={() => handleClickDeleteProductButton(record)}
                                            cancelText="İptal Et"
                                            okText="Evet"
                                            okButtonProps={{
                                                className:
                                                    "bg-brand-green text-white hover:bg-brand-green/20 hover:text-brand-green duration-300",
                                            }}
                                        >
                                            <Button className={'bg-brand-green px-3 py-1 text-white rounded-md hover:bg-brand-green/20 hover:text-brand-green duration-300'} icon={<DeleteOutlined />} size="large" />
                                        </Popconfirm>
                                        </Tooltip>
                                </>
                            )
                        }

                    </div>
                )
            }
        }
    ]

    const handleClickDetailProductButton = (record) => {
        navigate(`/product/${record._id}`)
    }
    const handleClickEditProductButton = (record) => {
        setSelectedProduct(record);
        setIsShowEditProductModal(true);
    }

    const handleClickDeleteProductButton = (record) => {
        dispatch(deleteProduct(record._id)).then(() => {
            message.success('Ürün başarıyla silindi.')
            navigate('/me')
        }).catch((err) => {
            message.error('Ürün silinirken bir hata oluştu.' + err.message);
        });
    }
    return (
        <>
            <Table className={'w-full'} rowKey={'_id'} columns={columns} dataSource={products} />
            {
                isShowEditProductModal && (<EditProductModal isModalOpen={isShowEditProductModal} handleCancel={() => setIsShowEditProductModal(false)} categories={categoriesCtx} product={selectedProduct} />)
            }
        </>
    )
}