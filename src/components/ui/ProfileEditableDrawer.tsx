import {
  Avatar,
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Row, Select,
  Space,
} from "antd";
import {
  LoginOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";

// @ts-ignore
import CITIES_DATA from "../../data/cities.json";
import {useRef, useState} from "react";
import FileBase64 from "react-file-base64";


export const ProfileEditableDrawer = ({ onClose, isShowDrawer, userData }) => {
  const [profileImage, setProfileImage] = useState(userData.profileImage);
  const submitRef = useRef(null);
  const handleSaveForm = (values) => {
    console.log(values);
    onClose();
  }

  return (
    <>
      <Drawer
        title={userData.firstName + " " + userData.lastName}
        width={720}
        onClose={onClose}
        open={isShowDrawer}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>İptal</Button>
            <Button onClick={() => {
              submitRef.current?.click()
            }} className={"bg-brand-green text-white hover:bg-brand-green/20  hover:text-brand-green duration-300"}>
              Kaydet
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark initialValues={userData} onFinish={(values) => handleSaveForm(values)}>
          <Row gutter={16}>
            <Col span={24} className={'flex flex-col items-center justify-center gap-y-2'}>
                {profileImage === '-' ? (
                    <Avatar shape="square" size={80} icon={<UserOutlined />} />
                ) : (
                    <Avatar src={profileImage} shape="square" size={80} icon={<UserOutlined />} />
                )}
              <FileBase64
                  multiple={false}
                  onDone={({ base64 }) => {setProfileImage(base64)}} />
            </Col>
          </Row>
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
                <Input
                  size="large"
                  name="lastName"
                  prefix={<UserOutlined />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="email" label="Mail Adresiniz">
                <Input
                    size="large"
                    name="email"
                    prefix={<MailOutlined />}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                  label="Lokasyon"
                  style={{
                    marginBottom: 10,
                  }}
                  name="location"
                  rules={[
                    {
                      required: true,
                      message: "Konumunuzu seçiniz.",
                    },
                  ]}
              >
                <Select
                    size={"large"}
                    placeholder={"Konumunuz"}
                    options={CITIES_DATA.map((city) => {
                      return {
                        label: city.name,
                        value: city.name,
                      };
                    })}
                />
              </Form.Item>
            </Col>
            <Col span={24} className={'flex justify-end'}>
              <button type={'submit'} ref={submitRef} className={"bg-brand-green px-3 py-1 text-white rounded-md hover:bg-brand-green/20 hover:text-brand-green duration-300"}>
                Güncelle
              </button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
