import {Spin} from "antd";

export const Loader = () => {
    return (
        <div
            style={{
                margin: '20px 0',
                textAlign: 'center',
                marginBottom: '20px',
                padding: '30px 50px',
                borderRadius: '4px',
                background: '#fff',
            }}
        >
            <Spin size='large' />
        </div>
    )
}