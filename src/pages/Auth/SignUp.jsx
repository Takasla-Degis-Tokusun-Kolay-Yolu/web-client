import { Button, Form, Input, Select } from "antd";
import {
  LockOutlined,
  MailOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CITIES_DATA from "../../../src/data/cities.json";
import { signup } from "../../store/actions/auth.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    values = {
      firstName: values.name,
      lastName: values.surname,
      rePassword: values.rePassword,
      profileImage: "-",
      email: values.email,
      password: values.password1,
      location: values.location,
    };
    dispatch(signup(values, navigate));
  };
  const onFinishFailed = (errorInfo) => {};

  return (
    <Form
      className="w-full px-5 md:px-5 lg:px-0 md:w-full lg:w-2/3 mx-auto"
      layout={"vertical"}
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className={"flex flex-col md:flex-row gap-x-2 justify-center mb-2"}>
        <Form.Item
          label="İsim"
          className={"w-full md:w-1/2"}
          style={{
            marginBottom: 10,
          }}
          name="name"
          rules={[
            {
              required: true,
              message: "Adınızı giriniz.",
            },
          ]}
        >
          <Input
            size={"large"}
            placeholder="Adınız"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item
          label="Soyisim"
          className={"w-full md:w-1/2"}
          style={{
            marginBottom: 10,
          }}
          name="surname"
          rules={[
            {
              required: true,
              message: "Soyadınızı giriniz.",
            },
          ]}
        >
          <Input
            size={"large"}
            placeholder="Soyadınız"
            prefix={<UserOutlined />}
          />
        </Form.Item>
      </div>

      <div className={"flex flex-col md:flex-row gap-x-2 justify-center mb-2"}>
        <div className={"w-full md:w-1/2"}>
          <Form.Item
            label="Email"
            style={{
              marginBottom: 10,
            }}
            name="email"
            rules={[
              {
                required: true,
                message: "Email adresinizi giriniz.",
              },
              {
                type: "email",
                message: "Geçerli bir email adresi giriniz.",
              },
            ]}
          >
            <Input
              size={"large"}
              placeholder="Email Adresiniz"
              prefix={<MailOutlined />}
            />
          </Form.Item>
        </div>
        <div className={"sm:w-full md:w-1/2"}>
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
        </div>
      </div>

      <div className={"flex flex-col md:flex-row gap-x-2 justify-center mb-2"}>
        <Form.Item
          label="Parola"
          className={"w-full md:w-1/2"}
          style={{
            marginBottom: 10,
          }}
          name="password1"
          rules={[
            {
              required: true,
              message: "Parola giriniz.",
            },
            {
              min: 8,
              message: "Parolanız en az 8 karakter olmalıdır.",
            },
          ]}
        >
          <Input.Password
            size={"large"}
            placeholder="Parolanız"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item
          label="Parola Tektar"
          className={"w-full md:w-1/2"}
          style={{
            marginBottom: 10,
          }}
          placeholder="Parola Tekrar"
          name="rePassword"
          rules={[
            {
              required: true,
              message: "Parolanızı tekrar giriniz.",
            },
            {
              min: 8,
              message: "Parolanız en az 8 karakter olmalıdır.",
            },
            {
              validator: (rule, value) => {
                if (value !== document.getElementById("password1").value) {
                  return Promise.reject("Parolalar eşleşmiyor.");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input.Password
            size={"large"}
            placeholder="Parola Tekrar"
            prefix={<LockOutlined />}
          />
        </Form.Item>
      </div>
      <Form.Item>
        <div className="flex flex-rol justify-end items-center align-center">
          <Button
            htmlType={"submit"}
            className={"mr-2 text-brand-color flex items-center"}
            shape="round"
            icon={<UserAddOutlined />}
            size={"large"}
          >
            Kayıt Ol
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
