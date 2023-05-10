import { Col, Row, Modal, Space, Button, Form, Image, Select } from "antd";

export const GiveOfferModal = ({ isModalOpen, handleCancel, userProducts, selectedProduct }) => {
    const handleSaveForm = (values) => {
        console.log(values)
    };

    return (
        <Modal
            title="Teklif Ver"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={[
                <Space>
                    <Button key={'cancel-button'} onClick={handleCancel}>İptal</Button>
                    <Button
                        form="giveOfferForm" key="submit" htmlType="submit"
                        className={
                            "bg-brand-green text-white hover:bg-brand-green/20  hover:text-brand-green duration-300"
                        }
                    >
                        Teklifi Gönder
                    </Button>
                </Space>,
            ]}
        >
            <Form
                id='giveOfferForm'
                layout="vertical"
                hideRequiredMark
                onFinish={(values) => handleSaveForm(values)}
            >
                <Row gutter={16}>
                    <Col span={24}>
                        <div className="flex justify-start gap-x-4">
                            <Image
                                preview={{ maskClassName: 'rounded-lg' }}
                                src={selectedProduct?.image}
                                className={'rounded-lg border-4 border-brand-green mx-auto object-cover !w-40 !h-40'}
                            />
                            <div className="flex flex-col items-center justify-center">
                                <h3 className={'text-2xl text-gray-900 font-semibold'}>{selectedProduct?.name}</h3>
                                <p className="text-gray-700">{selectedProduct?.description}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16} className="mt-5">
                    <Col span={24}>
                        <Form.Item
                            label="Teklif Vermek İstediğiniz Ürün"
                            style={{
                                marginBottom: 10,
                            }}
                            name="applicantProducts"
                        >
                            <Select
                                size={"large"}
                                mode={"multiple"}
                                showSearch={false}
                                maxTagCount={"responsive"}
                                placeholder={"Ürün Seçiniz"}
                            >
                                {
                                    userProducts?.map((product) => (
                                        <Select.Option key={product._id} value={product._id} className='flex flex-row justify-center items-center'>
                                            <div>
                                                <Image src={product.image} className={'rounded-md border-2 border-brand-green mx-auto object-cover !w-8 !h-8'} />
                                            </div>
                                            <div>
                                                <p>{product.name}</p>
                                            </div>
                                        </Select.Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>


            </Form>

        </Modal>
    )
};