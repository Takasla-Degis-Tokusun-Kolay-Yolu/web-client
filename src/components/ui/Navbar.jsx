import { useState, useEffect, Fragment } from "react";
import decode from "jwt-decode";
import {useDispatch, useSelector} from "react-redux";
import { Avatar, Button, Dropdown, message } from "antd";
import {
  PlusOutlined,
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { ProfileEditableDrawer } from "./ProfileEditableDrawer";
import { fetchActiveUser } from "../../store/actions/auth.js";

export const NavBar = () => {
  const dispatch = useDispatch();
  const [userToken, setUserToken] = useState(
    localStorage.getItem("access_token")
  );
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  const [userInformation, setUserInformation] = useState(null);



  useEffect(() => {
    const token = userToken;

    if (userToken) {
      const decodedToken = decode(token);
      setUserInformation(decodedToken._doc);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem("access_token");
        logoutHandler();
      }
      setUserToken(localStorage.getItem("access_token"));
    }
  }, [userToken]);



  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    window.location.reload();
    setUserToken(null);
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const authData = useSelector((state) => state.authData);
  console.log(authData);


  const navigation = [
    { id: 1, name: "Akış", href: "/feed", current: true },
    { id: 2, name: "Kategoriler", href: "/profile", current: false },
  ];

  const items = [
    {
      label: "Profil",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Ayarlar",
      key: "2",
      icon: <SettingOutlined />,
    },
    {
      label: "Çıkış Yap",
      key: "3",
      icon: <PoweroffOutlined />,
      danger: true,
    },
  ];

  const handleMenuClick = (e) => {
    switch (e.key) {
      case "1":
        console.log("Profil");
        break;
      case "2":
        setIsShowDrawer(true);
        break;
      case "3":
        logoutHandler();
        break;
    }
  };

  const handleButtonClick = (e) => {
    //message.info("Click on left button.");
    console.log("click left button", e.key);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Fragment>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>LOGO</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a href={item.href} key={item.id}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className={"flex flex-row items-center"}>
              <Button
                className="bg-brand-green text-white mr-2"
                shape="round"
                icon={<PlusOutlined />}
              >
                Primary Button
              </Button>
              <Dropdown
                menu={menuProps}
                trigger={["click"]}
                onClick={handleButtonClick}
              >
                <div
                  className={
                    "flex flex-row items-center gap-x-2 bg-gray-100 py-2 px-4 rounded-md cursor-pointer"
                  }
                >
                  <p>
                    {userInformation
                      ? userInformation?.firstName +
                        " " +
                        userInformation.lastName
                      : null}
                  </p>
                  <Avatar
                    shape="square"
                    style={{
                      backgroundColor: "#f56a00",
                      verticalAlign: "middle",
                    }}
                    size="large"
                    gap={5}
                  >
                    {userInformation
                      ? userInformation?.firstName[0].toUpperCase() +
                        userInformation.lastName[0].toUpperCase()
                      : null}
                  </Avatar>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
      {isShowDrawer && (
        <ProfileEditableDrawer
          userData={userInformation}
          onClose={() => setIsShowDrawer(false)}
          isShowDrawer={isShowDrawer}
        />
      )}
    </Fragment>
  );
};
