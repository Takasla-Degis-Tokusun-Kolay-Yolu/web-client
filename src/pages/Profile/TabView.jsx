import {Tabs} from "antd";
import {Products} from "./Tabs/Products.jsx";
import {Requests} from "./Tabs/Requests.jsx";
import {Offers} from "./Tabs/Offers.jsx";

export const TabView = ({user}) => {
    return (
        <div className={'w-full flex flex-row justify-center items-center'}>
           <Tabs
                    className={'w-2/3 mx-48 pt-2 bg-white p-10'}
                    centered
                    size="large"
                    type="line"
                    defaultActiveKey="products"
                    items={[
                        {key: 'products', label: 'Ürünler', children: <Products user={user}/>},
                        {key: 'request', label: 'Gelen Başvurular', children: <Requests user={user}/>},
                        {key: 'offer', label: 'Giden Teklifler', children: <Offers user={user}/>},
                    ]}
                />
        </div>
    )
}