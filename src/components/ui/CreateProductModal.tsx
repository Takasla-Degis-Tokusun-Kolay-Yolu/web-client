import {Avatar, Button, Col, Form, Input, Modal, Popconfirm, Rate, Row, Select, Space} from "antd";
import {MailOutlined, UserOutlined} from "@ant-design/icons";
import FileBase64 from "react-file-base64";
export const CreateProductModal = ({ isModalOpen, handleCancel }) => {
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
                        <Form.Item name="firstName" label="Adınız">
                            <Input
                                size="large"
                                name="firstName"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="lastName" label="Soyadınız">
                            <Input size="large" name="lastName" prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="email" label="Mail Adresiniz">
                            <Input
                                disabled={true}
                                size="large"
                                name="email"
                                prefix={<MailOutlined />}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}