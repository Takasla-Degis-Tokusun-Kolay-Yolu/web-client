import {Tabs} from "antd";

export const TabView = () => {
    return (
        <div className={'w-full flex flex-row justify-center items-center'}>
            <Tabs
                className={'w-2/3 mx-48 pt-2 bg-white p-10'}
                centered
                size="large"
                type="line"
                defaultActiveKey="products"
                items={[
                    {key: 'products', label: 'Ürünler', children: <div>Content of Tab Pane 1</div>},
                    {key: 'request', label: 'Başvurular', children: <div>Content of Tab Pane 2</div>},
                    {key: 'offer', label: 'Teklifler', children: <div>Content of Tab Pane 3</div>},
                ]}
            />
        </div>
    )
}