import {
  Avatar,
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Rate,
  Row,
  Select,
  Space,
  Popconfirm,
} from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

// @ts-ignore
import CITIES_DATA from "../../data/cities.json";
import { useRef, useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, updateUser } from "../../store/actions/auth.js";

export const ProfileEditableDrawer = ({ onClose, isShowDrawer, userData }) => {
  const [profileImage, setProfileImage] = useState(userData.profileImage);
  const submitRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSaveForm = (values) => {
    // @ts-ignore
    values = {
      firstName: values.firstName,
      lastName: values.lastName,
      location: values.location,
      profileImage: profileImage,
    };
    // @ts-ignore
    dispatch(updateUser(values, navigate));
    onClose();
  };

  const [open, setOpen] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // @ts-ignore
    dispatch(deleteUser(userData._id, navigate));
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

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
            <Button
              onClick={() => {
                submitRef.current?.click();
              }}
              className={
                "bg-brand-green text-white hover:bg-brand-green/20  hover:text-brand-green duration-300"
              }
            >
              Kaydet
            </Button>
          </Space>
        }
      >
        <Form
          layout="vertical"
          hideRequiredMark
          initialValues={userData}
          onFinish={(values) => handleSaveForm(values)}
        >
          <Row gutter={16}>
            <Col
              span={24}
              className={"flex flex-col items-center justify-center gap-y-2"}
            >
              <Rate disabled defaultValue={userData.rate} />
              {profileImage === "-" ? (
                <Avatar shape="square" size={80} icon={<UserOutlined />} />
              ) : (
                <Avatar
                  src={profileImage}
                  shape="square"
                  size={80}
                  icon={<UserOutlined />}
                />
              )}
              <FileBase64
                multiple={false}
                onDone={({ base64 }) => {
                  setProfileImage(base64);
                }}
              />
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
            <Col span={24} className={"flex justify-end gap-x-4"}>
              <Popconfirm
                title="Uyarı"
                placement="topLeft"
                description="Hesabınızı silmek istediğinize emin misiniz? Bu işlem geri alınamaz."
                open={open}
                cancelText="İptal Et"
                okText="Evet"
                onConfirm={handleOk}
                okButtonProps={{
                  className:
                    "bg-brand-green text-white hover:bg-brand-green/20 hover:text-brand-green duration-300",
                }}
                onCancel={handleCancel}
              >
                <button
                  type={"button"}
                  onClick={showPopconfirm}
                  className={
                    "bg-brand-red px-3 py-1 text-white rounded-md hover:bg-brand-red/20 hover:text-brand-red duration-300"
                  }
                >
                  Hesabımı Sil
                </button>
              </Popconfirm>
              <button
                type={"submit"}
                ref={submitRef}
                className={
                  "bg-brand-green px-3 py-1 text-white rounded-md hover:bg-brand-green/20 hover:text-brand-green duration-300"
                }
              >
                Güncelle
              </button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
