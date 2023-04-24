import {Avatar, Button, Col, Form, Input, Modal, Popconfirm, Rate, Row, Select, Space} from "antd";
import {FontSizeOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
export const CreateProductModal = ({ isModalOpen, handleCancel, categories }) => {

    const handleOk = () => {
        console.log('Alarko kombi gerçek kombi gerçek konfor!')
    };

    const handleSaveForm = (values) => {
        console.log(values)
    }
    return (
        <Modal title="İlan Oluştur" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
            <Space>
                <Button onClick={handleCancel}>İptal</Button>
                <Button
                    onClick={() => {
                        console.log('Alarko kombi gerçek kombi gerçek konfor! Kaydet')
                    }}
                    className={
                        "bg-brand-green text-white hover:bg-brand-green/20  hover:text-brand-green duration-300"
                    }
                >
                    Kaydet
                </Button>
            </Space>
        ]}>
            <Form
                layout="vertical"
                hideRequiredMark
                onFinish={(values) => handleSaveForm(values)}
            >

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="name" label="Ürün Adı">
                            <Input
                                size="large"
                                name="firstName"
                                prefix={<FontSizeOutlined />}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Kategoriler"
                            style={{
                                marginBottom: 10,
                            }}
                            name="categoryId"
                        >
                            <Select
                                size={"large"}
                                mode={"multiple"}
                                showSearch={false}
                                maxTagCount={'responsive'}
                                placeholder={"Kategori Seçiniz"}
                                options={categories.map((category) => {
                                    return {
                                        label: category.name,
                                        value: category._id,
                                        key: category._id,
                                    };
                                })}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="usageLevel" label="Kullanılma Durumu Giriniz">
                            <Select
                                size={"large"}
                                showSearch={false}
                                maxTagCount={'responsive'}
                                placeholder={"Kullanım Durumu Seçiniz"}
                                options={[
                                    { value: 0, label: 'Yeni/Etiketli' },
                                    { value: 1, label: 'Az Kullanılmış' },
                                    { value: 2, label: 'Kullanılmış' },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Kabul Edilen Kategoriler"
                            style={{
                                marginBottom: 10,
                            }}
                            name="acceptedCategories"
                        >
                            <Select
                                size={"large"}
                                mode={"multiple"}
                                showSearch={false}
                                maxTagCount={'responsive'}
                                placeholder={"Kategorleri Seçiniz"}
                                options={categories.map((category) => {
                                    return {
                                        label: category.name,
                                        value: category._id,
                                        key: category._id,
                                    };
                                })}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>

                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item name="description" label="Açıklama">
                            <Input.TextArea />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}