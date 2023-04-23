import { useState, useEffect, Fragment } from "react";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { Avatar, Button, Dropdown, message } from "antd";
import {
  PlusOutlined,
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { ProfileEditableDrawer } from "./ProfileEditableDrawer";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-top.png";
export const NavBar = ({ userInformation, activeUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState(
    localStorage.getItem("access_token")
  );
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  useEffect(() => {
    const token = userToken;

    if (userToken) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem("access_token");
        logoutHandler();
      }
      setUserToken(localStorage.getItem("access_token"));
    }
  }, [userToken]);

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    message.success("Başarıyla çıkış yaptınız.");
    setUserToken(null);
  };

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
            <Link to={"/feed"}>
              <img
                src={logo}
                alt={"takasla-logo"}
                className={"h-10 cursor-pointer "}
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    href={item.href}
                    key={item.id}
                    className={"text-xl font-medium"}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            {Object.keys(userInformation).length > 0 && activeUser ? (
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
                      src={
                        userInformation.profileImage !== "-"
                          ? userInformation.profileImage
                          : null
                      }
                      style={{
                        backgroundColor: "#f56a00",
                        verticalAlign: "middle",
                        borderColor: "#4A772F",
                      }}
                      size="large"
                      gap={5}
                    >
                      {userInformation.profileImage === "-" &&
                        userInformation?.firstName[0].toUpperCase() +
                          userInformation.lastName[0].toUpperCase()}
                    </Avatar>
                  </div>
                </Dropdown>
              </div>
            ) : (
              <div className={"flex flex-row items-center"}>
                <Button
                  onClick={() => {
                    navigate("/auth");
                  }}
                  className={
                    "bg-brand-green text-white hover:bg-brand-green/20  hover:text-brand-green duration-300"
                  }
                >
                  Giriş Yap
                </Button>
              </div>
            )}
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
