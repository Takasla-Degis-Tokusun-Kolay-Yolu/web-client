import {
  Avatar,
  Button,
  Col,
  Form,
  Input, message,
  Modal,
  Row,
  Select,
  Space
} from "antd";
import  { useState} from "react";
import {
  InboxOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import FileBase64 from "react-file-base64";
import {useDispatch} from "react-redux";
import { createProduct } from "../../store/actions/products.js";
export const CreateProductModal = ({
  isModalOpen,
  handleCancel,
  categories,
}) => {
  const [productImage, setProductImage] = useState(null);
  const dispatch = useDispatch();
  const handleSaveForm = (values) => {
    values = {
        ...values,
        image: productImage
    }
    // @ts-ignore
    dispatch(createProduct(values)).then(() => {
        handleCancel();
        message.success('Ürün başarıyla oluşturuldu.');
    })
  };

  return (
    <Modal
      title="İlan Oluştur"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[
        <Space>
          <Button onClick={handleCancel}>İptal</Button>
          <Button
              form="createProductForm" key="submit" htmlType="submit"
            className={
              "bg-brand-green text-white hover:bg-brand-green/20  hover:text-brand-green duration-300"
            }
          >
            Kaydet
          </Button>
        </Space>,
      ]}
    >
      <Form
          id='createProductForm'
        layout="vertical"
        hideRequiredMark
        onFinish={(values) => handleSaveForm(values)}
      >
        <Row gutter={16}>
            <Col span={12} className={'flex flex-col justify-center items-center mx-auto mb-2'}>
              <Avatar
                  src={productImage ? productImage : null}
                  shape="square"
                  size={80}
                  icon={<PictureOutlined />}
              />
              <FileBase64
                  multiple={false}
                  onDone={({ base64 }) => {
                    setProductImage(base64);
                  }}
              />
            </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="name" label="Ürün Adı">
              <Input
                size="large"
                placeholder="Ürün Adı"
                prefix={<InboxOutlined />}
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
                maxTagCount={"responsive"}
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
                maxTagCount={"responsive"}
                placeholder={"Kullanım Durumu Seçiniz"}
                options={[
                  { value: 0, label: "Yeni/Etiketli", key: "new" },
                  { value: 1, label: "Az Kullanılmış" , key: "used"},
                  { value: 2, label: "Kullanılmış" , key: "very-used"},
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
                maxTagCount={"responsive"}
                placeholder={"Kategorleri Seçiniz"}
                options={categories.map((category) => {
                  return {
                    label: category.name,
                    value: category._id,
                    key: `${category._id}-accepted`
                  };
                })}
              />
            </Form.Item>
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
  );
};
