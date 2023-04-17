import {Form, Input, Checkbox, Button, } from "antd";
import {MailOutlined, LockOutlined, LoginOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {signin} from "../store/actions/auth.js";


const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = (values) => {
        values = {
            email : values.email,
            password : values.password
        }
        dispatch(signin(values, navigate))
    }
    const onFinishFailed = (errorInfo) => { }



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
                    marginBottom: 10
                }}
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Mail adresinizi giriniz.',
                    },
                ]}
            >
                <Input size="large" placeholder='Email Adresi' prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item
                label="Parola"
                name="password"
                style={{
                    marginBottom: 10
                }}
                rules={[
                    {
                        required: true,
                        message: 'Parolanızı giriniz.',
                    },
                ]}
            >
                <Input.Password size="large" placeholder='Parola' prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot text-brand-green" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item >
                <div className='flex flex-rol justify-center items-center align-center'>
                <Button htmlType={'submit'} className={'mr-2 text-brand-color flex items-center'} shape="round" icon={<LoginOutlined  />} size={'large'}>
                    Giriş Yap
                </Button>
                Or <a href="" className='ml-1 text-brand-green'>register now!</a>
                </div>
            </Form.Item>
        </Form>
    )
}

export default SignIn;