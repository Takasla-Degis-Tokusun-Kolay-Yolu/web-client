import { useState, useEffect, Fragment } from 'react';
import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Dropdown, Space, Tooltip, message } from 'antd';
import { PlusOutlined, UserOutlined, SettingOutlined, PoweroffOutlined  } from '@ant-design/icons';


export const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userToken, setUserToken] = useState(localStorage.getItem('access_token'));
    const [userInformation, setUserInformation] = useState(null);

    useEffect(() => {
        const token = userToken;

        if (userToken) {
            const decodedToken = decode(token);
            setUserInformation(decodedToken._doc)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                localStorage.removeItem('access_token');
                logoutHandler();
            }
            setUserToken(localStorage.getItem('access_token'));
        }

    }, [userToken]);

    const logoutHandler = () => {
        dispatch({ type: 'LOGOUT' })
        window.location.reload();
        setUserToken(null);
    };

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    const navigation = [
        { id: 1, name: 'Akış', href: '/feed', current: true },
        { id: 2, name: 'Kategoriler', href: '/profile', current: false },
    ]

    const items = [
        {
            label: 'Profil',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: 'Ayarlar',
            key: '2',
            icon: <SettingOutlined />,
        },
        {
            label: 'Çıkış Yap',
            key: '3',
            icon: <PoweroffOutlined />,
            danger: true,
        }
    ];

    const handleMenuClick = (e) => {
        if (e.key === '3') {
            logoutHandler();
        }
      };

      const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e.key);
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
                        <div >
                            LOGO
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item) => (
                                    <a href={item.href} key={item.id} >{item.name}</a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Button className='bg-brand-green text-white mr-2'  shape="round" icon={<PlusOutlined />}>Primary Button</Button>
                            <Dropdown menu={menuProps} onClick={handleButtonClick}>
                                <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large" gap={5}>
                                    {userInformation ? userInformation?.firstName[0].toUpperCase() + userInformation.lastName[0].toUpperCase() : null}
                                </Avatar>
                            </Dropdown>
                        </div>
                    </div>

                </div>
            </nav>
        </Fragment>
    )

}

