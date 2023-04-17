
import { Tabs } from 'antd';
import SignIn from './SignIn';
import SignUp from './SignUp';
const Auth = () => {

  return (
     <>
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-1/2 h-2/3 bg-white rounded-lg shadow-lg'>
        <Tabs
          defaultActiveKey="sign-in"
          centered
          className='pt-3'
          items={
            [
              {
                label: 'Giriş Yap',
                key: 'sign-in',
                children: <SignIn />
              },
              {
                label: 'Kayıt Ol',
                key: 'sign-up',
                children: <SignUp/>
              }
              
            ]
          }
        />
      </div>
    </div>
  </>)
};
export default Auth;