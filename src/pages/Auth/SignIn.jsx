import { Form, Input, Checkbox, Button } from "antd";
import { MailOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/auth.js";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    values = {
      email: values.email,
      password: values.password,
    };
    dispatch(signin(values)).then(() => {
      navigate("/feed");
    });
  };
  const onFinishFailed = (errorInfo) => {};

  return (
    <Form
      layout="vertical"
      className="w-full px-5 md:px-0 md:w-2/3 lg:w-1/2 mx-auto"
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
      <Form.Item
        label="E-mail Adresi"
        style={{
          marginBottom: 10,
        }}
        name="email"
        rules={[
          {
            required: true,
            message: "Mail adresinizi giriniz.",
          },
          {
            type: "email",
            message: "Geçerli bir mail adresi giriniz.",
          },
          {
            whitespace: true,
            message: "Mail adresiniz boşluk içermemelidir.",
          },
        ]}
      >
        <Input
          size="large"
          placeholder="Email Adresi"
          prefix={<MailOutlined />}
        />
      </Form.Item>
      <Form.Item
        label="Parola"
        name="password"
        style={{
          marginBottom: 10,
        }}
        rules={[
          {
            required: true,
            message: "Parolanızı giriniz.",
          },
          {
            min: 6,
            message: "Parolanız en az 8 karakter olmalıdır.",
          },
          {
            whitespace: true,
            message: "Parolanız boşluk içermemelidir.",
          },
        ]}
      >
        <Input.Password
          size="large"
          placeholder="Parola"
          prefix={<LockOutlined />}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot text-brand-green" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <div className="flex flex-rol justify-end items-center align-center">
          <Button
            htmlType={"submit"}
            className={"mr-2 text-brand-color flex items-center"}
            shape="round"
            icon={<LoginOutlined />}
            size={"large"}
          >
            Giriş Yap
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
