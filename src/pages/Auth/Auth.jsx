import { Tabs } from "antd";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
const Auth = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 mx-4 md:mx-8 lg:px-0 h-11/12 md:h-2/3 lg:h-3/8 bg-white rounded-lg shadow-lg">
          <Tabs
            defaultActiveKey="sign-in"
            centered
            className="pt-3"
            items={[
              {
                label: "Giriş Yap",
                key: "sign-in",
                children: <SignIn />,
              },
              {
                label: "Kayıt Ol",
                key: "sign-up",
                children: <SignUp />,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};
export default Auth;
